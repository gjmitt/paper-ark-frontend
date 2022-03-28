import React, { useEffect, useState } from "react";
import PaperListContainer from "./PaperListContainer";
import Header from "./Header";
import NavBar from "./NavBar";

const PAPER_URL = process.env.NODE_ENV == "production"
  ? "https://paper-ark.herokuapp.com/paper"
  : "http://localhost:4000/paper"
console.log({ PAPER_URL })

function App() {
  const [ark, setArk] = useState([]);

  useEffect(() => {
    fetch(PAPER_URL)
      .then((resp) => resp.json())
      .then((items) => setArk(items))
  }, [])

  return (
    <div className="App">
      <Header />
      <NavBar />
      <PaperListContainer items={ark} />
    </div>
  );

}

export default App;
