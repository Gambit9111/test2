import React from 'react'
import Image from 'next/image'

const SectionCard: React.FC = () => {
    return (
        <div className='h-[125px] lg:h-[250px] flex gap-6 md:w-8/12 lg:w-full md:mx-auto'>
            <Image src='/logo/placeholderbig.svg' alt="placeholder" width={127} height={125} className="lg:w-[250px] lg:h-[250px]" />

            <div>
                <h3 className='font-semibold lg:text-xl font-Syne text-thirdWhite'>Full name</h3>
                <h3 className='pb-3 lg:text-lg text-secondaryNeon'>Job title</h3>
                <p className='text-sm lg:text-base pr-4 pb-2 lg:pb-4 lg:pr-0 text-thirdWhite'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla repudiandae alias distinctio quod architecto.</p>
                <div className='flex gap-4'>
                    <Image src='/logo/icon1.svg' alt="icon1" width={18} height={18} />
                    <Image src='/logo/icon2.svg' alt="icon2" width={18} height={16} />
                    <Image src='/logo/icon3.svg' alt="icon3" width={18} height={18} />
                </div>
            </div>
        </div>
    )
}

function SectionArtists() {
    return (
        <div className='mt-12 lg:flex lg:mt-32 lg:gap-20'>
            <div className='lg:w-9/12'>
                <h3 className='font-semibold pb-6 px-3 text-thirdWhite'>Artists</h3>
                <h1 className='text-[48px] leading-[58px] font-bold pb-6 px-3 text-secondaryNeon font-Syne'>Our team</h1>
                <p className='pb-8 pr-10 px-3 text-thirdWhite'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, voluptate. Perferendis veritatis minus sunt eum.</p>
                <button className='my-button bg-secondaryNeon text-primaryBlack w-[140px] mb-8 font-Syne tracking-wider'>Find out more!</button>
            </div>
            <div className='flex flex-col gap-24 md:mt-6 lg:gap-12'>
                <SectionCard />
                <SectionCard />
                <SectionCard />
            </div>
        </div>
    )
}

export default SectionArtists