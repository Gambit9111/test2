import React from 'react';
import Header from './Header';
import Image from 'next/image'
import bg from '../../public/logo/bg.svg'

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <Header />
            <main className='h-screen overflow-y-scroll overflow-x-hidden scrollbar-thin scrollbar-thumb-secondaryNeon scrollbar-track-transparent p-3 md:px-16 relative'>
                <Image src={bg} alt="bg" className='absolute z-0 top-[250px] lg:top-[400px] 2xl:top-[500px] right-0' />
                <Image src={bg} alt="bg" className='xl:hidden absolute z-0 top-[340px] lg:top-[350px] right-0 xl:top-[600px]' />
                <Image src={bg} alt="bg" className='md:hidden absolute z-0 top-[430px] lg:top-[350px] right-0 xl:top-[600px]' />
                <Image src={bg} alt="bg" className='md:hidden absolute z-0 top-[520px] lg:top-[350px] right-0 xl:top-[600px]' />
                <Image src={bg} alt="bg" className='hidden 2xl:inline-flex absolute z-0 top-[250px] lg:top-[400px] 2xl:top-[500px] left-0' />
                {children}
            </main>
        </>
    );
};

export default Layout;