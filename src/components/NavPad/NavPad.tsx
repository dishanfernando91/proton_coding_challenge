import useRobotControl from "../../hooks/useRobotControls";
import ROBOT_CONTROLS from "../../store/robotControl/robotControl.actions";

import ArrowSvg from "../../assets/arrow.svg";

import "./styles.css";

export default function NavPad() {
  const { moveRobot, isTraversing } = useRobotControl();

  const styles = {
    height: 60,
    width: 60,
    cursor: isTraversing ? "not-allowed" : "pointer",
  };

  return (
    <div className="container">
      <div className="button-container">
        <img
          src={ArrowSvg}
          alt="Arrow SVG"
          style={styles}
          onClick={() => !isTraversing && moveRobot(ROBOT_CONTROLS.UP)}
        />
        <div className="middle-group">
          <img
            src={ArrowSvg}
            alt="Arrow SVG"
            style={{
              ...styles,
              transform: "rotate(-90deg)",
            }}
            onClick={() => !isTraversing && moveRobot(ROBOT_CONTROLS.LEFT)}
          />
          <img
            src={ArrowSvg}
            alt="Arrow SVG"
            style={{
              ...styles,
              transform: "rotate(90deg)",
            }}
            onClick={() => !isTraversing && moveRobot(ROBOT_CONTROLS.RIGHT)}
          />
        </div>
        <img
          src={ArrowSvg}
          alt="Arrow SVG"
          style={{
            ...styles,
            transform: "rotate(180deg)",
          }}
          onClick={() => !isTraversing && moveRobot(ROBOT_CONTROLS.DOWN)}
        />
      </div>
      <button
        onClick={() => !isTraversing && moveRobot(ROBOT_CONTROLS.RESET)}
        className="reset-button"
      >
        Reset Position
      </button>
    </div>
  );
}
