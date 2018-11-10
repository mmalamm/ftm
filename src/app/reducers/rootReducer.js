import { combineReducers } from "redux";
import testReducer from "../../features/TestComponent/testReducer";

const rootReducer = combineReducers({
  test: testReducer
});

export default rootReducer;
