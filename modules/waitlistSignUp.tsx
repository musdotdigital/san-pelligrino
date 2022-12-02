import React from 'react'

import { SupabaseClient } from '@supabase/supabase-js'
import { Formik, Field, FormikHelpers } from 'formik'
import { object, string } from 'yup'

import styles from '../styles/Home.module.css'

const occupations = [
    'Undergraduate Student',
    'Postgraudate Student',
    'PhD Student',
    'Research Fellow',
    'Professor',
    'Inudstry Reseacher',
    'Other'
] as const

type occupationTypes = typeof occupations[number]

const validationSchema = object().shape({
    email: string().email('Please enter a valid email').required('Please enter an email 🤠')
})

interface FormValues {
    email: string
    firstName: string
    occupation: occupationTypes
}

const WatilistSignUp = ({ supabase }: { supabase: SupabaseClient }) => {
    const addToWatchlist = async (
        { email, firstName, occupation }: FormValues,
        { setStatus, setSubmitting }: FormikHelpers<FormValues>
    ) => {
        try {
            await supabase
                .from('waitlist')
                .insert({
                    email: email,
                    first_name: firstName,
                    occupation: occupation
                })
                .then(res => {
                    res.data === null && res.error === null
                        ? setStatus({ success: true })
                        : res.error && setStatus({ formError: res.error.message })
                    setSubmitting(false)
                })
        } catch (e) {
            console.log(e)
            setStatus({ formError: '😧 Sorry there was an error, please try again' })
            setSubmitting(false)
        }
    }

    const initialValues: FormValues = {
        email: '',
        firstName: '',
        occupation: occupations[0]
    }

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <h1>Sign Up Here!</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={addToWatchlist}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    isSubmitting,
                    status = { success: false },
                    handleSubmit
                }) => (
                    <form
                        style={{ display: 'flex', flexDirection: 'column' }}
                        onSubmit={handleSubmit}
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
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center'
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
                            {errors.email && touched.email && errors.email}
                        </div>
                        <Field name="occuaption" as="select" className={styles.signup}>
                            {occupations.map((occ, key) => {
                                return (
                                    <option value={occ} key={key}>
                                        {occ}
                                    </option>
                                )
                            })}
                        </Field>

                        <button type="submit" disabled={isSubmitting} className={styles.button}>
                            {status.success ? 'Signed Up!' : 'Submit'}
                        </button>
                        {status && status.formError && status.formError}
                    </form>
                )}
            </Formik>
        </div>
    )
}

export default WatilistSignUp
