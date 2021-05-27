import React from "react";
import "./App.css";
import Table from "./components/Table";
import World from "./components/World";

function App() {
  return (
    <React.Fragment>
      <div className="allDataGrouping">
        <h1>World wide scores</h1>
        <World />
      </div>
      <div className="allDataGrouping">
        <h1>High Scores per Country</h1>
        <Table />
      </div>
    </React.Fragment>
  );
}

export default App;
