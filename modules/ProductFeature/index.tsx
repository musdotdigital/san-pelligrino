import { slideOne } from '../../src/images'
import Image from 'next/image'
import React from 'react'

type Props = {
    inverse?: boolean
}

const product = {
    name: 'Basic Tee 6-Pack',
    price: '$192',
    href: '#',
    breadcrumbs: [
        { id: 1, name: 'Men', href: '#' },
        { id: 2, name: 'Clothing', href: '#' }
    ],
    images: [
        {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
            alt: 'Two each of gray, white, and black shirts laying flat.'
        },
        {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
            alt: 'Model wearing plain black basic tee.'
        },
        {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
            alt: 'Model wearing plain gray basic tee.'
        },
        {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
            alt: 'Model wearing plain white basic tee.'
        }
    ],
    colors: [
        { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
        { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
        { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' }
    ],
    sizes: [
        { name: 'XXS', inStock: false },
        { name: 'XS', inStock: true },
        { name: 'S', inStock: true },
        { name: 'M', inStock: true },
        { name: 'L', inStock: true },
        { name: 'XL', inStock: true },
        { name: '2XL', inStock: true },
        { name: '3XL', inStock: true }
    ],
    description:
        'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
    highlights: [
        'Hand cut and sewn locally',
        'Dyed with our proprietary colors',
        'Pre-washed & pre-shrunk',
        'Ultra-soft 100% cotton'
    ],
    details:
        'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.'
}

const ProductFeature = (props: Props) => {
    const { inverse = false } = props
    return (
        <div className="bg-white py-24 sm:py-28">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className=" max-w-lg sm:mx-auto md:max-w-none">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-36">
                        {/* <div className="col-span-2 aspect-auto drop-shadow-lg">
                            <Image
                                src={'/slide-one.png'}
                                alt="Picture of the author"
                                layout="fill"
                                className="object-fill h-full"
                            />
                        </div> */}
                        <div className=" bg-gray-200 rounded-lg overflow-hidden  col-span-2 drop-shadow-lg">
                            <img
                                alt="/slide-one.png"
                                src="/slide-one.png"
                                // className="group-hover:opacity-75"
                            />
                            <Image
                                src={'/slide-one.png'}
                                alt="Picture of the author"
                                layout="fill"
                                className=""
                            />
                        </div>

                        <div className="col-span-1">
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mt-36">
                                Ready to level up your research game?
                            </h2>
                            <p className="mt-6 text-lg leading-8 text-gray-600 ">
                                The platform to search for papers, organise your research and
                                collaborate. All in one place. We handle the boring stuff so you can
                                focus on what matters.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductFeature
