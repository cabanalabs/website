import Image from 'next/image';

import cabanaLabsLogo from '../../public/images/cabana_labs_logo.png';
import twitterLogo from '../../public/icons/twitter.png';
import linkedinLogo from '../../public/icons/linkedin.png';
import dotsLogo from '../../public/icons/dots.png';
import githubLogo from '../../public/icons/github.png';
import telegramLogo from '../../public/icons/telegram.png';

export const Footer = () => {
  return (
    <footer className='bg-[#EFF1F2] mt-20'>
      <span className='lg:hidden text-xl ml-20'>
        Footer in progress for mobile
      </span>
      <div className='hidden lg:flex justify-between pt-10 px-14 pb-4 text-lg'>
        <div className='flex flex-col'>
          <div className='flex gap-20'>
            <div>
              <span className='text-lg text-cabanaBlue font-bold'>About</span>
              <ul className='space-y-8 mt-8'>
                <li className='text-sm text-corduroy font-medium'>About</li>
                <li className='text-sm text-corduroy font-medium'>About</li>
                <li className='text-sm text-corduroy font-medium'>About</li>
              </ul>
            </div>
            <div>
              <span className='text-lg text-cabanaBlue font-bold'>
                Solutions
              </span>
              <ul className='space-y-8 mt-8'>
                <li className='text-sm text-corduroy font-medium'>Solutions</li>
                <li className='text-sm text-corduroy font-medium'>Solutions</li>
                <li className='text-sm text-corduroy font-medium'>Solutions</li>
              </ul>
            </div>
            <div>
              <span className='text-lg text-cabanaBlue font-bold'>Team</span>
              <ul className='space-y-8 mt-8'>
                <li className='text-sm text-corduroy font-medium'>Team</li>
                <li className='text-sm text-corduroy font-medium'>Team</li>
                <li className='text-sm text-corduroy font-medium'>Team</li>
              </ul>
            </div>
            <div>
              <span className='text-lg text-cabanaBlue font-bold'>Connect</span>
              <ul className='space-y-8 mt-8'>
                <li className='text-sm text-corduroy font-medium'>Connect</li>
                <li className='text-sm text-corduroy font-medium'>Connect</li>
                <li className='text-sm text-corduroy font-medium'>Connect</li>
              </ul>
            </div>
            <div>
              <span className='text-lg text-cabanaBlue font-bold'>
                Documentation
              </span>
              <ul className='space-y-8 mt-8'>
                <li className='text-sm text-corduroy font-medium'>
                  Documentation
                </li>
                <li className='text-sm text-corduroy font-medium'>
                  Documentation
                </li>
                <li className='text-sm text-corduroy font-medium'>
                  Documentation
                </li>
              </ul>
            </div>
          </div>
          <div className='flex items-center gap-10 mt-auto -translate-x-6'>
            <div>
              <Image
                alt='Cabana Labs Logo'
                width={78}
                height={36}
                src={cabanaLabsLogo}
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
            <button className='button-filled-sm w-max mt-2'>Sign up</button>
          </div>
          <div className='mt-auto pt-24'>
            <ul className='flex justify-between'>
              <li>
                <Image
                  width={26}
                  height={22}
                  src={twitterLogo}
                  alt='Twitter icon'
                />
              </li>
              <li>
                <Image
                  width={24}
                  height={24}
                  src={linkedinLogo}
                  alt='LinkedIn icon'
                />
              </li>
              <li>
                <Image width={30} height={17} src={dotsLogo} alt='Dots icon' />
              </li>
              <li>
                <Image
                  width={24}
                  height={24}
                  src={githubLogo}
                  alt='Github icon'
                />
              </li>
              <li>
                <Image
                  width={25}
                  height={22}
                  src={telegramLogo}
                  alt='Telegram icon'
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
