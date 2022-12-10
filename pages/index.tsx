import React, { useState } from 'react'

import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { createClient } from '@supabase/supabase-js'
import Image from 'next/image'
import Typed from 'react-typed'

import HomeSearch from '../modules/HomeSearch/'
import TwoColumnFeature from '../modules/TwoColumnFeature'
import WatilistSignUp from '../modules/WaitlistSignUp/index'
import { etalLogo, slideOne, slideTwo } from '../src/images'
import { Database } from '../types/supabase'

if (!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    throw new Error('No Supabase Key')
}

if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
    throw new Error('No Supabase Url')
}

const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL

// const navigation = [
//     // { name: 'About Us', href: '#' },
//     // { name: 'Product', href: '#' }
// ]

function Home() {
    const supabase = createClient<Database>(supabaseUrl, supabaseKey)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div className=" text-gray-900 bg-splash-home bg-no-repeat sm:bg-none">
            <div className="">
                <div className="px-8 pt-6 lg:px-8">
                    <nav className="flex h-9 items-center justify-between" aria-label="Global">
                        <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
                            <a href="#" className="-m-1.5 p-1.5">
                                <Image src="/et-al.svg" alt="et al." width={55} height={25} />
                            </a>
                        </div>
                        <div className="flex lg:hidden">
                            <button
                                type="button"
                                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-white"
                                onClick={() => setMobileMenuOpen(true)}
                            >
                                <span className="sr-only">Open main menu</span>
                                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12">
                            {/* {navigation.map(item => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="font-semibold  hover:"
                                >
                                    {item.name}
                                </a>
                            ))} */}
                        </div>
                        <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
                            <a
                                href="#waitlist"
                                className="inline-block rounded-lg px-3 py-1.5 text-sm font-semibold dark:text-white leading-6  shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20 dark:ring-white/30 dark:hover:ring-white/50"
                            >
                                Join Waitlist
                            </a>
                        </div>
                    </nav>
                    <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                        <Dialog.Panel className="fixed inset-0 z-10 overflow-y-auto  px-8 py-6 lg:hidden bg-white dark:bg-black">
                            <div className="flex h-9 items-center justify-between">
                                <div className="flex">
                                    <a href="#" className="-m-1.5 p-1.5">
                                        <Image
                                            src="/et-al.svg"
                                            alt="et al."
                                            width={55}
                                            height={25}
                                        />
                                    </a>
                                </div>
                                <div className="flex">
                                    <button
                                        type="button"
                                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-white "
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        <span className="sr-only">Close menu</span>
                                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                    </button>
                                </div>
                            </div>
                            <div className="mt-6 flow-root">
                                <div className="-my-6 divide-y divide-gray-500/10 dark:divide-blue-50">
                                    <div className="space-y-2 py-6">
                                        {/* {navigation.map(item => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className="-mx-3 block rounded-xl py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                                            >
                                                {item.name}
                                            </a>
                                        ))} */}
                                    </div>
                                    <div className="py-6">
                                        <a
                                            href="#waitlist"
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="-mx-3 block rounded-xl py-2.5 px-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-400/10 dark:text-white "
                                        >
                                            Join Waitlist
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Dialog.Panel>
                    </Dialog>
                </div>
                <TwoColumnFeature layout="1/2" className="pt-24 sm:pt-48" single>
                    <div className="relative px-6 lg:px-8">
                        <div className="mx-auto max-w-3xl text-center">
                            <div>
                                {/* <div className="hidden lg:mb-8 sm:flex w-full  justify-center">
                                    <div className="mb-4 md:mb-0 relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                                        <span className="text-gray-600">
                                            Researching has never been so easy.{' '}
                                            <a
                                                href="#waitlist"
                                                className="font-semibold text-hot-pink"
                                            >
                                                <span
                                                    className="absolute inset-0"
                                                    aria-hidden="true"
                                                />
                                                Sign up <span aria-hidden="true">&rarr;</span>
                                            </a>
                                        </span>
                                    </div>
                                </div> */}
                                <div>
                                    <h1 className="text-4xl font-bold tracking-tight sm:text-6xl px-10 sm:px-0">
                                        Make sense of the chaos.
                                    </h1>

                                    <p className="mt-6 text-md text-gray-600 dark:text-gray-300">
                                        The platform to{' '}
                                        <span className="bg-zing-green bg-opacity-40 py-1 rounded-sm">
                                            find
                                        </span>
                                        ,{' '}
                                        <span className="bg-zing-green bg-opacity-40 py-1 rounded-sm">
                                            visualise
                                        </span>
                                        , and{' '}
                                        <span className="bg-zing-green bg-opacity-40 py-1 rounded-sm">
                                            track
                                        </span>{' '}
                                        your research - all in one place.
                                    </p>
                                    <p className="text-md text-gray-600 dark:text-gray-300">
                                        We handle the chaos so you can focus on what matters.
                                    </p>
                                </div>

                                <div className="mx-auto pt-8 max-w-lg">
                                    <HomeSearch />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="relative h-full bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5">
                        <div className="absolute inset-y-0 flex items-center pointer-events-none"></div>
                    </div> */}
                    <></>
                </TwoColumnFeature>
            </div>
            <main>
                <div className="pt-12 sm:py-16" /> {/* REMOVE PENDING ART */}
                <TwoColumnFeature layout="2/3">
                    <div className="col-span-1" id="start">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:mt-24">
                            <span className="bg-ice-blue bg-opacity-40 py-1 rounded-sm">
                                Search
                            </span>
                            , but done better.
                        </h2>
                        <p className="mt-6 text-md text-gray-600 dark:text-gray-300">
                            Finding the right paper is an art form. We pair keywords and provide
                            suggestions to help you search the field.
                        </p>
                    </div>
                    <div className="rounded-xl">
                        <Image
                            alt="Search view"
                            src={slideOne}
                            className="drop-shadow-lg"
                            loading="lazy"
                            width={1200}
                            height={800}
                        />
                    </div>
                </TwoColumnFeature>
                <TwoColumnFeature layout="2/3" inverse>
                    <div className="flex flex-row space-x-5 justify-center dark:text-white">
                        <div className="">
                            <div className=" max-w-lg mt-3 rounded-xl p-5 text-sm  leading-6 shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20 dark:ring-white/30 dark:hover:ring-white/50">
                                <h5 className="text-2xl font-bold tracking-tight ">
                                    Trends in Data Centre Energy Consumption under the European Code
                                    of Conduct for Data Centre Energy Efficiency
                                </h5>
                                <p className="mt-1 text-md text-gray-600 dark:text-gray-300 ">
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
                                        className="text-white inline-flex items-center py-1 px-2 mr-2 text-sm font-medium bg-hot-pink  rounded "
                                    >
                                        Energy
                                        <button
                                            type="button"
                                            className="inline-flex items-center p-0.5 ml-2 text-sm bg-transparent rounded-sm hover:bg-light-hot-pink hover:text-hot-pink"
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
                                                    fillRule="evenodd"
                                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            <span className="sr-only">Remove badge</span>
                                        </button>
                                    </span>
                                    <span
                                        id="badge-dismiss-default"
                                        className="text-white inline-flex items-center py-1 px-2 mr-2 text-sm font-medium  bg-royal-blue rounded "
                                    >
                                        Sustainability
                                        <button
                                            type="button"
                                            className="inline-flex items-center p-0.5 ml-2 text-sm  bg-transparent rounded-sm hover:bg-light-royal-blue  "
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
                                                    fillRule="evenodd"
                                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            <span className="sr-only">Remove badge</span>
                                        </button>
                                    </span>
                                </div>
                            </div>
                            <div className="pt-5 max-w-lg">
                                <div className="flex h-72 sm:h-52 flex-col relative mt-3 rounded-xl p-5 text-sm leading-6 text-gray-900 dark:text-white shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20 dark:ring-white/30 dark:hover:ring-white/50">
                                    <span
                                        id="badge-dismiss-default"
                                        className="w-fit mb-3 items-center py-1 px-2 mr-2 text-sm font-medium text-white bg-light-ice-blue dark:bg-sky-500  rounded "
                                    >
                                        TLDR
                                    </span>

                                    <Typed
                                        strings={[
                                            'Data centres are a major contributor to global CO2 emissions, and this paper evaluated the current trends in energy consumption and efficiency in data centres in the European Union. The analysis showed a decreasing Power Usage Effectiveness (PUE), indicating that voluntary approaches can be effective in addressing climate and energy issues.'
                                        ]}
                                        typeSpeed={20}
                                    />

                                    <div className="absolute right-0 top-0 top-align -mt-1 -mr-1">
                                        <span className="flex h-3 w-3">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
                                            <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <h2 className="text-3xl font-bold tracking-tight  sm:text-4xl">
                            <span className="bg-royal-blue dark:bg-hot-pink bg-opacity-40 py-1 rounded-sm">
                                Too long
                            </span>
                            , don&apos;t want to read?
                        </h2>
                        <p className="mt-6 text-md pb-3 text-gray-600 dark:text-gray-300">
                            Searching through hundreds of papers can be a pain. We are building the
                            next level of AI for academic research that summarises papers - so you
                            can decide what is important to you.
                        </p>
                    </div>
                </TwoColumnFeature>
                <TwoColumnFeature layout="2/3">
                    <div className="col-span-1">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl dark:text-white">
                            <span className="bg-ice-blue bg-opacity-40 py-1 rounded-sm">Track</span>
                            ,{' '}
                            <span className="bg-ice-blue bg-opacity-40 py-1 rounded-sm">
                                organise
                            </span>
                            , and{' '}
                            <span className="bg-ice-blue bg-opacity-40 py-1 rounded-sm">
                                collaborate.
                            </span>{' '}
                            {/* on your research. */}
                        </h2>
                        <p className="mt-6 text-md  text-gray-600 dark:text-gray-300">
                            Whether you are a lone researcher or in a team, you can save papers,
                            leave notes, and plan future reads for all of your projects.
                        </p>
                    </div>
                    <div className="rounded-xl">
                        <Image
                            alt="Collab view"
                            src={slideTwo}
                            className="drop-shadow-lg"
                            loading="lazy"
                            width={1200}
                            height={800}
                        />
                    </div>
                </TwoColumnFeature>
                <div className=" rounded-t-lg bg-gray-50 dark:bg-black" id="waitlist">
                    <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8 ">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                            <span className="block dark:text-white">
                                Ready to level up your research game?
                            </span>
                            <span className="block text-hot-pink">Sign up to the waitlist.</span>
                        </h2>
                        <div className="mt-8 sm:flex lg:mt-0 lg:flex-shrink-0 ">
                            <WatilistSignUp supabase={supabase} />
                        </div>
                    </div>
                </div>
            </main>

            <footer className="p-4  md:flex md:items-center md:justify-between md:p-6 bg-gray-50 dark:bg-black text-gray-500 dark:text-white ">
                <span className="text-sm  sm:text-center">© 2022 et al. All Rights Reserved.</span>
                <ul className="flex flex-wrap items-center mt-3 text-sm  sm:mt-0">
                    {/* <li>
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
                    </li> */}
                    <li>
                        <a href="mailto:hello@etal-team.com" className="hover:underline">
                            Contact
                        </a>
                    </li>
                </ul>
            </footer>
        </div>
    )
}

export default Home
