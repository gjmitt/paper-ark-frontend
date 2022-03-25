import React, { useEffect, useState } from "react";
import PaperList from "./PaperList";

function App() {
  const [ark, setArk] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/paper")
      .then((resp) => resp.json())
      .then((items) => setArk(items))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Paper Ark</h1>
        <PaperList items={ark} />
      </header>
    </div>
  );
}

export default App;
