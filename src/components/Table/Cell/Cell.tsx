// import { useState } from "react";
import "./styles.css";

import { Position } from "../../../store/navigation.reducer";
import RobotSvg from "../../../assets/robot.svg";

interface CellProps {
  cellPosition: Position;
  isOccupied: boolean;
  teleportRobot: (x: number, y: number) => void;
}

const Cell: React.FC<CellProps> = ({
  cellPosition,
  isOccupied,
  teleportRobot,
}) => {
  return (
    <div className="cell-body" onClick={() => teleportRobot(cellPosition)}>
      {isOccupied ? (
        <img
          src={RobotSvg}
          alt="Robot Image"
          style={{ height: 40, width: 40 }}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Cell;
