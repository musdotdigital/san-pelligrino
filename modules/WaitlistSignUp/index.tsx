import React from 'react'
import { Formik, FormikHelpers } from 'formik'
import { SupabaseClient } from '@supabase/supabase-js'

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
                        {/* {errors.email && touched.email && errors.email} */}

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
                                disabled={isSubmitting}
                                className=" w-full inline-block rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900 dark:text-white shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20 dark:ring-gray-300/10 dark:hover:ring-gray-300/20"
                                type="submit"
                            >
                                {status.success ? 'Signed Up!' : 'Notify Me'}
                            </button>
                        </div>

                        {status && status.formError && status.formError}
                    </form>
                </div>
            )}
        </Formik>
    )
}

export default WatilistSignUp
