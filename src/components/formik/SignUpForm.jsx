import { Field, Form, Formik, useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
const SignUpForm = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  };
  // const { handleBlur, handleChange, handleSubmit, values, errors } = useFormik({
  //   initialValues: initialValues,
  //   validationSchema: signupValidation,
  //   onSubmit: (values) => {
  //     console.log(values);
  //   },
  // });
  return (
    <div className="mx-auto">
      <Formik
        initialValues={initialValues}
        validationSchema={signupValidation}
        onSubmit={(values) => console.log(values)}
      >
        {({ errors }) => (
          <Form>
            <div className="p-2">
              <label htmlFor="name">Name</label>
              <br />
              <Field
                name="name"
                className="border border-black outline-1"
                id="name"
                type="text"
              />{" "}
              {errors.name && (
                <small className="text-sm text-red-500">{errors.name}</small>
              )}
            </div>
            <div className="p-2">
              <label htmlFor="email">Email</label>
              <br />
              <Field
                name="email"
                className="border border-black outline-1"
                id="email"
                type="email"
              />
              {errors.email && (
                <small className="text-sm text-red-500">{errors.email}</small>
              )}
            </div>
            <div className="p-2">
              <label htmlFor="password">Password</label>
              <br />
              <Field
                name="password"
                className="border border-black outline-1"
                id="password"
                type="password"
              />
              {errors.password && (
                <small className="text-sm text-red-500">
                  {errors.password}
                </small>
              )}
            </div>
            <div className="p-2">
              <label htmlFor="confirm_password">Confirm password</label>
              <br />
              <Field
                className="border border-black outline-1"
                name="confirm_password"
                id="confirm_password"
                type="password"
              />
              {errors.confirm_password && (
                <small className="text-sm text-red-500">
                  {errors.confirm_password}
                </small>
              )}
            </div>
            <div className="p-2">
              <button
                className="p-2 bg-blue-700 text-white rounded-sm w-32 text-md"
                type="submit"
              >
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
const signupValidation = Yup.object({
  name: Yup.string().min(3).required("Enter name"),
  email: Yup.string().email("Enter valid email").required("enter email"),
  password: Yup.string().min(5).required("Enter password"),
  confirm_password: Yup.string()
    .oneOf([Yup.ref("password")], "password not matched")
    .required("Enter confirm password"),
});
export default SignUpForm;
