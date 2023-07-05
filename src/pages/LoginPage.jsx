import React, { useEffect } from "react";
import { Field, Form, Formik, ErrorMessage } from "formik";
import { NavLink } from "react-router-dom";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/auth/operations";
import { toast } from "react-toastify";
import { removeStatus } from "../redux/auth/slice";

let schema = yup.object({
  username: yup.string("Type your name").required("Name is required"),
  password: yup.string("Type your password").required("Password is required"),
});

const LoginPage = () => {
const dispatch = useDispatch()
const {status} = useSelector(state => state.auth);

useEffect(() => {
  
if(status){
 toast(status)
 setTimeout(() => {
  dispatch(removeStatus())
 }, 5000)
}

// return () => {
//   dispatch(removeStatus())
// }
}, [status, dispatch])

  const initialValue = {
    username: "",
    password: "",
  };

  const onSubmitForm = (value, { resetForm }) => {
    dispatch(login(value))
    resetForm();
  };

  return (
    <div>
      <h1 className="text-4xl text-center mt-8 mb-8">Log in</h1>
      <Formik
        initialValues={initialValue}
        onSubmit={onSubmitForm}
        validationSchema={schema}
      >
        <Form className="flex justify-center items-center gap-4 flex-col">
          <Field
            type="text"
            name="username"
            placeholder="Username"
            className="border-2 py-2 px-2 w-1/4 text-gray-600"
          />
          <ErrorMessage component='p' className="text-red-600 text-sm" name="username" />
          <Field
            type="password"
            name="password"
            placeholder="Password"
            className="border-2 py-2 px-2 w-1/4 text-gray-600"
          />
           <ErrorMessage name="password" component='p' className="text-red-600 text-sm" />
          <div className="flex flex-col gap-4 mt-4 items-center">
            <button
              type="submit"
              className="bg-[#10a6e9] px-4 py-2 text-white rounded-xl w-56"
            >
              Log in
            </button>
            <p className="text-base">
              If you don't have an acount.{" "}
              <NavLink
                to="/register"
                className="text-[#10a6e9] border-b-2 border-[#10a6e9]"
              >
                Sign in
              </NavLink>
            </p>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginPage;
