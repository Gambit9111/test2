import Image from 'next/image'
import { ChevronDownIcon } from '@heroicons/react/24/solid'

const Header: React.FC = () => {
    return (
        <header className="w-full h-[4.5rem] border-b border-secondaryNeon p-6 md:px-16 flex items-center justify-between relative">
            <Image src="/logo/menu.svg" alt="menu" width={24} height={24} className="md:hidden" onClick={() => {
                const navMenu: any = document.getElementById('nav-menu');
                navMenu.classList.toggle('hidden');
            }} />
            <div id="nav-menu" className='hidden md:inline-flex absolute top-16 md:relative md:top-0 border md:border-0 border-secondaryNeon text-thirdWhite bg-primaryBlack md:bg-none'>
                <nav className='flex flex-col justify-around md:flex-row md:gap-8 h-[204px] w-[100px] md:h-full md:w-full md:p-0'>
                    <h3 className='text-sm md:text-base border-b md:border-0 border-secondaryNeon'>Home</h3>
                    <h3 className='text-sm md:text-base border-b md:border-0 border-secondaryNeon'>Contact</h3>
                    <h3 className='text-sm md:text-base border-b md:border-0 border-secondaryNeon'>Social Media</h3>
                    <h3 className='text-sm md:text-base border-b md:border-0 border-secondaryNeon'>Sponsors</h3>
                    <h3 className='text-sm md:text-base border-b md:border-0 border-secondaryNeon'>Tracks</h3>
                    <div className='text-sm md:text-base flex items-center gap-1'><h3>Artists</h3><ChevronDownIcon className="h-4 w-4 md:h-5 md:w-5" /></div>
                </nav>
            </div>
            <Image src="/logo/logo.svg" alt="logo" width={63} height={28} />
        </header>
    )
}

export default Header