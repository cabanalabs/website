import Image from 'next/image';

import partnerships from '../../public/images/partnerships.png';

import validataLogo from '../../public/images/validata.png';
import steadynamic from '../../public/images/steadynamic.svg';
import tokenLogo from '../../public/images/token_logo.png';

export const PartnetshipsSection = () => {
  return (
    <section className='bg-partnerships'>
      <div className='section-content pt-12 pb-12 lg:py-32 flex flex-col justify-between items-center h-full'>
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
        <h4 className='text-lg md:text-xl text-white font-normal text-center px-6 md:px-52'>
          Cabana has partnered with a number of innovative organizations that
          are revolutionizing the way we manage and control our identity and
          data online.
        </h4>
        <div className='flex flex-wrap justify-center items-center gap-8 mt-12 md:mt-24 md:gap-20'>
          <div className='w-[170px] h-[31px] md:w-[242px] md:h-[44px]'>
            <Image
              layout='responsive'
              src={validataLogo}
              alt='Validata logo'
              quality={100}
            />
          </div>
          <div className='w-[244px] h-[33px] md:w-[348px] md:h-[47px]'>
            <Image
              layout='responsive'
              src={steadynamic}
              alt='Steadynamic logo'
              quality={100}
            />
          </div>
          <div className='w-[120px] h-[51px] md:w-[172px] md:h-[73px] -translate-y-8 md:-translate-y-3'>
            <Image
              layout='responsive'
              src={tokenLogo}
              alt='Banner'
              quality={100}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
