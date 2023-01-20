import Image from 'next/image';
import { useRouter } from 'next/router';

import org2Image from '../../public/images/org2.png';
import twitterLogo from '../../public/icons/twitter.svg';
import linkedinLogo from '../../public/icons/linkedIn.svg';
import mailIcon from '../../public/icons/mail.svg';
import bannerImage from "../../public/images/banner.png";

export const ConnectSection = () => {
  const router = useRouter();


  const onBookClickHandler = () => {
    router.push('/contact');
  };

  return (
    <section className='section max-w-[1900px] px-6 sm:px-10' id='whatWeCanDoForYou'>
      <div className='bg-cabanaBlue3 rounded-2xl flex flex-col-reverse lg:flex-row justify-center items-center w-full p-6 sm:p-10 max-h-[640px] overflow-clip'>
        <div className='space-y-12 sm:space-y-24 sm:ml-10 md:ml-32 lg:ml-52 xl:ml-80'>
          <h3 className='text-xl md:text-2xl lg:text-3xl xl:text-5xl text-white font-extrabold'>
            What we can do for your organization
          </h3>
          <div>
            <h4 className='text-lg md:text-xl text-white font-normal lg:min-w-[660px] xl:min-w-[920px]'>
              Secure your identity assets and cryptocurrencies with the most advanced MPC security solutions and bring
              web3 connectivity into your organization.
            </h4>
            <h4 className='text-lg md:text-xl text-white font-normal mt-10'>
              Book a demo to see how we can help your organization improve
              customer engagement and retention through our innovative digital
              identity products.
            </h4>
          </div>

          <ul className='flex gap-8 sm:gap-16 items-center mb-8'>
            <li className="hidden md:block ">
              <button
                onClick={onBookClickHandler}
                className='button-filled-sm md:button-filled-lg'>
                Book a demo
              </button>
            </li>
            <li>
              <a
                href='https://twitter.com/cabana_labs'
                target='_blank'
                rel='noreferrer'
                title='Cabana Labs Twitter'
              >
                <Image
                  width={26}
                  height={22}
                  src={twitterLogo}
                  alt='Twitter icon'
                  quality={100}
                />
              </a>
            </li>
            <li>
              <a
                href='https://www.linkedin.com/company/81897790'
                target='_blank'
                rel='noreferrer'
                title='Cabana Labs LinkedIn'
              >
                <Image
                  width={24}
                  height={24}
                  src={linkedinLogo}
                  alt='LinkedIn icon'
                  quality={100}
                />
              </a>
            </li>
            <li
              onClick={onBookClickHandler}
              role='link'
              className='cursor-pointer'
            >
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
        <div className='hidden xl:block top-[100px] -right-[274px] relative drop-shadow-glow'>
          <Image
            width={1850}
            height={1850}

            src={org2Image}
            alt='Banner'
            quality={100}
          />
        </div>
      </div>

    </section>
  );
};
