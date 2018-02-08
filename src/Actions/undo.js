import { ActionCreators } from "redux-undo";
export function historyUndo() {
  return dispatch => {
    dispatch(ActionCreators.undo());
  };
}

export function historyRedo() {
  return dispatch => {
    dispatch(ActionCreators.redo());
  };
}

export function historyJump(step: number) {
  return dispatch => {
    dispatch(ActionCreators.jump(step));
  };
}
