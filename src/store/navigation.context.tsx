import React, { createContext, useReducer } from "react";

import navigationReducer, {
  initialState,
  PositionState,
  Position,
} from "./navigation.reducer";
import NAV_ACTIONS from "./navigation.actions";

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

  const teleportRobot = (position: Position) => {
    dispatch({
      type: NAV_ACTIONS.TELEPORT,
      payload: position,
    });
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
