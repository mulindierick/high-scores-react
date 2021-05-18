import React from "react";
import PlayerScore from "./PlayerScore";
import allCountryScores from "../scores";

const Table = () => {
  let data = allCountryScores;
  return (
    <React.Fragment>
      {data.map((table, index) => {
        return (
          <div key ={index} className="tableGroup">
            <table key ={index}>
              <caption key ={index}>HIGH SCORES: {table.name}</caption>
              <tbody key ={index}>
                <PlayerScore playerScores={table.scores} />
              </tbody>
            </table>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default Table;
