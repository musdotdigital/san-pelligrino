import React from 'react'

import { PostgrestError, SupabaseClient } from '@supabase/supabase-js'
import { Formik, FormikHelpers } from 'formik'
import { object, string } from 'yup'

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
    email: string().email('Please enter a valid email').required('Please enter an email 🤠')
})

interface FormValues {
    email: string
    firstName: string
    occupation: occupationTypes
}

const handleWatchListErrors = (error: PostgrestError) => {
    switch (error.code) {
        case '23505':
            return 'You are already on the waitlist! 🎉'
        case '23502':
            return 'Please fill out all the fields 🤠'
        default:
            return '😧 Sorry there was an error, please try again'
    }
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
                        ? setStatus({ success: true }) // success
                        : res.error && setStatus({ formError: handleWatchListErrors(res.error) }) // error
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
                <div className="flex flex-col justify-center">
                    <form onSubmit={handleSubmit}>
                        <Input
                            label="What should we call you?"
                            type="text"
                            name="firstName"
                            placeholder="What's your name?"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.firstName}
                        />

                        <Input
                            label="Your email"
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                        />

                        {errors.email && touched.email && (
                            <p className="pt-1 pb-2 text-sm font-semibold text-center">
                                {errors.email}
                            </p>
                        )}

                        <Select
                            options={[
                                'Undergraduate Student',
                                'Postgraudate Student',
                                'PhD Student',
                                'Research Fellow',
                                'Professor',
                                'Inudstry Reseacher',
                                'Other'
                            ]}
                            name="occupation"
                        />
                        <div className="flex justify-center pt-4 ">
                            <button
                                disabled={isSubmitting || status.success}
                                type="submit"
                                className="w-full text-center flex relative rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20"
                            >
                                {status.success ? 'Signed Up!' : 'Notify Me'}

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
                        <p className="mt-3">{status && status.formError && status.formError}</p>
                    </form>
                </div>
            )}
        </Formik>
    )
}

export default WatilistSignUp
