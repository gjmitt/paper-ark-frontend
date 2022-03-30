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
  const [material, setMaterial] = useState("");

  useEffect(() => {
    if (material !== "") {
      fetch(`${process.env.REACT_APP_API_URL}/${material}`)
        .then((resp) => resp.json())
        .then((items) => setArk(items))
    }
  }, [material])

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
      <NavBar setMaterial={setMaterial} />
      <Switch>
        <Route exact path="/about">
          <About />
        </Route>
        <Route path="/paper">
          <PaperListContainer ark={ark} getCategorys={getCategorys} material={material} />
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
