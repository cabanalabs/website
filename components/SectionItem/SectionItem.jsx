import Image from 'next/image';
import { motion } from 'framer-motion';

const cardVariants = {
  offscreen: {
    y: 150,
  },
  onscreen: {
    y: 0,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

export const SectionItem = ({ image, title, description, reversed }) => {
  return (
    <motion.div
      initial='offscreen'
      whileInView='onscreen'
      viewport={{ once: true, amount: 0.8 }}
      variants={cardVariants}
      className={`flex flex-col md:flex-row ${
        reversed ? 'md:flex-row-reverse' : ''
      } items-center justify-between`}
    >
      <div className='w-[150px] h-[150px] md:w-[204px] md:h-[204px] relative'>
        <Image layout='fill' src={image} alt={title} quality={100} />
      </div>
      <div className='px-10 md:px-0 text-left max-w-[500px]'>
        <h3 className='text-xl md:text-xxl font-bold mb-6'>{title}</h3>
        <span className='text-base md:text-lg text-corduroy font-medium'>
          {description}
        </span>
      </div>
    </motion.div>
  );
};
