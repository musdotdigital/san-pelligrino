import React, { useState } from 'react'

import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { createClient } from '@supabase/supabase-js'
import Typed from 'react-typed'

import HomeSearch from '../modules/HomeSearch/'
import TwoColumnFeature from '../modules/TwoColumnFeature'
import WatilistSignUp from '../modules/WaitlistSignUp/index'
import { slideOne } from '../src/images'
import { Database } from '../types/supabase'

if (!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    throw new Error('No Supabase Key')
}

if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
    throw new Error('No Supabase Url')
}

const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL

const navigation = [
    { name: 'About Us', href: '#' },
    { name: 'Product', href: '#' }
]

function Home() {
    const supabase = createClient<Database>(supabaseUrl, supabaseKey)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div className="isolate bg-white  text-gray-900  ">
            <div className="px-6 pt-6 lg:px-8">
                <div>
                    <nav className="flex h-9 items-center justify-between" aria-label="Global">
                        <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
                            <a href="#" className="-m-1.5 p-1.5">
                                <span className="font-semibold  hover:text-gray-900 text-2xl">
                                    et al.
                                </span>
                            </a>
                        </div>
                        <div className="flex lg:hidden">
                            <button
                                type="button"
                                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                                onClick={() => setMobileMenuOpen(true)}
                            >
                                <span className="sr-only">Open main menu</span>
                                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12">
                            {navigation.map(item => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="font-semibold  hover:"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                        <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
                            <a
                                href="#"
                                className="inline-block rounded-lg px-3 py-1.5 text-sm font-semibold leading-6  shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20"
                            >
                                Join Waitlist
                            </a>
                        </div>
                    </nav>
                    <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                        <Dialog.Panel className="fixed inset-0 z-10 overflow-y-auto  px-6 py-6 lg:hidden">
                            <div className="flex h-9 items-center justify-between">
                                <div className="flex">
                                    <a href="#" className="-m-1.5 p-1.5">
                                        <span className="font-semibold  hover:text-gray-900 text-2xl">
                                            et al
                                        </span>
                                    </a>
                                </div>
                                <div className="flex">
                                    <button
                                        type="button"
                                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        <span className="sr-only">Close menu</span>
                                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                    </button>
                                </div>
                            </div>
                            <div className="mt-6 flow-root">
                                <div className="-my-6 divide-y divide-gray-500/10">
                                    <div className="space-y-2 py-6">
                                        {navigation.map(item => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                    <div className="py-6">
                                        <a
                                            href="#"
                                            className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-400/10"
                                        >
                                            Join the Waitlist
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Dialog.Panel>
                    </Dialog>
                </div>
            </div>
            <main>
                <div className="relative px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl pt-20 pb-20 sm:pb-24 sm:pt-48">
                        <div>
                            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                                <div className="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                                    <span className="text-gray-600">
                                        Researching has never been so easy.{' '}
                                        <a href="#" className="font-semibold text-indigo-600">
                                            <span className="absolute inset-0" aria-hidden="true" />
                                            Read more <span aria-hidden="true">&rarr;</span>
                                        </a>
                                    </span>
                                </div>
                            </div>
                            <div>
                                <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
                                    Level up your research game.
                                </h1>
                                <p className="mt-6 text-lg leading-2 text-gray-600 sm:text-center">
                                    The platform to search for papers, organise your research and
                                    collaborate. All in one place. We handle the boring stuff so you
                                    can focus on what matters.
                                </p>
                            </div>

                            <div className="mx-auto pt-12 max-w-lg">
                                <HomeSearch />
                            </div>
                        </div>
                    </div>
                </div>

                <TwoColumnFeature layout="2/3">
                    <div className="col-span-1">
                        <h2 className="text-3xl font-bold tracking-tight  sm:text-4xl sm:mt-36">
                            Ready to level up your research game?
                        </h2>
                        <p className="mt-6 text-md  text-gray-600 ">
                            The platform to search for papers, organise your research and
                            collaborate. All in one place. We handle the boring stuff so you can
                            focus on what matters.
                        </p>
                    </div>
                    <div className="rounded-lg overflow-hidden drop-shadow-lg">
                        <img
                            alt="/slide-one.png"
                            src={slideOne}
                            className="group-hover:opacity-75"
                            loading="lazy"
                        />
                    </div>
                </TwoColumnFeature>

                <TwoColumnFeature layout="1/2">
                    <div className="col-span-1">
                        <h2 className="text-3xl font-bold tracking-tight  sm:text-4xl">
                            Too long, don&apos;t want to read?
                        </h2>
                        <p className="mt-6 text-md pb-3 text-gray-600 ">
                            Searching through hundreds of papers can be a pain. We summarise the
                            most important parts of the paper so you can decide on what is important
                            to you.
                        </p>
                    </div>
                    <div className="flex flex-row space-x-5">
                        <div className="">
                            <div className=" mt-3 rounded-lg p-5 text-sm  leading-6 shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                                <h5 className="text-2xl font-bold tracking-tight ">
                                    Trends in Data Centre Energy Consumption under the European Code
                                    of Conduct for Data Centre Energy Efficiency
                                </h5>
                                <p className="mt-1 text-md text-gray-600 ">
                                    Maria Avgerinou,{' '}
                                    <a
                                        className="hover:underline"
                                        href="https://www.researchgate.net/publication/319996455_Trends_in_Data_Centre_Energy_Consumption_under_the_European_Code_of_Conduct_for_Data_Centre_Energy_Efficiency"
                                    >
                                        et al.
                                    </a>
                                </p>
                                <div className="mt-3">
                                    <span
                                        id="badge-dismiss-default"
                                        className="inline-flex items-center py-1 px-2 mr-2 text-sm font-medium text-blue-800 bg-blue-100 rounded "
                                    >
                                        Energy
                                        <button
                                            type="button"
                                            className="inline-flex items-center p-0.5 ml-2 text-sm text-blue-400 bg-transparent rounded-sm hover:bg-blue-200 hover:text-blue-900 "
                                            data-dismiss-target="#badge-dismiss-default"
                                            aria-label="Remove"
                                        >
                                            <svg
                                                aria-hidden="true"
                                                className="w-3.5 h-3.5"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                    clip-rule="evenodd"
                                                ></path>
                                            </svg>
                                            <span className="sr-only">Remove badge</span>
                                        </button>
                                    </span>
                                    <span
                                        id="badge-dismiss-default"
                                        className="inline-flex items-center py-1 px-2 mr-2 text-sm font-medium text-green-800 bg-green-100 rounded "
                                    >
                                        Sustainability
                                        <button
                                            type="button"
                                            className="inline-flex items-center p-0.5 ml-2 text-sm text-green-400 bg-transparent rounded-sm hover:bg-green-200 hover:text-blue-900 "
                                            data-dismiss-target="#badge-dismiss-default"
                                            aria-label="Remove"
                                        >
                                            <svg
                                                aria-hidden="true"
                                                className="w-3.5 h-3.5"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                    clip-rule="evenodd"
                                                ></path>
                                            </svg>
                                            <span className="sr-only">Remove badge</span>
                                        </button>
                                    </span>
                                </div>
                            </div>
                            <div className="pt-5">
                                <div className="flex h-72 sm:h-52 flex-col relative mt-3 rounded-lg p-5 text-sm leading-6 text-gray-900 shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                                    <span
                                        id="badge-dismiss-default"
                                        className="w-fit mb-3 items-center py-1 px-2 mr-2 text-sm font-medium text-yellow-800 bg-yellow-100 rounded "
                                    >
                                        TLDR
                                    </span>

                                    <Typed
                                        strings={[
                                            'Data centres are a major contributor to global CO2 emissions, and this paper evaluated the current trends in energy consumption and efficiency in data centres in the European Union. The analysis showed a decreasing Power Usage Effectiveness (PUE), indicating that voluntary approaches can be effective in addressing climate and energy issues.'
                                        ]}
                                        typeSpeed={20}
                                    />

                                    <div className="absolute right-0 top-0 top-align -mt-1.5 -mr-1.5">
                                        <span className="flex h-3 w-3">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
                                            <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </TwoColumnFeature>

                <TwoColumnFeature layout="1/2">
                    <div className="col-span-1">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl ">
                            Ready to level up your research game?
                        </h2>
                        <p className="mt-6 text-md  text-gray-600 ">
                            The platform to search for papers, organise your research and
                            collaborate. All in one place. We handle the boring stuff so you can
                            focus on what matters.
                        </p>
                    </div>
                    <div className="rounded-lg overflow-hidden drop-shadow-lg">
                        <img
                            alt="/slide-one.png"
                            src={slideOne}
                            className="group-hover:opacity-75"
                            loading="lazy"
                        />
                    </div>
                </TwoColumnFeature>

                <div className="">
                    <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8 ">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                            <span className="block">Ready to level up your research game?</span>
                            <span className="block text-indigo-600">Sign up to the waitlist.</span>
                        </h2>
                        <div className="mt-8 sm:flex lg:mt-0 lg:flex-shrink-0 ">
                            <WatilistSignUp supabase={supabase} />
                        </div>
                    </div>
                </div>
            </main>

            <footer className="p-4 rounded-lg shadow md:flex md:items-center md:justify-between md:p-6">
                <span className="text-sm text-gray-500 sm:text-center ">
                    © 2022{' '}
                    <a href="https://flowbite.com/" className="hover:underline">
                        et al
                    </a>
                    . All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500  sm:mt-0">
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6 ">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">
                            Privacy Policy
                        </a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">
                            Licensing
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">
                            Contact
                        </a>
                    </li>
                </ul>
            </footer>
        </div>
    )
}

export default Home
