import Image from 'next/image';
import Link from 'next/link';
import { useId } from 'react';

import cabanaLabsLogo from '../../public/images/cabana_logo.svg';
import twitterLogo from '../../public/icons/twitter.png';
import linkedinLogo from '../../public/icons/linkedin.png';

import { footerData } from './footerData';

export const Footer = () => {
  const id = useId();

  return (
    <footer className='bg-white'>
      <section className='section mb-0 mt-0 pb-10'>
        <div className='flex flex-col gap-10 md:flex-row justify-between px-6 lg:pt-10 lg:px-14 pb-4 text-lg'>
          <div className='flex flex-col flex-1 lg:flex-initial'>
            <div className='flex flex-col gap-6 items-center md:items-start mb-8 md:mb-0 lg:justify-start'>
              {footerData.map(data => (
                <ul key={data.category}>
                  <li>
                    <Link href={data.to}>
                      <a className='text-base md:text-lg text-cabanaBlue font-bold'>
                        {data.category}
                      </a>
                    </Link>
                  </li>
                </ul>
              ))}
            </div>
            <div className='flex items-center justify-center md:justify-start gap-4 lg:gap-10 mt-auto lg:-translate-x-6'>
              <div className='hidden md:block'>
                <Image
                  alt='Cabana Labs Logo'
                  width={78}
                  height={36}
                  src={cabanaLabsLogo}
                  quality={100}
                />
              </div>
              <span className='text-xs md:text-sm text-corduroy font-medium'>
                Copyright © Cabana Labs 2022
              </span>
              <span className='text-xs md:text-sm text-cabanaBlue font-medium'>
                Privacy Policy
              </span>
            </div>
          </div>
          <div className='max-w-md flex flex-col mx-auto md:mx-0'>
            <div className='flex flex-col px-4 gap-4'>
              <span className='text-lg text-cabanaBlue font-bold'>
                Stay Informed
              </span>
              <span className='text-sm text-corduroy font-medium'>
                Sign up for our Newsletter to stay up-to-date on Cabana Labs
                progress.
              </span>
              <input
                className='border-dashed border-[1px] border-cabanaBlue rounded-xl p-4 text-sm font-bold text-corduroy outline-none placeholder-corduroy mt-10'
                type='email'
                placeholder='Enter your Email'
              />
              <button className='button-filled-xs w-max mt-2'>Sign up</button>
            </div>
            <div className='mt-auto pt-12 md:ml-auto md:pt-24'>
              <ul className='flex gap-12'>
                <li>
                  <Image
                    width={26}
                    height={22}
                    src={twitterLogo}
                    alt='Twitter icon'
                    quality={100}
                  />
                </li>
                <li>
                  <Image
                    width={24}
                    height={24}
                    src={linkedinLogo}
                    alt='LinkedIn icon'
                    quality={100}
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};
