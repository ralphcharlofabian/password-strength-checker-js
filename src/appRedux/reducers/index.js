import { combineReducers } from "redux";

import * as passwordStrengthChecker from "./passwordStrengthChecker";


export default combineReducers({
  ...passwordStrengthChecker
});
