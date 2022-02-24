import { passwordActType } from '../../constants/actionTypes';

export const postPasswordStrength = (payload) => ({
  type: passwordActType.POST_PASSWORD_STRENGTH,
  payload
});

export const postPasswordStrengthSuccess = (payload) => ({
  type: passwordActType.POST_PASSWORD_STRENGTH_SUCCESS,
  payload
});