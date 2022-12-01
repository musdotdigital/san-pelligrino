import React, { useState } from "react";
import { Formik } from "formik";
import { SupabaseClient } from "@supabase/supabase-js";
import styles from "../styles/Home.module.css";
import { Field, Form, FormikProps } from "formik";

const WatilistSignUp = ({ supabase }: { supabase: SupabaseClient }) => {
  const [submitted, setSubmitted] = useState(false);

  const occupations = [
    "Undergraduate Student",
    ,
    "Postgraudate Student",
    "PhD Student",
    "Research Fellow",
    "Professor",
    "Inudstry Reseacher",
  ] as const;

  type occupationTypes = typeof occupations[number];

  const handleSubmit = async ({
    email,
    firstName,
    occupation,
  }: {
    email: string;
    firstName: string;
    occupation: occupationTypes;
  }) => {
    const { data, error } = await supabase
      .from("waitlist")
      .insert({ email: email, first_name: firstName, occupation: occupation });

    console.log(data);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Sign Up Here!</h1>
      <Formik
        initialValues={{ email: "", firstName: "", occupation: occupations[0] }}
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
          handleSubmit({
            email: values.email,
            firstName: values.firstName,
            occupation: values.occupation,
          })
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
          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <input
              type="text"
              name="firstName"
              placeholder="What's your name?"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.firstName}
              className={styles.signup}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                className={styles.signup}
              />

              <div
                className={
                  errors.email && touched.email
                    ? styles.inputinvalid
                    : styles.inputvalid
                }
              />
            </div>
            <Field name="occuaption" as="select" className={styles.signup}>
              {occupations.map((occ, key) => {
                return (
                  <option value={occ} key={key}>
                    {occ}
                  </option>
                );
              })}
            </Field>

            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                backgroundColor:
                  errors.email && touched.email ? "#ff1c5b" : "#d4fa52",
                color: errors.email && touched.email ? "inherit" : "#000",
              }}
              className={styles.button}
            >
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default WatilistSignUp;
