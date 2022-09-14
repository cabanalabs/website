import Image from 'next/image';

import heroBg from '../../public/images/hero_bg.jpg';

export const HeroSection = () => {
  return (
    <section className='relative overflow-hidden' id='hero'>
      <div className='min-h-[500px] md:min-h-[717px] flex justify-center items-center section-content'>
        <div className='bg-white opacity-95 p-10 md:p-20 rounded-2xl drop-shadow-regular z-10'>
          <h1 className='text-2xl md:text-4xl font-medium'>
            Security is hard.
            <br />
            <span className='text-cabanaBlue font-medium'>Cabana</span> makes it
            easy.
          </h1>
          <div className='my-12 md:my-14'>
            <span className='text-lg md:text-xl font-medium text-corduroy'>
              We give individuals ownership and control over their data and
              develop products that incentivise both consumers and organizations
              to operate on a level playing field.
            </span>
          </div>
          <div className='flex gap-4'>
            <button className='button-filled-sm md:button-filled-lg'>
              Learn more
            </button>
            <button className='button-outlined-sm md:button-outlined-lg'>
              Book a demo
            </button>
          </div>
        </div>
      </div>
      <div className='absolute top-0 left-0 w-full h-full'>
        <Image
          layout='fill'
          objectFit='cover'
          src={heroBg}
          alt='Hero background'
          quality={100}
        />
      </div>
    </section>
  );
};
