import React from "react";

const PlayerScore = (props) => {
  return (
    <React.Fragment>
      {props.playerScores.map((scores, index) => {
        return (
          <tr key={index}>
            <th key={index}>{scores.n}</th>
            <td key={index}>{scores.s}</td>
          </tr>
        );
      })}
    </React.Fragment>
  );
};

export default PlayerScore;
