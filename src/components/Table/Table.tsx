import { useState } from "react";
import { Cell } from "./Cell";
import useNavigation from "../../hooks/useNavigation";
import isEqual from "lodash.isequal";

import "./Table.scss";

const Table = () => {
  const { position } = useNavigation();

  const renderCells = () => {
    const cells = [];
    for (let y = 5; y >= 1; y--) {
      for (let x = 1; x < 6; x++) {
        cells.push(
          <Cell
            key={`${x}-${y}`}
            cellPosition={{ x, y }}
            isOccupied={isEqual(position, { x, y })}
          />
        );
      }
    }
    return cells;
  };

  return (
    <div className="cell-container">
      {renderCells().map((cell, index) => (
        <div key={`cell-wrapper-${index}`} className="cell-item">
          {cell}
        </div>
      ))}
    </div>
  );
};

export default Table;
