import Image from 'next/image';

import ssiImage from '../../public/images/ssi.png';

export const SectionCard = ({ image, title, description }) => {
  return (
    <div className='bg-white shadow-md flex flex-col items-center rounded-2xl py-10 px-10 md:pt-10 md:pb-20 md:px-40'>
      <div className='w-[240px] h-[240px] relative'>
        <Image layout='fill' src={ssiImage} alt={title} quality={100} />
      </div>

      <h2 className='text-xl text-center font-bold md:text-3xl md:font-medium mb-6 md:mb-8'>
        {title}
      </h2>
      <span className='text-lg md:text-xl font-medium text-center text-corduroy'>
        {description}
      </span>
    </div>
  );
};
