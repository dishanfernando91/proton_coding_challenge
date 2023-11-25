import NAV_ACTIONS from "./navigation.actions";

const MAX_DISTANCE = 5;
const MIN_DISTANCE = 1;

export interface Position {
  x: number;
  y: number;
}
export interface PositionState {
  position: Position;
  error: boolean | null;
}
interface Action {
  type: string;
  payload?: Pick<PositionState["position"], "x" | "y">;
}

export const initialState: PositionState = {
  position: {
    x: 1,
    y: 1,
  },
  error: null,
};

function navigationReducer(
  state: PositionState,
  action: Action
): PositionState {
  const { position, error } = state;
  switch (action.type) {
    case NAV_ACTIONS.UP:
      return position.y === MAX_DISTANCE
        ? { ...state, error: true }
        : { ...state, position: { ...position, y: position.y++ } };

    case NAV_ACTIONS.RIGHT:
      return position.x === MAX_DISTANCE
        ? { ...state, error: true }
        : { ...state, position: { ...position, x: position.x++ } };

    case NAV_ACTIONS.DOWN:
      return position.y === MIN_DISTANCE
        ? { ...state, error: true }
        : { ...state, position: { ...position, y: position.y-- } };

    case NAV_ACTIONS.LEFT:
      return position.x === MIN_DISTANCE
        ? { ...state, error: true }
        : { ...state, position: { ...position, x: position.x-- } };

    case NAV_ACTIONS.TELEPORT:
      return action?.payload
        ? {
            ...state,
            position: action.payload,
          }
        : { ...state, error: true };
    case NAV_ACTIONS.RESET:
      return { position: { x: 1, y: 1 }, error: null };
    default:
      return state;
  }
}

export default navigationReducer;
