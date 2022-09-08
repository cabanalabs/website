import Image from 'next/image';
import { useId } from 'react';

import cabanaLabsLogo from '../../public/images/cabana_labs_logo.png';
import twitterLogo from '../../public/icons/twitter.png';
import linkedinLogo from '../../public/icons/linkedin.png';
import dotsLogo from '../../public/icons/dots.png';
import githubLogo from '../../public/icons/github.png';
import telegramLogo from '../../public/icons/telegram.png';

import { footerData } from './footerData';

export const Footer = () => {
  const id = useId();
  return (
    <footer className='bg-porcelain mt-20 section'>
      <span className='lg:hidden text-xl ml-20'>
        Footer in progress for mobile
      </span>
      <div className='hidden lg:flex justify-between pt-10 px-14 pb-4 text-lg'>
        <div className='flex flex-col'>
          <div className='flex gap-20'>
            {footerData.map(data => (
              <div key={data.category}>
                <span className='text-lg text-cabanaBlue font-bold'>
                  {data.category}
                </span>
                <ul className='space-y-8 mt-8'>
                  {data.items.map((item, index) => (
                    <li
                      key={item.label + id + index}
                      className='text-sm text-corduroy font-medium'
                    >
                      {item.label}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className='flex items-center gap-10 mt-auto -translate-x-6'>
            <div>
              <Image
                alt='Cabana Labs Logo'
                width={78}
                height={36}
                src={cabanaLabsLogo}
                quality={100}
              />
            </div>
            <span className='text-sm text-corduroy font-medium'>
              Copyright © Cabana Labs 2022
            </span>
            <span className='text-sm text-cabanaBlue font-medium'>
              Privacy Policy
            </span>
          </div>
        </div>
        <div className='max-w-md flex flex-col'>
          <div className='flex flex-col px-4 gap-4'>
            <span className='text-lg text-cabanaBlue font-bold'>
              Stay Informed
            </span>
            <span className='text-sm text-corduroy font-medium'>
              Sign up for our Newsletter to stay up-to-date on Cabana Labs
              progress.
            </span>
            <input
              className='border-dashed border-[1px] rounded-xl p-4 text-sm font-bold text-corduroy outline-none border-cabanaBlue placeholder-corduroy mt-10'
              type='email'
              placeholder='Enter your Email'
            />
            <button className='button-filled-xs w-max mt-2'>Sign up</button>
          </div>
          <div className='mt-auto pt-24'>
            <ul className='flex justify-between'>
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
              <li>
                <Image
                  width={30}
                  height={17}
                  src={dotsLogo}
                  alt='Dots icon'
                  quality={100}
                />
              </li>
              <li>
                <Image
                  width={24}
                  height={24}
                  src={githubLogo}
                  alt='Github icon'
                  quality={100}
                />
              </li>
              <li>
                <Image
                  width={25}
                  height={22}
                  src={telegramLogo}
                  alt='Telegram icon'
                  quality={100}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
