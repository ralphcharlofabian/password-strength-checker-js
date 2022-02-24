import { all, call, fork, put, takeEvery } from "redux-saga/effects";

//actions
import {   passwordStrengthCheckerActions,
} from './../../actions/passwordStregthChecker';

//utilities
import { request } from './../../../utilities/helper';

//constants
import { passwordActType } from './../../constants/actionTypes';
import { noAuthHeaders } from './../../constants/configs';




//function here
function* postPasswordStrength({payload}) {
  try {
    let resp = yield call(() => request.post(`https://o9etf82346.execute-api.us-east-1.amazonaws.com/staging/password/strength`, {
      headers: noAuthHeaders,
      body: JSON.stringify(payload),
    }));

    if (resp) {
      console.log(resp,'response from saga');
      yield put(passwordStrengthCheckerActions.postPasswordStrengthSuccess(resp));
    }

  } catch (err) {
    console.error(err);
  }
}





export function* passwordStrengthWatcher() {
  yield takeEvery(passwordActType.POST_PASSWORD_STRENGTH, postPasswordStrength);
}




export default function* rootSaga() {
  yield all([
    fork(passwordStrengthWatcher),
  ]);
}