import ROBOT_ACTIONS from "./robotControl.actions";

import { MAX_DISTANCE, MIN_DISTANCE } from "../../utils/constants";
import type { PositionState, Action } from "../../types";

export const initialState: PositionState = {
  position: {
    x: 1,
    y: 1,
  },
  error: false,
  isTraversing: false,
};

const {
  UP,
  DOWN,
  LEFT,
  RIGHT,
  TELEPORT,
  TELEPORTING,
  TELEPORT_COMPLETE,
  RESET,
  CLEAR_ERROR,
} = ROBOT_ACTIONS;

function robotControlReducer(
  state: PositionState,
  action: Action
): PositionState {
  const { position } = state;
  switch (action.type) {
    case UP:
      return position.y === MAX_DISTANCE
        ? { ...state, error: true }
        : {
            ...state,
            error: false,
            position: { ...position, y: position.y + 1 },
          };

    case RIGHT:
      return position.x === MAX_DISTANCE
        ? { ...state, error: true }
        : {
            ...state,
            error: false,
            position: { ...position, x: position.x + 1 },
          };

    case DOWN:
      return position.y === MIN_DISTANCE
        ? { ...state, error: true }
        : {
            ...state,
            error: false,
            position: { ...position, y: position.y - 1 },
          };

    case LEFT:
      return position.x === MIN_DISTANCE
        ? { ...state, error: true }
        : {
            ...state,
            error: false,
            position: { ...position, x: position.x - 1 },
          };

    case TELEPORT:
      return action?.payload
        ? {
            ...state,
            position: action.payload,
          }
        : { ...state, error: true };

    case TELEPORTING:
      return { ...state, error: false, isTraversing: true };

    case TELEPORT_COMPLETE:
      return { ...state, error: false, isTraversing: false };

    case CLEAR_ERROR:
      return { ...state, error: false };

    case RESET:
      return initialState;

    default:
      return state;
  }
}

export default robotControlReducer;
