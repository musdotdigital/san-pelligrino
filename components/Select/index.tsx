import React, { Fragment, useState } from 'react'

import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { useField } from 'formik'

import { setClassNames } from '../../utils/tailwindUtils'

type Props = {
    options: string[]
    name: string
}

const Select = (props: Props) => {
    const { options, name } = props
    const [selected, setSelected] = useState(options[0])

    const [field] = useField({ name })

    const updateSelected = (value: string) => {
        field.onChange({ target: { value: value, name: name, as: 'select' } })
        setSelected(value)
    }

    return (
        <div className="pb-3">
            <Listbox value={selected} onChange={updateSelected}>
                {({ open }) => (
                    <>
                        <Listbox.Label className="block text-sm font-medium text-gray-700 dark:text-white">
                            Assigned to
                        </Listbox.Label>

                        <div className="relative mt-1">
                            <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2  pr-10 text-left shadow-sm focus:border-hot-pink focus:outline-none focus:ring-1 focus:ring-hot-pink sm:text-sm">
                                <span className="flex items-center">
                                    <span className="ml-3 block truncate">{selected}</span>
                                </span>
                                <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                                    <ChevronUpDownIcon
                                        className="h-5 w-5 text-gray-600"
                                        aria-hidden="true"
                                    />
                                </span>
                            </Listbox.Button>

                            <Transition
                                show={open}
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Listbox.Options className="absolute z-10 mt-1 max-h-48 w-full overflow-auto bg-white rounded-md py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                    {options.map((opp, key) => (
                                        <Listbox.Option
                                            key={key}
                                            className={({ active }) =>
                                                setClassNames(
                                                    active
                                                        ? 'text-white bg-hot-pink'
                                                        : 'text-gray-900 ',
                                                    'relative cursor-default select-none py-2 pl-3 pr-9'
                                                )
                                            }
                                            value={opp}
                                        >
                                            {({ selected, active }) => (
                                                <>
                                                    <div className="flex items-center">
                                                        <span
                                                            className={setClassNames(
                                                                selected
                                                                    ? 'font-semibold'
                                                                    : 'font-normal',
                                                                'ml-3 block truncate'
                                                            )}
                                                        >
                                                            {opp}
                                                        </span>
                                                    </div>

                                                    {selected ? (
                                                        <span
                                                            className={setClassNames(
                                                                active
                                                                    ? 'text-white'
                                                                    : 'text-hot-pink',
                                                                'absolute inset-y-0 right-0 flex items-center pr-4'
                                                            )}
                                                        >
                                                            <CheckIcon
                                                                className="h-5 w-5"
                                                                aria-hidden="true"
                                                            />
                                                        </span>
                                                    ) : null}
                                                </>
                                            )}
                                        </Listbox.Option>
                                    ))}
                                </Listbox.Options>
                            </Transition>
                        </div>
                    </>
                )}
            </Listbox>
        </div>
    )
}

export default Select
