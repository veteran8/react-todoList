import actionTypes from "../actions/actionTypes";

const initState = [];
export default (state = initState, action) => {
  console.log("++++", state);
  switch (action.type) {
    case actionTypes.GET_LIST:
      return {
        ...state,
        list: action.playload
      };
    case actionTypes.CHANGE_TODO_STATE:
      return {
        ...state,
        list: state.list.map(todo => {
          if (todo.id === action.playload) {
            todo.completed = !todo.completed;
          }
          return todo;
        })
      };
    default:
      return state;
  }
};
