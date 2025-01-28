'use client';
import { useState } from 'react';
import Image from 'next/image';
import logoImage from '../assets/images/cover.png';
import MenuIcon from '../assets/icons/menu.svg';
import SignupLoginModal from './Modal';

export const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleGetStartedClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='bg-black'>
      <div className="px-4">
        <div className='py-4 flex items-center justify-between'>
          <div className='relative flex items-center gap-3'>
            <div className='absolute w-14 top-1 bottom-0 bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] blur-md'></div>
            <Image src={logoImage} alt='Logo' className='h-10 w-10 relative sm:h-14 sm:w-14' />
            <span className='text-white font-bold text-3xl sm:text-5xl hidden sm:block'>VeriFact</span>
          </div>
          <div className='border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden'>
            <MenuIcon className="text-white" />
          </div>
          <nav className='gap-6 items-center hidden sm:flex'>
            <a href='#' className='text-lg text-opacity-60 text-white hover:text-opacity-100 transition focus:text-white'>Home</a>
            <a href='#' className='text-lg text-opacity-60 text-white hover:text-opacity-100 transition focus:text-white'>Browse News</a>
            <a href='#' className='text-lg text-opacity-60 text-white hover:text-opacity-100 transition focus:text-white'>Upload News</a>
            <a href='#' className='text-lg text-opacity-60 text-white hover:text-opacity-100 transition focus:text-white'>Pricing</a>
            <a href='#' className='text-lg text-opacity-60 text-white hover:text-opacity-100 transition focus:text-white'>About</a>
            <button className='bg-white py-2 px-4 rounded-lg hover:bg-gray-200' onClick={handleGetStartedClick}>Get Started</button>
          </nav>
        </div>
      </div>
      {/* Modal */}
      <SignupLoginModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};
