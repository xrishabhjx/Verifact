'use client';
import React from 'react';
import PlusIcon from '../assets/icons/plus.svg';
import MinusIcon from '../assets/icons/minus.svg';
import clsx from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';

const items = [
  {
    question: "How does the fake news detector work?",
    answer:
      "Our detector uses advanced AI algorithms to analyze text, check credibility, and identify patterns of misinformation across various sources.",
  },
  {
    question: "Can it analyze content from social media platforms?",
    answer:
      "Yes, our tool can evaluate posts, articles, and links shared on popular social media platforms to detect potential fake news.",
  },
  {
    question: "How accurate is the detection?",
    answer:
      "Our AI model is trained with extensive datasets and achieves a high accuracy rate. While no tool is perfect, it provides a reliable credibility assessment for most content.",
  },
  {
    question: "Is the detector free to use?",
    answer:
      "We offer both free and premium plans. The free plan includes basic analysis, while premium users get advanced features like detailed reports and source verification.",
  },
];

const AccordionItem = ({ question, answer, }: { question: string; answer: string; }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className=' cursor-pointer py-7 border-b border-white/30' onClick={() => setIsOpen(!isOpen)}>
      <div className='flex items-center'><span className='flex-1 text-lg font-bold'>{question}</span>
        {isOpen ? <MinusIcon /> : <PlusIcon />}
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{opacity: 0, height: 0,marginTop: 0,}} animate={{opacity: 1,height: 'auto',marginTop:'16px',}} exit={{opacity: 0,height: 0,marginTop: 0,}}>{answer}</motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FAQs = () => {
  return (
    <div className="bg-black text-white bg-gradient-to-b from-[#5D2CA8] to-black py-[72px] sm:py-24">
      <div className="container">
        <h2 className='text-center text-5xl sm:text-6xl sm:max-w-[648px] mx-auto font-bold tracking-tighter'>Frequently asked questions</h2>
        <div className='mt-12 max-w-[648px] mx-auto'>
          {items.map(({ question, answer }) => (
            <AccordionItem question={question} answer={answer} key={question} />
          ))}
        </div>
      </div>
    </div>
  );
};
