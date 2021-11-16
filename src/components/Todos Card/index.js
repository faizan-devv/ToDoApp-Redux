import React, { useState } from "react";
import TodoList from "../Todos List";
import styles from "./TodoCard.module.css";
import { useSelector, useDispatch } from "react-redux";
import allActions from "../../actions";

const TodoCard = () => {
  const ToDoList = useSelector((state) => state.TodoRed.TodoList);
  const [Todo, setTodo] = useState("");
  const [rerenderFlag, setRerenderFlag] = useState(false);
  const [edit, setEdit] = useState({
    isEditing: false,
    editIndex: 0,
  });
  const dispatch = useDispatch();

  const HandleChange = (e) => {
    setTodo(e.target.value);
  };
  const handleAdd = () => {
    dispatch(allActions.Todo.Add(Todo));
    setRerenderFlag(!rerenderFlag);
    setTodo("");
  };
  const handleEdit = (index) => {
    setEdit({ isEditing: true, editIndex: index });
    setTodo(ToDoList[index]);
    setRerenderFlag(!rerenderFlag);
  };

  const handleUpdate = () => {
    dispatch(allActions.Todo.Edit(Todo, edit.editIndex));
    setEdit({ ...edit, isEditing: false });
    setRerenderFlag(!rerenderFlag);
    setTodo("");
  };
  const handleDelete = (index) => {
    dispatch(allActions.Todo.Delete(index));
    setRerenderFlag(!rerenderFlag);
  };
  return (
    <div className={styles.TodoCard}>
      <h1> What's the Plan for Today ? </h1>
      <div className={styles.InputWrap}>
        <div className={styles.InputField}>
          <input
            name="todo"
            type="text"
            placeholder="Add a todo"
            value={Todo}
            onChange={(e) => {
              HandleChange(e);
            }}
          />
        </div>
        <div className={styles.AddBtn}>
          {!edit.isEditing ? (
            <button onClick={handleAdd}>Add Todo</button>
          ) : (
            <button onClick={handleUpdate}>Update</button>
          )}
        </div>
      </div>
      {ToDoList && (
        <TodoList list={ToDoList} delete={handleDelete} edit={handleEdit} />
      )}
    </div>
  );
};

export default TodoCard;
