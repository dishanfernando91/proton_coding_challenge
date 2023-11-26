import React, { createContext, useReducer } from "react";

import robotControlReducer, { initialState } from "./robotControl.reducer";
import ROBOT_ACTIONS from "./robotControl.actions";

import type { RobotControlContextState, Position } from "../../types";
import calculateDelay from "../../utils/functions/teleportDelay";

export const RobotControlContext = createContext<RobotControlContextState>(
  initialState as RobotControlContextState
);

export const RobotControlProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(robotControlReducer, initialState);

  const moveRobot = (direction: string) =>
    dispatch({
      type: direction,
    });

  const completeTeleport = () => {
    dispatch({
      type: ROBOT_ACTIONS.TELEPORT_COMPLETE,
    });
  };

  const teleportRobot = (startPosition: Position, newPosition: Position) => {
    dispatch({
      type: ROBOT_ACTIONS.TELEPORTING,
    });

    const delay = calculateDelay(
      startPosition.x,
      newPosition.x,
      startPosition.y,
      newPosition.y
    );

    setTimeout(() => {
      dispatch({
        type: ROBOT_ACTIONS.TELEPORT,
        payload: newPosition,
      });
    }, delay);
  };

  const value = {
    position: state.position,
    error: state.error,
    isTraversing: state.isTraversing,
    moveRobot,
    teleportRobot,
    completeTeleport,
  };

  return (
    <RobotControlContext.Provider value={value}>
      {children}
    </RobotControlContext.Provider>
  );
};
