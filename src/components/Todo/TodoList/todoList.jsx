import React from "react";
import TodoListItem from "./TodoListItem/todoListItem";
import commonStyles from "./../common.module.scss";
import styles from "./TodoList.module.scss";

const TodoList = ({ tasks, deleteTask, toggleCompletion, handleRemember }) => {
  return (
    <ul className={styles.list}>
      {tasks.map((task) => (
        <li
          key={task.id}
          className={`${styles.elementList} ${commonStyles.border} ${
            task.isDone && `${styles.completedTask}`
          }`}
        >
          <TodoListItem
            task={task}
            deleteTask={deleteTask}
            toggleCompletion={toggleCompletion}
            handleRemember={handleRemember}
          />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
