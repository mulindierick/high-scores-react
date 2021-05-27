import React from "react";


const PlayerScore = (props) => {
  return (
    <React.Fragment>
      {props.playerScores.map((scores, index) => {
        return (
          <tr key={index + 1}>
            <th key={index + 2}>{scores.n}</th>
            <td key={index + 3}>{scores.s}</td>
          </tr>
        );
      })}
    </React.Fragment>
  );
};

export default PlayerScore;
