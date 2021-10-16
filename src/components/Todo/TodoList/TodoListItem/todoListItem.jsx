import React from "react";
import styles from "./TodoListItem.module.scss";
import deleteBtn from "./../../../../delete.png";

const TodoListItem = ({
  task: { id, body, isDone },
  deleteTask,
  toggleCompletion,
  handleRemember,
}) => {
  return (
    <>
      <div className={styles.wrapperText} onClick={() => toggleCompletion(id)}>
        <input type="checkbox" checked={isDone} onChange={handleRemember} />
        <p className={`${styles.elementListText} `}> {body}</p>
      </div>

      <button
        type="image"
        className={styles.btnDelete}
        onClick={() => deleteTask(id)}
      >
        <img src={deleteBtn} alt="Delete" className={styles.imgBtn} />
      </button>
    </>
  );
};

export default TodoListItem;
