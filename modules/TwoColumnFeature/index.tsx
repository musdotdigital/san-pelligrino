import React from 'react'

import { setClassNames } from '../../utils/tailwindUtils'

type Props = {
    layout: '2/3' | '1/2'
    children: React.ReactNode[]
}

const ProductFeature = (props: Props): React.ReactElement | null => {
    const { layout, children } = props
    if (children.length !== 2) return null
    else
        return (
            <div className="bg-white sm:py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className=" max-w-lg sm:mx-auto md:max-w-none">
                        <div
                            className={setClassNames(
                                layout === '1/2' ? 'md:grid-cols-2' : 'md:grid-cols-3',
                                'grid grid-cols-1 md:grid-cols-3 gap-36'
                            )}
                        >
                            <div
                                className={setClassNames(
                                    layout === '1/2' ? 'sm:col-span-1' : 'sm:col-span-2'
                                )}
                            >
                                {children[0]}
                            </div>
                            {children[1]}
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default ProductFeature