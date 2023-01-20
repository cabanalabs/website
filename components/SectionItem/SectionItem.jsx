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

export const SectionItem = ({ image, title, description, size, index, isLast }) => {
  const maxWidth = size === 'small' ? 'sm:max-w-[280px] xl:max-w-[300px] 2xl:max-w-[320px]' : 'sm:max-w-[330px] lg:max-w-[290px] xl:max-w-[355px] 2xl:max-w-[430px]'
  const marginRight = isLast || index % 2  ? '' : size === 'small' ? 'sm:mr-8' : 'sm:mr-16 lg:mr-10'
  return (
    // <motion.div
    //   initial='offscreen'
    //   whileInView='onscreen'
    //   viewport={{ once: true, amount: 0.8 }}
    //   variants={cardVariants}
    <div
      className={`p-16 border-2 rounded-3xl ${maxWidth} ${marginRight} mb-10 lg:p-8 `}>
      <div className='w-[80px] h-[80px] md:w-[80px] md:h-[80px] relative drop-shadow-md'>
        <Image layout='fill' src={image} alt={title} quality={100} />
      </div>
      <div className='text-left'>
        <h3 className='text-xl font-bold mb-6 pt-4'>{title}</h3>
        <span className='text-lg2 text-corduroy font-medium'>
          {description}
        </span>
      </div>
    </div>
    // </motion.div>
  );
};
