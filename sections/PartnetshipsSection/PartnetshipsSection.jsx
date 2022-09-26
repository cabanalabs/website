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
          <div className=''>
            <Image
              src={validataLogo}
              width={242}
              height={44}
              alt='Validata logo'
              quality={100}
            />
          </div>
          <div className=''>
            <Image
              src={steadynamic}
              width={348}
              height={47}
              alt='Steadynamic logo'
              quality={100}
            />
          </div>
          <div className='-translate-y-3'>
            <Image
              src={tokenLogo}
              width={172}
              height={73}
              alt='Banner'
              quality={100}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
