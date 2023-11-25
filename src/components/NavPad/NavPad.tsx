import useNavigation from "../../hooks/useNavigation";
import NAV_ACTIONS from "../../store/navigation.actions";

import "./NavPad.scss";

export default function NavPad() {
  const { moveRobot, position } = useNavigation();

  return (
    <div className="navpad-container">
      <div className="">
        <button onClick={() => moveRobot(NAV_ACTIONS.UP)}>Arrow Up</button>
      </div>
      <button onClick={() => moveRobot(NAV_ACTIONS.LEFT)}>Arrow Left</button>
      <button onClick={() => moveRobot(NAV_ACTIONS.RIGHT)}>Arrow Right</button>
      <div className="div">
        <button onClick={() => moveRobot(NAV_ACTIONS.DOWN)}>Arrow Down</button>
      </div>
    </div>
  );
}
