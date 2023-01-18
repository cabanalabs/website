import Image from 'next/image';
import { useRouter } from 'next/router';

import bannerImage from '../../public/images/banner.png';

export const Banner = () => {
  const router = useRouter();

  const onBookClickHandler = () => {
    router.push('/contact');
  };

  return (
    <section className='section max-w-[1900px] pr-10 pl-10 lg:pl-0'>
      <div className='bg-cabanaBlue3 rounded-2xl drop-shadow-regular flex flex-col-reverse lg:flex-row justify-center items-center w-full p-10 max-h-[600px] overflow-clip'>
        <div className='hidden lg:block top-[130px] -left-[310px] relative drop-shadow-glow'>
          <Image
            width={1850}
            height={1850}

            src={bannerImage}
            alt='Banner'
            quality={100}
          />
        </div>
        <div className='lg:pr-24 lg:-ml-96 xl:-ml-80'>
          <h3 className='text-white text-left font-bold text-xl md:text-2xl lg:text-3xl xl:text-5xl md:whitespace-nowrap my-10'>
            Security is hard.
            <br />
            Cabana makes it easy.
          </h3>
          <span className='text-lg md:text-xl text-white block'>
            No complicated seed phrases and the need to export private keys. A multi-party computation
            service securely streamlines wallet transactions.
            Discover how to provide frictionless onboarding to your customers
            that increase customer engagement and conversions.
            <br />
            <br />
            Ask us how to offer your customers
            feeless transactions.
          </span>
          <button
            onClick={onBookClickHandler}
            className='button-filled-sm md:button-filled-lg mt-20'>
            Book a demo
          </button>
        </div>

      </div>
    </section>
  );
};
