import React, { useState } from "react";
import TodoForm from "./TodoForm/todoForm";
import TodoList from "./TodoList/todoList";
import commonStyles from "./common.module.scss";
import styles from "./Todo.module.scss";

const testData = [
  {
    id: 1,
    body: "Learn JavaScript",
    isDone: false,
  },
  {
    id: 2,
    body: "Learn React",
    isDone: false,
  },
];

const Todo = (props) => {
  const [tasks, setTasks] = useState(testData);
  const [isDone, setIsDone] = useState(true);

  const addTask = (text) => {
    setTasks([
      ...tasks,
      {
        id: Date.now(),
        isDone: false,
        body: text,
      },
    ]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleCompletion = (id) => {
    setTasks(
      tasks.map((task) => ({
        ...task,
        isDone: task.id === id ? !task.isDone : task.isDone,
      }))
    );
  };

  const submitHandler = (values, formikBag) => {
    const { taskText } = values;
    addTask(taskText);
    formikBag.resetForm();
  };

  const handleRemember = ({ target: { value } }) => {
    setIsDone(!isDone);
  };

  return (
    <article className={`${styles.todoList} ${commonStyles.border}`}>
      <TodoForm submitHandler={submitHandler} />
      <TodoList 
        tasks={tasks}
        deleteTask={deleteTask}
        toggleCompletion={toggleCompletion}
        handleRemember={handleRemember}
      />
    </article>
  );
};

export default Todo;
