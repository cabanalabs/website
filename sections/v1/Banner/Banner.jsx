import Image from 'next/image';
import { useRouter } from 'next/router';

import bannerImage from '../../../public/images/banner.png';

export const Banner = () => {
  const router = useRouter();

  const onBookClickHandler = () => {
    router.push('/contact');
  };

  return (
    <section className='max-w-[1140px] mx-auto px-6 xl:px-0'>
      <div className='bg-banner rounded-2xl drop-shadow-regular flex flex-col-reverse lg:flex-row justify-center items-center h-full w-full pt-20 pb-10 md:py-20'>
        <div className='px-16 lg:pl-48 lg:pr-24 space-y-10'>
          <h3 className='text-white text-left font-medium text-xl md:text-3xl md:whitespace-nowrap'>
            Securing crypto is hard
            <br />
            Cabana makes it easy
          </h3>
          <span className='text-lg md:text-xl text-white block'>
            Discover how to provide frictionless onboarding to your customers
            that increase customer engagement and conversions. No complicated
            seed phrases or private key exports. A multi-party computation
            service securely streamlines wallet transactions.
            <br />
            <br />
            Ask us about our gas subsidy program and offer your customers
            feeless transactions.
          </span>
          <button
            onClick={onBookClickHandler}
            className='block lg:hidden button-outlined-sm-white md:button-outlined-lg-white'
          >
            Book a demo
          </button>
        </div>
        <div className='shrink-0 w-[180px] h-[180px] md:w-[280px] md:h-[280px] lg:-translate-x-20 -translate-y-14 relative'>
          <Image
            layout='responsive'
            src={bannerImage}
            alt='Banner'
            quality={100}
          />
          <button
            onClick={onBookClickHandler}
            className='hidden lg:block button-outlined-sm-white md:button-outlined-lg-white absolute -bottom-28 left-1/2 -translate-x-1/2 min-w-max'
          >
            Book a demo
          </button>
        </div>
      </div>
    </section>
  );
};
