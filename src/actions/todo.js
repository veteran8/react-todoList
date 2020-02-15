import actionTypes from "./actionTypes";
import { getTodos } from "../service";

const getList = playload => {
  return {
    type: actionTypes.GET_LIST,
    playload
  };
};
const changeTodoState = playload => {
  return {
    type: actionTypes.CHANGE_TODO_STATE,
    playload
  };
};

export const getData = () => {
  return dispatch => {
    getTodos()
      .then(result => {
        console.log("result", result);
        dispatch(getList(result.data));
      })
      .catch(err => {});
  };
};

export const changeState = id => {
  return dispatch => {
    dispatch(changeTodoState(id));
  };
};
