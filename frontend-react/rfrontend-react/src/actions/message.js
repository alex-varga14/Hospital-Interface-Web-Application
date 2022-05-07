import { SET_MESSAGE, CLEAR_MESSAGE } from "./types";

// Redux actionn creator is for actions related to notifications from API
export const setMessage = (message) => ({
  type: SET_MESSAGE,
  payload: message,
});
export const clearMessage = () => ({
  type: CLEAR_MESSAGE,
});