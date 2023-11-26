import { useContext } from "react";
import { RobotControlContext } from "../store/robotControl/robotControl.context";

const useRobotControl = () => {
  const context = useContext(RobotControlContext);

  if (!context) {
    throw new Error("Must be used with RobotControlContext");
  }

  return context;
};

export default useRobotControl;
