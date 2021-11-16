const Add = (Todo) => {
  return {
    type: "ADD",
    payload: Todo,
  };
};

const Edit = (Todo, index) => {
  return {
    type: "EDIT",
    payload: {
      Todo,
      index,
    },
  };
};

const Delete = (index) => {
  return {
    type: "DELETE",
    payload: index,
  };
};
const Get = () => {
  return {
    type: "GET",
  };
};
const Todo = {
  Add,
  Edit,
  Delete,
  Get,
};
export default Todo;
