import useNavigation from "../../hooks/useNavigation";
import NAV_ACTIONS from "../../store/navigation.actions";

import ArrowSvg from "../../assets/arrow.svg";

import "./styles.css";

export default function NavPad() {
  const { moveRobot } = useNavigation();

  return (
    <div className="container">
      <div className="button-container">
        <img
          src={ArrowSvg}
          alt="Arrow SVG"
          style={{
            height: 60,
            width: 60,
            cursor: "pointer",
          }}
          onClick={() => moveRobot(NAV_ACTIONS.UP)}
        />
        <div className="middle-group">
          <img
            src={ArrowSvg}
            alt="Arrow SVG"
            style={{
              height: 60,
              width: 60,
              transform: "rotate(-90deg)",
              cursor: "pointer",
            }}
            onClick={() => moveRobot(NAV_ACTIONS.LEFT)}
          />
          <img
            src={ArrowSvg}
            alt="Arrow SVG"
            style={{
              height: 60,
              width: 60,
              transform: "rotate(90deg)",
              cursor: "pointer",
            }}
            onClick={() => moveRobot(NAV_ACTIONS.RIGHT)}
          />
        </div>
        <img
          src={ArrowSvg}
          alt="Arrow SVG"
          style={{
            height: 60,
            width: 60,
            transform: "rotate(180deg)",
            cursor: "pointer",
          }}
          onClick={() => moveRobot(NAV_ACTIONS.DOWN)}
        />
      </div>
      <button
        onClick={() => moveRobot(NAV_ACTIONS.RESET)}
        className="reset-button"
      >
        Reset Position
      </button>
    </div>
  );
}
