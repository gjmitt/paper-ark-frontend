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

  return (
    <div className="App">
      <Header />
      <NavBar />
      <Switch>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/paper">
          <PaperListContainer ark={ark} material="" />
        </Route>
        <Route exact path="/paper/maps">
          <PaperListContainer ark={ark} material="Map" />
        </Route>
        <Route exact path="/paper/books">
          <PaperListContainer ark={ark} material="Book" />
        </Route>
        <Route exact path="/paper/events">
          <PaperListContainer ark={ark} material="Event" />
        </Route>
        <Route exact path="/new">
          <NewPaperForm onNewPaper={handleNewPaper} />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      {/* <PaperListContainer items={
        ark.filter((item) => item.material === selectedMaterial)} /> */}
    </div>
  );

}

export default App;
