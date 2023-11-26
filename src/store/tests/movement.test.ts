import robotControlReducer, {
  initialState,
} from "../robotControl/robotControl.reducer";
import ROBOT_ACTIONS from "../robotControl/robotControl.actions";

const {
  UP,
  TELEPORT,
  RESET,
  //   DOWN,
  //   LEFT,
  //   RIGHT,
  //   TELEPORTING,
  //   TELEPORT_COMPLETE,
  //   CLEAR_ERROR,
} = ROBOT_ACTIONS;

describe("robotControlReducer", () => {
  it("should handle UP action when not at MAX_DISTANCE", () => {
    const state = {
      position: { x: 1, y: 1 },
      error: false,
      isTraversing: false,
    };
    const action = { type: UP };
    const nextState = robotControlReducer(state, action);
    expect(nextState).toEqual({
      position: { x: 1, y: 2 },
      error: false,
      isTraversing: false,
    });
  });

  it("should handle UP action when at MAX_DISTANCE", () => {
    const state = {
      position: { x: 1, y: 5 },
      error: false,
      isTraversing: false,
    };
    const action = { type: UP };
    const nextState = robotControlReducer(state, action);
    expect(nextState).toEqual({
      position: { x: 1, y: 5 },
      error: true,
      isTraversing: false,
    });
  });

  it("should handle TELEPORT action with payload", () => {
    const state = {
      position: { x: 1, y: 1 },
      error: false,
      isTraversing: false,
    };
    const action = { type: TELEPORT, payload: { x: 3, y: 4 } };
    const nextState = robotControlReducer(state, action);
    expect(nextState).toEqual({
      position: { x: 3, y: 4 },
      error: false,
      isTraversing: false,
    });
  });

  it("should handle TELEPORT action without payload", () => {
    const state = {
      position: { x: 1, y: 1 },
      error: false,
      isTraversing: false,
    };
    const action = { type: TELEPORT };
    const nextState = robotControlReducer(state, action);
    expect(nextState).toEqual({
      position: { x: 1, y: 1 },
      error: true,
      isTraversing: false,
    });
  });

  it("should handle RESET action and return to initial state", () => {
    const state = {
      position: { x: 3, y: 4 },
      error: true,
      isTraversing: true,
    };
    const action = { type: RESET };
    const nextState = robotControlReducer(state, action);
    expect(nextState).toEqual(initialState);
  });
});
