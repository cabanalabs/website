import Image from 'next/image';

export const SectionItem = ({ image, title, description, reversed }) => {
  return (
    <div
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
    </div>
  );
};
