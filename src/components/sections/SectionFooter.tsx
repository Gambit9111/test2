import React from 'react'
import Image from 'next/image'

function SectionFooter() {
    return (
        <div className='mt-24'>
            <div className='w-10/12 mx-auto h-[1px] bg-thirdWhite lg:hidden'></div>
            <div className='flex justify-center pt-6 gap-10 lg:hidden'>
                <Image alt="icon1" src='/logo/icon3.svg' width={20} height={20} />
                <Image alt="icon2" src='/logo/icon2.svg' width={20} height={20} />
                <Image alt="icon3" src='/logo/icon1.svg' width={20} height={20} />
            </div>
            <div className='flex flex-col items-center gap-4 py-8 lg:hidden text-thirdWhite font-Syne tracking-wider'>
                <h2>About</h2>
                <h2>Features</h2>
                <h2>Pricing</h2>
                <h2>Gallery</h2>
                <h2>Team</h2>
            </div>
            <div className='hidden lg:inline-flex lg:mt-24 pb-16'>
                <div className='w-[1000px] pt-2'>
                    <Image alt="logo" src='/logo/logo.svg' width={63} height={28} className="pb-5" />
                    <p className='pb-4 text-thirdWhite'>Join our newsletter to stay up to date on features and releases.</p>
                    <input type="text" className='border-2 border-black w-8/12 mr-3 h-[48px] pl-2' placeholder='Enter your email' />
                    <button className='my-button bg-secondaryNeon text-primaryBlack font-Syne'>Subscribe</button>
                    <p className='text-xs pt-3 text-secondaryNeon'>By subscribing you agree to our Privacy Policy and provide consent to receive updates from our company</p>
                </div>
                <div className='flex w-full justify-around gap-10 mr-20 text-thirdWhite'>
                    <div className='space-y-3'>
                        <h2 className='font-semibold pb-1 font-Syne tracking-wide text-secondaryNeon'>Column One</h2>
                        <p className='text-sm'>Link One</p>
                        <p className='text-sm'>Link Two</p>
                        <p className='text-sm'>Link Three</p>
                        <p className='text-sm'>Link Four</p>
                        <p className='text-sm'>Link Five</p>
                    </div>
                    <div className='space-y-3'>
                        <h2 className='font-semibold pb-1 font-Syne tracking-wide text-secondaryNeon'>Column Two</h2>
                        <p className='text-sm'>Link Six</p>
                        <p className='text-sm'>Link Seven</p>
                        <p className='text-sm'>Link Eight</p>
                        <p className='text-sm'>Link Nine</p>
                        <p className='text-sm'>Link Ten</p>
                    </div>
                    <div className='space-y-3'>
                        <h2 className='font-semibold pb-1 font-Syne tracking-wide text-secondaryNeon'>Follow Us</h2>
                        <div className='flex gap-2'><Image alt="icon1" src='/logo/icon3.svg' width={20} height={20} /> <p className='text-sm'>Facebook</p></div>
                        <div className='flex gap-2'><Image alt="icon2" src='/logo/icon2.svg' width={20} height={20} /> <p className='tex-sm'>Instagram</p></div>
                        <div className='flex gap-2'><Image alt="icon3" src='/logo/icon1.svg' width={20} height={20} /> <p className='text-sm'>Twitter</p></div>
                        <div className='flex gap-2'><Image alt="icon4" src='/logo/icon1.svg' width={20} height={20} /> <p className='text-sm'>LinkedIn</p></div>
                    </div>
                </div>
            </div>
            <div className='w-10/12 mx-auto h-[1px] bg-thirdWhite lg:w-full lg:mb-2'></div>
            <div className='lg:flex lg:flex-row-reverse lg:justify-between'>
                <div className='flex text-xs underline underline-offset-1 justify-evenly gap-2 mr-6 pt-6 md:justify-start md:space-x-6 md:pl-10 lg:mr-0 lg:pt-4 text-thirdWhite'>
                    <h2>Privacy Policy</h2>
                    <h2>Terms of Service</h2>
                    <h2>Cookies Settings</h2>
                </div>
                <h3 className='text-secondaryNeon font-Syne text-sm tracking-wider text-left pl-2 md:pl-10 font-semibold pt-3 mb-24 lg:mb-32 lg:pl-0'>© 2023. Gucci Gang. All rights reserved.</h3>
            </div>
        </div>
    )
}

export default SectionFooter