// import { useState } from "react";
import "./Cell.scss";

import RobotSvg from "../../assets/robot.svg";

interface CellProps {
  cellPosition: {
    x: number;
    y: number;
  };
  isOccupied: boolean;
  // onClick: (x: number, y: number) => void;
}

const Cell: React.FC<CellProps> = ({ cellPosition, isOccupied }) => {
  return (
    <div className="cell-body" onClick={() => console.log(cellPosition)}>
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
