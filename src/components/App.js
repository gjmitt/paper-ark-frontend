import React, { useEffect, useState } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
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

  function getMaterial(location) {
    const path = location.pathname;
    return path.slice(path.indexOf(path) + 7);
  }

  return (
    <div className="App">
      <Header />
      <NavBar />
      <Switch>
        <Route exact path="/about">
          <About />
        </Route>
        <Route path="/paper">
          <PaperListContainer ark={ark} getCategorys={getCategorys} material={getMaterial(useLocation())} />
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
