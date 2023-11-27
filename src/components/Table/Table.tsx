import { useState, useEffect } from "react";
import isEqual from "lodash.isequal";

import { Cell } from "./Cell";

import useRobotControl from "../../hooks/useRobotControls";
import { MAX_DISTANCE, MIN_DISTANCE } from "../../utils/constants";
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

  // remove travel message and enable navpad
  useEffect(() => {
    !newPosition && completeTeleport();
  }, [position]);

  const renderCells = () => {
    const cells = [];
    for (let y = MAX_DISTANCE; y >= MIN_DISTANCE; y--) {
      for (let x = MIN_DISTANCE; x <= MAX_DISTANCE; x++) {
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
          <p className="alert-text">Prontoroid is traveling!</p>
        </div>
      ) : null}
    </div>
  );
};

export default Table;
