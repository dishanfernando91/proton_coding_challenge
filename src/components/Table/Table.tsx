import { useState, useEffect } from "react";
import { Cell } from "./Cell";
import useRobotControl from "../../hooks/useRobotControls";
import isEqual from "lodash.isequal";

import type { Position } from "../../types";

import "./styles.css";

const Table = () => {
  const { position, teleportRobot, isTraversing, completeTeleport } =
    useRobotControl();

  const [newPosition, setNewPosition] = useState<Position | undefined>();

  useEffect(() => {
    if (newPosition) {
      teleportRobot(position, newPosition);
    }
    setNewPosition(undefined);
  }, [newPosition, isEqual(position, newPosition)]);

  useEffect(() => {
    !newPosition && completeTeleport();
  }, [position]);

  const renderCells = () => {
    const cells = [];
    for (let y = 5; y >= 1; y--) {
      for (let x = 1; x < 6; x++) {
        cells.push(
          <Cell
            key={`${x}-${y}`}
            cellPosition={{ x, y }}
            isOccupied={isEqual(position, { x, y })}
            setNewPosition={setNewPosition}
            isTraversing={isTraversing}
          />
        );
      }
    }
    return cells;
  };

  return (
    <div>
      <div className="cell-container">
        {renderCells().map((cell, index) => (
          <div key={`cell-wrapper-${index}`} className="cell-item">
            {cell}
          </div>
        ))}
      </div>
      {isTraversing ? (
        <div className="text-container">
          <p className="alert-text">Prontoroid is travelling!</p>
        </div>
      ) : null}
    </div>
  );
};

export default Table;
