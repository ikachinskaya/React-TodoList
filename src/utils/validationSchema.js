import * as yup from "yup";
export const TODO_SHEMA = yup.object({
  taskText: yup
    .string("Enter string")
    .matches(/^.{3,}$/, 'Enter at least 3 characters' )
    .required("Required field"),
});

