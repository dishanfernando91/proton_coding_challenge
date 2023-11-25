import { createContext, useReducer } from "react";

import navigationReducer, {
  initialState,
  IInitialState,
} from "./navigation.reducer";
import NAV_ACTIONS from "./navigation.actions";

export const NavigationContext = createContext<IInitialState>(initialState);

// TODO: fix children types
export const NavigationProvider = ({ children }: { children: any }) => {
  const [state, dispatch] = useReducer(navigationReducer, initialState);

  const moveRobot = (direction: string) =>
    dispatch({
      type: direction,
    });

  const teleportRobot = (position: { x: number; y: number }) => {
    dispatch({
      type: NAV_ACTIONS.TELEPORT,
      payload: { position },
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
