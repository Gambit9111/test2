import React from 'react'
import Image from 'next/image'
import bg from '../../../public/logo/bg.svg'

const SectionVideo: React.FC = () => {

    return (
        <div className='flex flex-col items-center h-[700px] mt-6 lg:mt-0 lg:h-screen relative'>
            <h1 className='text-secondaryNeon text-[38px] md:text-[60px] lg:text-[96px] font-bold font-Syne z-20 absolute top-5 md:top-0'>Trečias aukštas</h1>
            <iframe loading="lazy" className='mt-14 lg:mt-20 w-full h-[30%] md:h-[40%] lg:w-11/12 lg:h-[650px] 2xl:w-9/12 2xl:h-[750px]' src="https://www.youtube.com/embed/LLmX2JDAMd0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <div className='flex flex-col md:flex-row md:pt-6 items-center lg:w-11/12 2xl:w-9/12 md:space-x-2'>
                <h2 className='tracking-wide leading-tight font-Syne text-[32px] font-bold text-center lg:text-left pt-4 md:pt-0 md:text-[40px] xl:text-[48px] xl:pl-4'>Ieškai dūmų arba repo? Papuolei būtent čia!</h2>
                <div className='xl:pl-10'>
                    <p className='text-base pt-2 pb-4 xl:pb-10 md:pt-0 md:text-[18px] text-center lg:text-left'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem sapiente quo quod eos dignissimos laudantium pariatur, modi fugit incidunt temporibus!</p>
                    <div className='text-center lg:text-left'>
                        <button className='my-button text-secondaryNeon'>Button</button>
                        <button className='my-button text-black bg-secondaryNeon'>Button</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionVideo




// return (
//     <div className='h-full'>

//         <Image src='/logo/bg.svg' alt="bg" width={1440} height={583} className='absolute' />

//         <h1 className='text-[38px] lg:text-[96px] text-center text font-bold font-Syne text-secondaryNeon'>Trečias aukštas</h1>

//         <iframe loading="lazy" className='w-full h-[250px] md:h-[450px] lg:h-[700px] lg:mx-auto p-3 md:pt-12 md:px-0 md:pb-0' src="https://www.youtube.com/embed/HLQ1cK9Edhc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

//         <div className='md:flex md:flex-row md:pt-12 lg:gap-20'>

//             <h1 className='font-bold text-[32px] leading-[48px] lg:text-[56px] lg:leading-[67px] pt-3 pb-6 px-6 md:px-0 md:pb-0 text-center md:text-left md:w-6/12 lg:mr-10 font-Syne'>Ieškai dūmų arba repo? Papuolei būtent čia!</h1>

//             <div className='md:flex md:flex-col md:w-6/12'>
//                 <p className='pb-6 text-left px-3 md:px-0 lg:pl-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat
//                 </p>
//                 <nav className='px-3 pb-6 md:px-0 lg:pl-10'>
//                     <button className='my-button'>Button</button>
//                     <button className='my-button text-black bg-white border border-black'>Button</button>
//                 </nav>
//             </div>
//         </div>

//     </div>
// )