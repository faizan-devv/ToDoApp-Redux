const initialState = {
  TodoList: [],
};

const TodoRed = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      state.TodoList.push(action.payload);
      return {
        ...state,
      };
    case "EDIT":
      state.TodoList[action.payload.index] = action.payload.Todo;
      return {
        ...state,
      };
    case "DELETE":
      state.TodoList.splice(action.payload, 1);
      return {
        ...state,
      };
    case "GET":
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default TodoRed;
