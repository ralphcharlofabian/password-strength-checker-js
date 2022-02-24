import { passwordActType } from './../../constants/actionTypes';


const initialState = {
  passwordInput:'',
  passwordStrengthData: {}
}

export default (state = initialState, action) => {
  const { type, payload } = action || {};

  switch (type) {
    case passwordActType.POST_PASSWORD_STRENGTH:
      return { ...state, passwordInput: payload };
    case passwordActType.POST_PASSWORD_STRENGTH_SUCCESS:
      return { ...state, passwordStrengthData: payload };
    default:
      return state;
  }
}