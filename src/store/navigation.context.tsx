import React, { createContext, useReducer } from "react";

import navigationReducer, { initialState } from "./navigation.reducer";
import NAV_ACTIONS from "./navigation.actions";

import type { PositionState, Position } from "../types";
import calculateDelay from "../utils/functions/teleportDelay";

export const NavigationContext = createContext<PositionState>(initialState);

export const NavigationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(navigationReducer, initialState);

  const moveRobot = (direction: string) =>
    dispatch({
      type: direction,
    });

  const completeTeleport = () => {
    dispatch({
      type: NAV_ACTIONS.TELEPORT_COMPLETE,
    });
  };

  const teleportRobot = (startPosition: Position, newPosition: Position) => {
    dispatch({
      type: NAV_ACTIONS.TELEPORTING,
    });

    const delay = calculateDelay(
      startPosition.x,
      newPosition.x,
      startPosition.y,
      newPosition.y
    );

    setTimeout(() => {
      dispatch({
        type: NAV_ACTIONS.TELEPORT,
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
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
};
