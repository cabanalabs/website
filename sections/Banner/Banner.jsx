import Image from 'next/image';

import bannerImage from '../../public/images/banner.png';
export const Banner = () => {
  return (
    <section className='max-w-[1140px] mx-auto px-6 xl:px-0'>
      <div className='bg-banner rounded-2xl drop-shadow-regular flex flex-col-reverse md:flex-row justify-center items-center h-full w-full py-20'>
        <div className='px-16 lg:pl-48 lg:pr-24 space-y-10'>
          <h3 className='text-white text-left font-medium text-xxl md:text-3xl'>
            Security is hard.
            <br />
            Cabana makes it easy.
          </h3>
          <span className='text-xl text-white block'>
            Discover how self-sovereign identity and verified credentials can
            securely transform your organization and increase consumer
            engagement and conversion today.
          </span>
          <button className='button-outlined-sm-white md:button-outlined-lg-white'>
            Book a demo
          </button>
        </div>
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
