import { createReducer } from "../../app/common/util/reducerUtil";
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "./testConstants";

const initialState = {
  data: 42
};

export const incrementCounter = (state, payload) => {
  return { ...state, data: state.data + 1 };
};

export const decrementCounter = (state, payload) => {
  return { ...state, data: state.data - 1 };
};

export default createReducer(initialState, {
  [INCREMENT_COUNTER]: incrementCounter,
  [DECREMENT_COUNTER]: decrementCounter
});
