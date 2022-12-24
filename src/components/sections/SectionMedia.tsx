import React from 'react'
import Image from 'next/image'

const SectionSocialMedia: React.FC = () => {
    return (
        <div className='text-center flex flex-col gap-10 mt-16 md:mt-14 lg:mt-32'>
            <h1 className='font-semibold text-thirdWhite'>Follow us on social media</h1>
            <h1 className='text-2xl font-bold font-Syne text-secondaryNeon tracking-wider'>Hover over link one</h1>
            <h1 className='text-2xl font-bold font-Syne text-secondaryNeon tracking-wider'>Hover over link two</h1>
            <h1 className='text-2xl font-bold font-Syne text-secondaryNeon tracking-wider'>Hover over link three</h1>
            <h1 className='text-2xl font-bold font-Syne text-secondaryNeon tracking-wider'>Hover over link four</h1>
        </div>
    )
}

export default SectionSocialMedia