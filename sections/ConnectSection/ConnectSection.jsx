import Image from 'next/image';

import cabanaLabs from '../../public/images/cabana_logo_labs.svg';
import twitterLogo from '../../public/icons/twitter.svg';
import linkedinLogo from '../../public/icons/linkedIn.svg';
import mailIcon from '../../public/icons/mail.svg';

export const ConnectSection = () => {
  return (
    <section className='m-h-[468px] bg-cabanaBlue2 md:rounded-r-full mb-0 md:mr-20'>
      <div className='section-content py-20 relative h-full flex flex-col-reverse lg:flex-row justify-between items-center'>
        <div className='space-y-14'>
          <h3 className='text-xl md:text-2xl text-white font-medium md:whitespace-nowrap'>
            What we can do for your organization
          </h3>
          <h4 className='text-lg md:text-xl text-white font-normal md:pr-32'>
            To learn more about digital identity solutions, contact our Cabana
            team through any of our social platforms below.
          </h4>
          <h4 className='text-lg md:text-xl text-white font-normal md:pr-32'>
            Book a demo to see how we can help your organization improve
            customer engagement and retention through our innovative digital
            identity products.
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
                width={24}
                height={24}
                src={mailIcon}
                alt='mail icon'
                quality={100}
              />
            </li>
          </ul>
        </div>
        <div className='h-[128px] w-[276px] shrink-0 mb-20 lg:mb-0 lg:translate-x-16'>
          <Image layout='responsive' src={cabanaLabs} alt='hello motto' />
        </div>
      </div>
    </section>
  );
};
