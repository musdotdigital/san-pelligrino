import React, { useState } from 'react'

import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { createClient } from '@supabase/supabase-js'

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
        <div className="isolate bg-white">
            <div className="px-6 pt-6 lg:px-8">
                <div>
                    <nav className="flex h-9 items-center justify-between" aria-label="Global">
                        <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
                            <a href="#" className="-m-1.5 p-1.5">
                                <span className="font-semibold text-gray-900 hover:text-gray-900 text-2xl">
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
                                    className="font-semibold text-gray-900 hover:text-gray-900"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                        <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
                            <a
                                href="#"
                                className="inline-block rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20"
                            >
                                Join Waitlist
                            </a>
                        </div>
                    </nav>
                    <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                        <Dialog.Panel className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden">
                            <div className="flex h-9 items-center justify-between">
                                <div className="flex">
                                    <a href="#" className="-m-1.5 p-1.5">
                                        <span className="font-semibold text-gray-900 hover:text-gray-900 text-2xl">
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
                    <div className="mx-auto max-w-3xl pt-20 pb-20 sm:pb-32 sm:pt-48">
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
                                <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
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

                <TwoColumnFeature
                    layout="2/3"
                    columnOne={
                        <div className=" bg-gray-200 rounded-lg overflow-hidden drop-shadow-lg">
                            <img
                                alt="/slide-one.png"
                                src={slideOne}
                                className="group-hover:opacity-75"
                                loading="lazy"
                            />
                        </div>
                    }
                    columnTwo={
                        <div className="col-span-1">
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:mt-36">
                                Ready to level up your research game?
                            </h2>
                            <p className="mt-6 text-lg leading-8 text-gray-600 ">
                                The platform to search for papers, organise your research and
                                collaborate. All in one place. We handle the boring stuff so you can
                                focus on what matters.
                            </p>
                        </div>
                    }
                />
                <TwoColumnFeature
                    layout="1/2"
                    columnOne={
                        <div className=" bg-gray-200 rounded-lg overflow-hidden drop-shadow-lg">
                            <img
                                alt="/slide-one.png"
                                src={slideOne}
                                className="group-hover:opacity-75"
                                loading="lazy"
                            />
                        </div>
                    }
                    columnTwo={
                        <div className="col-span-1">
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:mt-36">
                                Ready to level up your research game?
                            </h2>
                            <p className="mt-6 text-lg leading-8 text-gray-600 ">
                                The platform to search for papers, organise your research and
                                collaborate. All in one place. We handle the boring stuff so you can
                                focus on what matters.
                            </p>
                        </div>
                    }
                />

                <div className="bg-gray-50">
                    <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8 ">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            <span className="block">Ready to level up your research game?</span>
                            <span className="block text-indigo-600">Sign up to the waitlist.</span>
                        </h2>
                        <div className="mt-8 sm:flex lg:mt-0 lg:flex-shrink-0 ">
                            <WatilistSignUp supabase={supabase} />
                        </div>
                    </div>
                </div>
            </main>

            <footer className="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6">
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
