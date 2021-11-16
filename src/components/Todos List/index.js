import React from "react";
import styles from "./TodosList.module.css";

const TodoList = (props) => {
  return (
    <div className={styles.TodoList}>
      <ul>
        {props.list?.map((todo, index) => {
          return (
            <li key={index}>
              <div>{todo}</div>
              <div className={styles.BtnWrap}>
                <button
                  onClick={() => {
                    props.edit(index);
                  }}
                >
                  edit
                </button>
                <button
                  onClick={() => {
                    props.delete(index);
                  }}
                >
                  delete
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
