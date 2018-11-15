import { combineReducers } from "redux";
import { reducer as FormReducer } from "redux-form";
import testReducer from "../../features/TestComponent/testReducer";
import meetupReducer from "../../features/meetups/meetupReducer";

const rootReducer = combineReducers({
  form: FormReducer,
  test: testReducer,
  meetups: meetupReducer
});

export default rootReducer;
