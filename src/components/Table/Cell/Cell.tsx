import "./styles.css";

import RobotSvg from "../../../assets/robot.svg";
import type { Position } from "../../../types";

interface CellProps {
  cellPosition: Position;
  isOccupied: boolean;
  setNewPosition: React.Dispatch<React.SetStateAction<Position | undefined>>;
  isTraversing: boolean | undefined;
}

const Cell: React.FC<CellProps> = ({
  cellPosition,
  isOccupied,
  setNewPosition,
  isTraversing,
}) => {
  return (
    <div
      className={`cell-body ${isTraversing && "disabled"}`}
      onClick={() => {
        !isTraversing && setNewPosition(cellPosition);
      }}
    >
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
