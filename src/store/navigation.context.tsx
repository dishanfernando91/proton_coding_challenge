import React, { createContext, useReducer } from "react";

import navigationReducer, {
  initialState,
  PositionState,
  Position,
} from "./navigation.reducer";
import NAV_ACTIONS from "./navigation.actions";

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

  const teleportRobot = (startPosition: Position, newPosition: Position) => {
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
    moveRobot,
    teleportRobot,
  };

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
};
