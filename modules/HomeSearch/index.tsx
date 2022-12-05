import React from 'react'

import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import Typed from 'react-typed'

const HomeSearch = () => (
    <div className="flex flex-row">
        <label className="sr-only">Search</label>
        <div className="relative bg-gray-50 dark:bg-neutral-900 border border-gray-300 dark:border-neutral-800 text-gray-500 dark:text-gray-300 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5">
            <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
                <MagnifyingGlassIcon className="w-4 h-4" />
            </div>
            <div className="absolute inset-y-0 flex items-center pointer-events-none">
                <div className="hidden sm:inline-block mr-12">
                    <Typed
                        strings={[
                            'Data centre energy consumption...',
                            'Deep learning for medical applications...'
                        ]}
                        typeSpeed={100}
                        backSpeed={40}
                        loop
                    />
                </div>
                <div className="sm:hidden">Data centre energy...</div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400 ">
                ⌘K
            </div>
        </div>
        <a
            href="#start"
            className="  transition ease-in-out delay-150 p-2.5 ml-2 text-sm font-medium text-white bg-hot-pink rounded-xl hover:bg-black duration-300"
        >
            <MagnifyingGlassIcon className="w-6 h-6" />
        </a>
    </div>
)

export default HomeSearch
