import React from 'react'
import Image from 'next/image'

const SectionSponsors: React.FC = () => {
    return (
        <div className='relative lg:mt-20'>
            <h2 className='text-lg font-bold text-center pb-36 md:pb-48 lg:pb-56 text-thirdWhite'>People are writting about us!</h2>
            <Image src='/logo/strip.svg' alt="strip" width={1544} height={56} className="max-w-none absolute right left-[-160px] top-[80px] lg:top-[100px] lg:left-[-70px] 2xl:left-[120px]" />
            <h1 className='font-bold text-[40px] leading-[48px] pb-6 md:pb-12 lg:pb-16 text-center font-Syne text-secondaryNeon'>Medium lenght heading goes here</h1>
            <p className='text-thirdWhite pb-12 text-center px-5 lg:text-lg lg:w-[700px] lg:mx-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
            <nav className='flex gap-6 md:gap-12 justify-center'>
                <button className='text-secondaryNeon border border-secondaryNeon w-[96px] h-[96px] rounded-full'>Prisidėk!</button>
                <button className='text-thirdWhite'>Sužinok daugiau</button>
            </nav>
        </div>
    )
}

export default SectionSponsors