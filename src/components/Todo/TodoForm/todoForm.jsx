import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { TODO_SHEMA } from "../../../utils/validationSchema";
import styles from "./TodoForm.module.scss";
import commonStyles from "./../common.module.scss";

const TodoForm = ({ submitHandler }) => {
  return (
    <Formik
      initialValues={{ taskText: "" }}
      onSubmit={submitHandler}
      validationSchema={TODO_SHEMA}
    >
      <Form className={styles.container}>
        <Field
          name="taskText"
          placeholder="Enter task"
          className={`${styles.taskText} ${commonStyles.border}`}
        />

        <ErrorMessage name="taskText">
          {(message) => <div className={styles.error}>{message}</div>}
        </ErrorMessage>

        <button
          type="submit"
          className={`${styles.btn} ${commonStyles.border}`}
        >
          New Task
        </button>
      </Form>
    </Formik>
  );
};

export default TodoForm;
