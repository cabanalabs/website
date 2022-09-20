import Image from 'next/image';

export const SectionCard = ({ image, title, description }) => {
  return (
    <div className='bg-white shadow-regular flex flex-col items-center rounded-2xl py-10 px-10 md:pt-10 md:pb-20 md:px-36'>
      <div className='w-[180px] h-[180px] md:w-[240px] md:h-[240px] relative mb-8 md:mb-16'>
        <Image layout='responsive' src={image} alt={title} quality={100} />
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
