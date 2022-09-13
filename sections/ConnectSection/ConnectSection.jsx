import Image from 'next/image';

import cabanaLabs from '../../public/images/cabana_logo_labs.svg';
import twitterLogo from '../../public/icons/twitter_white.png';
import linkedinLogo from '../../public/icons/linkedin_white.png';
import dotsLogo from '../../public/icons/dots_white.png';
import githubLogo from '../../public/icons/github_white.png';
import telegramLogo from '../../public/icons/telegram_white.png';

export const ConnectSection = () => {
  return (
    <section
      className='section m-h-[468px] bg-[#00649C] md:rounded-r-full'
      id='connect'
    >
      <div className='section-content py-20 relative h-full flex flex-col-reverse md:flex-row justify-between items-center'>
        <div className='space-y-14'>
          <h3 className='text-xl md:text-2xl text-white font-medium'>
            We would love to talk …
          </h3>
          <h4 className='text-lg md:text-xl text-white font-normal'>
            If you would like to learn more about Verified Credentials, Self
            Sovereign Identity and how this can help your organization feel free
            to reach out and say hello.
          </h4>
          <ul className='flex gap-16 items-center'>
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
        <div className='h-[128px] w-[276px] shrink-0 mb-20 md:mb-0 lg:translate-x-36'>
          <Image layout='responsive' src={cabanaLabs} alt='hello motto' />
        </div>
      </div>
    </section>
  );
};
