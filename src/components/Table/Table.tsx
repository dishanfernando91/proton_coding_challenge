import React, { useState } from "react";
import { Cell } from "./Cell";

import "./Table.scss";

const Table: React.FC = () => {
  const [cells, setCells] = useState<boolean[][]>(
    Array.from({ length: 5 }, () => Array(5).fill(false))
  );

  const handleCellClick = (clickedX: number, clickedY: number) => {
    setCells((prevCells) => {
      const newCells = [...prevCells];
      newCells[clickedX][clickedY] = !newCells[clickedX][clickedY];
      return newCells;
    });
  };

  return (
    <div className="grid-container">
      {cells.map((row, x) => (
        <div key={x} className="grid-item">
          {row.map((isOccupied, y) => (
            <Cell
              key={`${x}-${y}`}
              x={x}
              y={y}
              isOccupied={isOccupied}
              onClick={handleCellClick}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Table;
