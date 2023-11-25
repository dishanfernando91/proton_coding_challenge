import NAV_ACTIONS from "./navigation.actions";

export interface IInitialState {
  position: {
    x: number;
    y: number;
  };
  error: boolean | null;
}

interface IAction {
  type: string;
  payload?: Pick<IInitialState, "position">;
}

const MAX_DISTANCE = 5;
const MIN_DISTANCE = 1;

export const initialState: IInitialState = {
  position: {
    x: 1,
    y: 1,
  },
  error: null,
};

function navigationReducer(state: IInitialState, action: IAction) {
  const { position, error } = state;
  switch (action.type) {
    case NAV_ACTIONS.UP:
      return position.y === MAX_DISTANCE
        ? { ...state, error: true }
        : { ...state, position: { ...position, y: position.y + 1 } };

    case NAV_ACTIONS.RIGHT:
      return position.x === MAX_DISTANCE
        ? { ...state, error: true }
        : { ...state, position: { ...position, x: position.x + 1 } };

    case NAV_ACTIONS.DOWN:
      return position.y === MIN_DISTANCE
        ? { ...state, error: true }
        : { ...state, position: { ...position, y: position.y - 1 } };

    case NAV_ACTIONS.LEFT:
      return position.x === MIN_DISTANCE
        ? { ...state, error: true }
        : { ...state, position: { ...position, x: position.x - 1 } };

    case NAV_ACTIONS.TELEPORT:
      // pending
      return { ...state };
    default:
      throw new Error(`Incorrect move command`);
  }
}

export default navigationReducer;
