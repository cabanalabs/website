import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

import plus from '../../public/icons/plus.png';
import minus from '../../public/icons/minus.png';

export const FAQItem = ({ i, expanded, setExpanded, item }) => {
  const isOpen = i === expanded;

  return (
    <div
      className='bg-white border-dashed border-[1px] border-cabanaBlue rounded-xl py-10 px-6'
      onClick={() => setExpanded(isOpen ? false : i)}
    >
      <div className='flex justify-between items-center cursor-pointer gap-4'>
        <h4 className='text-lg md:text-xl font-medium text-corduroy'>
          {item.question}
        </h4>
        <div className='shrink-0'>
          <Image
            src={isOpen ? minus : plus}
            alt={isOpen ? 'Minus' : 'Plus'}
            height={30}
            width={30}
          />
        </div>
      </div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key='content'
            initial='collapsed'
            animate='open'
            exit='collapsed'
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.3 }}
          >
            <span className='text-base md:text-lg font-medium text-corduroy block pt-10'>
              {item.answer}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
