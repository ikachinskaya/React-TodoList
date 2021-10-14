import * as yup from "yup";
export const TODO_LIST_SHEMA = yup.object({
  taskText: yup
    .string("Enter string")
    .matches(/^.{3,}$/)
    .required("Required field"),
});

export const TODO_SCHEMA = yup.object({
  taskText: yup
    .string("нужна строка")
    .matches(/^.{3,}$/, "реуглярка завалила")
    .required("поле обязательно"),
});
