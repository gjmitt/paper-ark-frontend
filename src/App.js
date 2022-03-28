import React, { useEffect, useState } from "react";
import PaperListContainer from "./PaperListContainer";
import Header from "./Header";
import NavBar from "./NavBar";

function App() {
  const [ark, setArk] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/paper/`)
      .then((resp) => resp.json())
      .then((items) => setArk(items))
  }, [])

  return (
    <div className="App">
      <Header />
      <NavBar />
      <PaperListContainer ark={ark} />
    </div>
  );

}

export default App;
