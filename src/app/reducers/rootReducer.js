import { combineReducers } from "redux";
import testReducer from "../../features/TestComponent/testReducer";
import meetupReducer from "../../features/meetups/meetupReducer";

const rootReducer = combineReducers({
  test: testReducer,
  meetups: meetupReducer
});

export default rootReducer;
