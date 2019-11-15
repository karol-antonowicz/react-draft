import React from "react";
import { Formik } from "formik";
import { Input } from "semantic-ui-react";

const TextInput = props => {
  const { name, errors, touched } = props;
  return (
    <div>
      <Input {...props} error={errors[name] && touched[name]} />
      <div>{errors[name] && touched[name] && errors[name]}</div>
    </div>
  );
};

const AccountForm = () => (
  <div>
    <h1>Anywhere in your app!</h1>
    <Formik
      initialValues={{
        email: "",
        password: "",
        phoneNumber: ""
      }}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(true);
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 2000);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <TextInput
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            touched={touched}
            errors={errors}
          />
          <TextInput
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            touched={touched}
            errors={errors}
          />
          <button type="submit">Submit</button>
        </form>
      )}
    </Formik>
  </div>
);

export default AccountForm;
