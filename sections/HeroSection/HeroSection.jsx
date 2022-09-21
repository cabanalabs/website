import Image from 'next/image';
import { useRouter } from 'next/router';
import { scroller } from 'react-scroll';

import heroBg from '../../public/images/hero_bg.jpg';

export const HeroSection = () => {
  const onLearnMoreClickHandler = () => {
    scroller.scrollTo('forOrg', {
      offset: -100,
    });
  };

  const router = useRouter();

  const onBookClickHandler = () => {
    router.push('/contact');
  };

  return (
    <section className='relative overflow-hidden'>
      <div className='py-20 lg:py-40 flex justify-center items-center section-content'>
        <div className='bg-white opacity-95 p-10 md:p-20 rounded-2xl drop-shadow-regular z-10'>
          <h1 className='text-2xl md:text-4xl font-medium'>
            One person, one account,
            <br />
            <span className='text-cabanaBlue font-medium'>
              infinite possibilities.
            </span>
          </h1>
          <div className='my-12 md:my-14'>
            <span className='text-lg md:text-xl font-medium text-corduroy'>
              Cabana provides digital identity solutions that mutually benefit
              organizations and consumers. Our products reduce costs and improve
              trust for businesses by giving individuals ownership and control
              over their data.
            </span>
          </div>
          <div className='flex gap-4'>
            <button
              onClick={onLearnMoreClickHandler}
              className='button-filled-sm md:button-filled-lg'
            >
              Learn more
            </button>
            <button
              onClick={onBookClickHandler}
              className='button-outlined-sm md:button-outlined-lg'
            >
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
