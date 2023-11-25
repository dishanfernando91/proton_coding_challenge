import "./styles.css";

import { Position } from "../../../store/navigation.reducer";
import RobotSvg from "../../../assets/robot.svg";

interface CellProps {
  cellPosition: Position;
  isOccupied: boolean;
  setNewPosition: React.Dispatch<React.SetStateAction<Position | undefined>>;
}

const Cell: React.FC<CellProps> = ({
  cellPosition,
  isOccupied,
  setNewPosition,
}) => {
  return (
    <div className="cell-body" onClick={() => setNewPosition(cellPosition)}>
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
