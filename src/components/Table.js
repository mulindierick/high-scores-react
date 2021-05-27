import React from "react";
import PlayerScore from "./PlayerScore";
import allCountryScores from "../scores";
import { useState } from "react";

const Table = () => {
  let [condition, setCondition] = useState(false);

  let data = allCountryScores.sort((a, b) => a.name.localeCompare(b.name));
  return (
    <React.Fragment>
      <button onClick={() => setCondition(!condition)}>Sort Scores</button>
      {data.map((table, index) => {
        return (
          <div key={index + 1} className="tableGroup">
            <table key={index + 2}>
              <caption key={index + 3}>HIGH SCORES: {table.name}</caption>
              <tbody key={index + 4}>
                <PlayerScore
                  playerScores={
                    condition
                      ? table.scores.sort((a, b) => a.s - b.s)
                      : table.scores.sort((a, b) => b.s - a.s)
                  }
                />
              </tbody>
            </table>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default Table;
