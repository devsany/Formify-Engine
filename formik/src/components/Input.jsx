import React, { useState, useEffect } from "react";
import { ErrorMessage, Field, Form, Formik, useFormik } from "formik";

const initialValues = {
  name: "",
  email: "",
  channel: "",
};

const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "Required";
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i.test(values.email)) {
    errors.email = "Email Field is invalied";
  }
  if (!values.channel) {
    errors.channel = "Required";
  }

  return errors;
};

const Input = () => {
  const [data, setData] = useState([]);
  //   const formik = useFormik({
  //     initialValues,
  //     onSubmit,
  //     validate,
  //   //   });
  //   console.log(formik.errors);
  //   console.log("visited input ", formik.touched);
  const onSubmit = (values) => {
    console.log("the from values", values);
    setData([...data, values]);
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={onSubmit}
    >
      <Form>
        <div>
          <label htmlFor="name">Name</label>
          <Field type="text" name="name" id="name" placeholder="Enter Name" />
          <div className="text-red-500">
            <ErrorMessage name="name" />
          </div>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <Field
            type="text"
            name="email"
            id="email"
            placeholder="Enter email"
          />
          <div className="text-red-500">
            <ErrorMessage name="email" />
          </div>
        </div>
        <div>
          <label htmlFor="channel">Channel</label>
          <Field
            type="text"
            name="channel"
            id="channel"
            placeholder="Enter channel"
          />
          <div className="text-red-500">
            <ErrorMessage name="channel" />
          </div>
        </div>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default React.memo(Input);
