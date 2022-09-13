import Image from 'next/image';

import bannerImage from '../../public/images/banner.png';
export const Banner = () => {
  return (
    <section className='h-[420px] max-w-[1140px] mx-auto px-6 xl:px-0'>
      <div className='bg-banner rounded-2xl drop-shadow-regular flex flex-col-reverse md:flex-row justify-center items-center h-full w-full'>
        <h3 className='text-white text-center font-medium text-xxl md:text-3xl px-16 lg:pl-48 lg:pr-32'>
          Cabana secures your online organization.
        </h3>
        <div className='shrink-0 w-[200px] h-[200px] md:w-[280px] md:h-[280px] lg:mr-32'>
          <Image
            layout='responsive'
            src={bannerImage}
            alt='Banner'
            quality={100}
          />
        </div>
      </div>
    </section>
  );
};
