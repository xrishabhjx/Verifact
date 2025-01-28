'use client';
import Image from 'next/image';
import ArrowWIcon from '../assets/icons/arrow-w.svg'
import cursorImage from '../assets/images/cursor.png'
import messageImage from '../assets/images/message.png'
import { motion } from 'framer-motion';  

export const Hero = () => {
  return (
    <div className="bg-black text-white bg-[linear-gradient(to_bottom,#000000,#0A0921_34%,#131243_65%,#1D1B64_82%)] py-[72px] sm:py-24 relative overflow-clip">
      <div className='absolute h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] lg:w-[2400px] lg:h-[1200px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#322e8e] bg-[radial-gradient(closest-side,#000_82%,#2F1756)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)]'></div>
      <div className="container relative">
        <div className="flex items-center justify-center">
          <a href="#" className="inline-flex gap-3 border py-1 px-2 rounded-lg border-white/30">
            <span className="bg-[linear-gradient(to_right,#F87AFF,#FB93D0,#FFDD99,#C3F0B2,#2FD8FE)] text-transparent bg-clip-text [-webkit-background-clip:text]">Version 1.0 is here</span>
            <span className='inline-flex items-center gap-1'>
              <span className='hover:text-purple-300 transition'>Read More</span>
              <ArrowWIcon />
            </span>
          </a>
        </div>
        <div className='flex justify-center mt-8'>
          <div className='inline-flex relative'>
            <h1 className='text-6xl sm:text-8xl font-bold tracking-tighter text-center inline-flex'>Your Trusted <br />  Fake News Detector</h1>
            <motion.div className='absolute right-[830px] top-[135px] hidden sm:inline' drag >
              <Image src={cursorImage} height="200" width="200" alt='' className='max-w-none' draggable='false'/>
            </motion.div>
            <motion.div className='absolute bottom-[120px] left-[800px] hidden sm:inline' drag >
              <Image src={messageImage} alt='' height="200" width="200" className='max-w-none' draggable='false'/>
            </motion.div>
          </div>
        </div>
        <div className='flex justify-center'>
          <p className='text-center text-xl mt-8 max-w-md'>"Analyze, Verify, and Uncover the Facts Instantly with Advanced AI Detection"</p>
        </div>
        <div className='flex justify-center mt-8'>
          <button className='bg-white text-black py-3 px-5 rounded-lg font-medium hover:bg-gray-200 transition'>Check News</button>
        </div>
      </div>
    </div>
  );
};
