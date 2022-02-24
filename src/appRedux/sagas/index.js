import { all } from 'redux-saga/effects';


import {passwordStrengthCheckerSaga} from './passwordStrengthChecker';

export default function* rootSaga() {
  yield all([
    passwordStrengthCheckerSaga()
  ]);
}