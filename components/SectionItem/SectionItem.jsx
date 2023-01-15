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

export const SectionItem = ({ image, title, description, size, isLast }) => {
  const maxWidth = size === 'small' ? 'max-w-[320px]' : 'max-w-[430px]'
  const marginRight = isLast ? '' : 'mr-16'
  return (
    <motion.div
      initial='offscreen'
      whileInView='onscreen'
      viewport={{ once: true, amount: 0.8 }}
      variants={cardVariants}
      className={`p-16 border-2 rounded-3xl ${maxWidth} ${marginRight} mb-10`}>
      <div className='w-[80px] h-[80px] md:w-[80px] md:h-[80px] relative drop-shadow-md'>
        <Image layout='fill' src={image} alt={title} quality={100} />
      </div>
      <div className='text-left'>
        <h3 className='text-xl font-bold mb-6 pt-4'>{title}</h3>
        <span className='text-lg2 text-corduroy font-medium'>
          {description}
        </span>
      </div>
    </motion.div>
  );
};
