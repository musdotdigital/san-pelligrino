import React from 'react'

import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import Typed from 'react-typed'

const HomeSearch = () => (
    <div className="flex flex-row">
        <label className="sr-only">Search</label>
        <div className="relative bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5">
            <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
                <MagnifyingGlassIcon className="w-4 h-4" />
            </div>
            <div className="absolute inset-y-0 flex items-center pointer-events-none">
                <div className="hidden sm:inline-block mr-12">
                    <Typed
                        strings={[
                            'Deep learning for medical applications...',
                            'Analysis of the human genome...',
                            'Fairness in multi-modal transport systems...'
                        ]}
                        typeSpeed={100}
                        backSpeed={40}
                        loop
                    />
                </div>
                <div className="sm:hidden">Analysis of the human genome...</div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400">
                ⌘K
            </div>
        </div>
        <button
            type="submit"
            className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800"
        >
            <MagnifyingGlassIcon className="w-6 h-6" />
        </button>
    </div>
)

export default HomeSearch
