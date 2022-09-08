import Image from 'next/image';

import partnerships from '../../public/images/partnerships.png';

export const PartnetshipsSection = () => {
  return (
    <section className='bg-partnerships'>
      <div className='section-content pt-12 pb-6 lg:pb-40 flex flex-col justify-between items-center h-full'>
        <div className='w-[204px] h-[204px]'>
          <Image
            layout='responsive'
            src={partnerships}
            alt='Partnerships'
            quality={100}
          />
        </div>
        <h3 className='text-xl md:text-2xl text-white font-medium mt-6 mb-6 md:mb-10'>
          Partnerships
        </h3>
        <h4 className='text-lg md:text-xl text-white font-normal text-center px-6 md:px-60'>
          We offer a suite of tools and solutions to get you and your
          organization started with self sovereign identity and verified
          credentials.
        </h4>
        <div className='flex flex-wrap justify-center gap-12 lg:gap-32 mt-14 md:mt-20 mb-10'>
          <span className='text-xl md:text-xxl text-white font-semibold'>
            Token Events
          </span>
          <span className='text-xl md:text-xxl text-white font-semibold'>
            Validata
          </span>
          <span className='text-xl md:text-xxl text-white font-semibold'>
            JennyCo
          </span>
          <span className='text-xl md:text-xxl text-white font-semibold'>
            Steadynamic
          </span>
        </div>
      </div>
    </section>
  );
};
