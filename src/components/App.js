import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import PaperListContainer from "./PaperListContainer";
import Header from "./Header";
import NavBar from "./NavBar";
import About from "./About";
import Home from "./Home";
import NewPaperForm from "./NewPaperForm";

function App() {
  const [ark, setArk] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/paper/`)
      .then((resp) => resp.json())
      .then((items) => setArk(items))
  }, [])

  function handleNewPaper(newPaper) {
    setArk([...ark, newPaper]);
  }

  function getCategorys(items) {
    const categorys = items.map((paper) => paper.category);
    const uniqueCategorys = Array.from(new Set(categorys))
    return ["Any", ...uniqueCategorys];
  }

  return (
    <div className="App">
      <Header />
      <NavBar />
      <Switch>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/paper">
          <PaperListContainer ark={ark} material="" getCategorys={getCategorys} />
        </Route>
        <Route exact path="/paper/maps">
          <PaperListContainer ark={ark} material="Map" getCategorys={getCategorys} />
        </Route>
        <Route exact path="/paper/books">
          <PaperListContainer ark={ark} material="Book" getCategorys={getCategorys} />
        </Route>
        <Route exact path="/paper/events">
          <PaperListContainer ark={ark} material="Event" getCategorys={getCategorys} />
        </Route>
        <Route exact path="/new">
          <NewPaperForm onNewPaper={handleNewPaper} categorys={getCategorys(ark)} />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );

}

export default App;
