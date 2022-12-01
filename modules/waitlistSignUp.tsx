import React from "react";
import { Formik } from "formik";
import { SupabaseClient } from "@supabase/supabase-js";

const WatilistSignUp = ({ supabase }: { supabase: SupabaseClient }) => {
  const handleSubmit = async ({ email }: { email: string }) => {
    const { data, error } = await supabase
      .from("waitlist")
      .insert({ email: email });
  };

  return (
    <div>
      <h1>Sign Up Here!</h1>
      <Formik
        initialValues={{ email: "" }}
        validate={(values) => {
          const errors: { email?: string } = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) =>
          handleSubmit({ email: values.email })
        }
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email && errors.email}

            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default WatilistSignUp;
