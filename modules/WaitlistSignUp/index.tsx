import React from 'react'

import * as Sentry from '@sentry/nextjs'
import { PostgrestError, SupabaseClient } from '@supabase/supabase-js'
import { Field, Formik, FormikHelpers } from 'formik'
import { boolean, object, string } from 'yup'

import Input from '../../components/Input'
import Select from '../../components/Select'
import { setClassNames } from '../../utils/tailwindUtils'

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
    email: string().email('Please enter a valid email').required('Please enter an email 🤠'),
    gdpr: boolean().oneOf([true], 'Please tick to agree with our terms ✔️')
})

interface FormValues {
    email: string
    firstName: string
    occupation: occupationTypes
    gdpr: boolean
}

const handlePostgresErrors = (error: PostgrestError) => {
    switch (error.code) {
        case '23505':
            return 'You are already on the waitlist! 🎉'
        case '23502':
            return 'Please fill out all the fields 🤠'
        default:
            return '😧 Sorry there was an error, please try again'
    }
}

const signUpSuccess = ({
    setStatus,
    setValues
}: Pick<FormikHelpers<FormValues>, 'setStatus' | 'setValues'>) => {
    setStatus({ success: true })
    setValues({ firstName: '', email: '', occupation: occupations[0], gdpr: false })
}

const signUpFailure = ({
    setStatus,
    error
}: Pick<FormikHelpers<FormValues>, 'setStatus'> & { error: PostgrestError }) => {
    Sentry.captureException(error)
    setStatus({ formError: handlePostgresErrors(error) })
}

const WatilistSignUp = ({ supabase }: { supabase: SupabaseClient }) => {
    const addToWatchlist = async (
        { email, firstName, occupation }: FormValues,
        { setStatus, setSubmitting, setValues }: FormikHelpers<FormValues>
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
                        ? signUpSuccess({ setValues, setStatus }) // success
                        : res.error && signUpFailure({ setStatus, error: res.error }) // error
                    setSubmitting(false)
                })
        } catch (e) {
            Sentry.captureException(e)
            setStatus({ formError: '😧 Sorry there was an error, please try again' })
            setSubmitting(false)
        }
    }

    const initialValues: FormValues = {
        email: '',
        firstName: '',
        occupation: occupations[0],
        gdpr: false
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, { setStatus, setSubmitting, ...rest }) => {
                addToWatchlist(values, { setStatus, setSubmitting, ...rest })
            }}
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
                <div className="flex flex-col justify-center px-2 sm:px-0">
                    <form onSubmit={handleSubmit}>
                        <Input
                            label="Name?"
                            type="text"
                            name="firstName"
                            placeholder="What should we call you?"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.firstName}
                        />

                        <Input
                            label="Email Address"
                            type="email"
                            name="email"
                            placeholder="Your email?"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                        />

                        {errors.email && touched.email && !status.success && (
                            <p className="pt-1 pb-2 text-sm font-semibold dark:text-white">
                                {errors.email}
                            </p>
                        )}

                        <Select
                            options={[
                                'Undergraduate Student',
                                'Postgraduate Student',
                                'PhD Student',
                                'Research Fellow',
                                'Professor',
                                'Inudstry Reseacher',
                                'Other'
                            ]}
                            name="occupation"
                        />
                        <div className="flex flew-row w-full py-2">
                            <Field
                                type="checkbox"
                                name="gdpr"
                                className=" mr-2 rounded-md  text-gray-900 shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20 dark:ring-white/30 dark:hover:ring-white/50"
                            />
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                                I agree to the et al.{' '}
                                <a
                                    href="https://www.notion.so/Privacy-Policy-7536f07a27d845558d0dad5ba0850812"
                                    className=" underline"
                                >
                                    terms and privacy policy.
                                </a>
                            </p>
                        </div>
                        {errors.gdpr && touched.gdpr && !status.success && (
                            <p className="pt-1 pb-2 text-sm font-semibold ">{errors.gdpr}</p>
                        )}
                        <div className="flex justify-center pt-4">
                            <button
                                disabled={isSubmitting || status.success}
                                type="submit"
                                className="w-full text-center flex relative rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900 dark:text-white shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20 dark:ring-white/30 dark:hover:ring-white/50"
                            >
                                {status.success ? 'Signed Up!' : 'Sign Up'}

                                <div className="absolute right-0 top-0 top-align -mt-1 -mr-1">
                                    <span className="flex h-3 w-3">
                                        <span
                                            className={setClassNames(
                                                status.success ? 'bg-zing-green' : 'bg-ice-blue',
                                                ' animate-ping absolute inline-flex h-full w-full rounded-full opacity-75'
                                            )}
                                        />
                                        <span
                                            className={setClassNames(
                                                status.success
                                                    ? 'bg-light-zing-green'
                                                    : 'bg-light-ice-blue',
                                                'relative inline-flex rounded-full h-3 w-3 '
                                            )}
                                        />
                                    </span>
                                </div>
                            </button>
                        </div>
                        <p className="mt-3">
                            {status && status.formError && !status.success && status.formError}
                        </p>
                    </form>
                </div>
            )}
        </Formik>
    )
}

export default WatilistSignUp
