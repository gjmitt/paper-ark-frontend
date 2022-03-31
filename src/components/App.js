import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import PaperContainer from "./PaperContainer";
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

  function handleOnLoan(id) {
    const newArk = ark.map((item) => item.id === id ? { ...item, onLoan: !item.onLoan } : item)
    setArk(newArk);
  }

  function getCategorys(items) {
    const categorys = items.map((paper) => paper.category);
    const uniqueCategorys = Array.from(new Set(categorys))
    return ["Any", ...uniqueCategorys];
  }

  return (
    <div className="App">
      <Header />
      <NavBar setMaterial={setMaterial} showNewLink={ark.length > 0} />
      <Switch>
        <Route exact path="/about">
          <About />
        </Route>
        <Route path="/paper">
          <PaperContainer
            ark={ark}
            categoryOptions={getCategorys(ark)}
            material={material}
            onLoan={handleOnLoan}
          />
        </Route>
        <Route exact path="/new">
          <NewPaperForm
            onNewPaper={handleNewPaper}
            categoryOptions={getCategorys(ark)}
            material={material}
          />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );

}

export default App;
