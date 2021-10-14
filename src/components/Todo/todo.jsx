import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import styles from "./Todo.module.scss";
import deleteBtn from "./../../delete.png";
import { TODO_LIST_SHEMA } from "../../utils/validationSchema";
const testData = [
  {
    id: 1,
    body: "Learn React",
    isDone: false,
  },
];

const Todo = (props) => {
  const [tasks, setTasks] = useState(testData);

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      isDone: false,
      body: text,
    };

    const newTasks = [...tasks, newTask];

    setTasks(newTasks);
  };

  const deleteTask = (id) => {
    return setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleCompletion = (id) => {
    const [task] = tasks;
    const { isDone } = task;
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isDone: !isDone } : { ...task }
      )
    );
  };

  const submitHandler = (values, formikBag) => {
    const { taskText } = values;
    addTask(taskText);
    formikBag.resetForm();
  };

  return (
    <article className={`${styles.todoList} ${styles.border}`}>
      <Formik
        initialValues={{ taskText: "" }}
        onSubmit={submitHandler}
        validationSchema={TODO_LIST_SHEMA}
      >
        <Form className={styles.container}>
          <Field
            name="taskText"
            placeholder="Enter task"
            className={`${styles.taskText} ${styles.border}`}
          />

          <ErrorMessage name="taskText">
            {(message) => <div className={styles.error}>{message}</div>}
          </ErrorMessage>

          <button className={`${styles.btn} ${styles.border}`}>New Task</button>
        </Form>
      </Formik>

      <ul className={styles.list}>
        {tasks.map((task) => {
          return (
            <li
              key={task.id}
              className={`${styles.elementList} ${styles.border} ${
                task.isDone ? `${styles.completedTask}` : ""
              }`}
            >
              <div
                className={styles.wrapperText}
                onClick={() => toggleCompletion(task.id)}
              >
                <input type="checkbox" checked={task.isDone} />
                <p className={`${styles.elementListText} `}> {task.body}</p>
              </div>

              <button
                type="image"
                className={styles.btnDelete}
                onClick={() => deleteTask(task.id)}
              >
                <img src={deleteBtn} alt="Delete" className={styles.imgBtn} />
              </button>
            </li>
          );
        })}
      </ul>
    </article>
  );
};

export default Todo;
