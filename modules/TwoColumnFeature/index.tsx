import React, { HTMLAttributes } from 'react'

import { setClassNames } from '../../utils/tailwindUtils'

type Props = {
    layout: '2/3' | '1/2'
    className?: HTMLAttributes<HTMLDivElement>['className']
    inverse?: boolean
    children: React.ReactNode[]
    single?: boolean
}

const ProductFeature = (props: Props): React.ReactElement | null => {
    const { layout, children, className = '', inverse = false, single = false } = props
    if (children.length !== 2) return null
    else
        return (
            <div className={setClassNames(className, 'pb-24')}>
                <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
                    <div className=" max-w-lg sm:mx-auto md:max-w-none dark:text-white">
                        {!single ? (
                            <div
                                className={setClassNames(
                                    layout === '2/3' ? 'lg:grid-cols-3' : 'lg:grid-cols-2',
                                    'grid grid-cols-1 gap-8 lg:gap-36'
                                )}
                            >
                                <div className="grid grid-col-1 content-center ">
                                    {children[inverse ? 1 : 0]}
                                </div>
                                <div
                                    className={setClassNames(
                                        layout === '2/3' ? 'sm:col-span-2' : '',
                                        'grid grid-col-1 content-center '
                                    )}
                                >
                                    {children[inverse ? 0 : 1]}
                                </div>
                            </div>
                        ) : (
                            children[0]
                        )}
                    </div>
                </div>
            </div>
        )
}

export default ProductFeature
