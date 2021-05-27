import React from "react";
import allCountryScores from "../scores";
import { useState } from "react";
const World = () => {
  let [condition, ,] = useState(false);
  let data = allCountryScores.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <React.Fragment>
      {data.map((table, index) => {
        return (
        
            <tr key={index + 1} className="tableGroupW" >
              <th className="space" key={index + 2}>
                {condition
                  ? table.scores.sort((a, b) => a.s - b.s)[0].n
                  : table.scores.sort((a, b) => b.s - a.s)[0].n}
              </th>
              <td className="space" key={index + 3}>
                {condition
                  ? table.scores.sort((a, b) => a.s - b.s)[0].s
                  : table.scores.sort((a, b) => b.s - a.s)[0].s}
              </td>
            </tr>
         
        );
      })}
    </React.Fragment>
  );
};

export default World;
