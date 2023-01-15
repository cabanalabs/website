import Image from 'next/image';
import { useRouter } from 'next/router';
import { scroller } from 'react-scroll';

import heroBg from '../../public/images/hero_banner_frame_1044563.jpg';
import piggyIcon from "../../public/icons/piggy.svg";
import boostIcon from "../../public/icons/boost.svg";
import sparkleIcon from "../../public/icons/sparkle.svg";

export const HeroSection = () => {
  const onLearnMoreClickHandler = () => {
    scroller.scrollTo('forOrg', {
      offset: -100,
    });
  };

  const router = useRouter();

  const onBookClickHandler = () => {
    router.push('/contact');
  };

  return (
    <section className='relative overflow-hidden'>
      <div className='pt-[24rem] lg:pt-[20rem] flex section-content'>
        <div className='p-10 md:p-20 rounded-2xl z-10 min-h-[98rem]'>
          <div className="uppercase font-bold text-xl text-cabanaBlue2">
            What we do  <span className="-tracking-4" >——————</span>
          </div>
          <div className="text-4xl font-bold max-w-3xl pt-10 pb-32">
            Digital Identity for Web3
          </div>
          <div className="flex flex-row space-x-10">
            <div className="pr-10 border-dotted border-r-2 border-r-gray-300">
              <Image
                width={36}
                height={34}
                src={piggyIcon}
                alt='Twitter icon'
                quality={100}
              />
              <div className="text-base md:text-lg text-corduroy font-medium max-w-[16rem] py-4">
                Funded by team members, strategic partners, grants and sponsorship
              </div>
            </div>
            <div className="pr-10 border-dotted border-r-2 border-r-gray-300">
              <Image
                width={48}
                height={36}
                src={boostIcon}
                alt='Twitter icon'
                quality={100}
              />
              <div className="text-base md:text-lg text-corduroy font-medium max-w-[18rem] py-4">
                Boost utility in your projects with our identity protocols. Leverage user centric tools for building decentralized profiles and on-chain reputation
              </div>
            </div>
            <div className="pb-8">
              <Image
                width={36}
                height={36}
                src={sparkleIcon}
                alt='Twitter icon'
                quality={100}
              />
              <div className="text-base md:text-lg text-corduroy font-medium max-w-[18rem] py-4">
                Get the latest web3 technology with gated access controls, verifiable credentials and profit sharing data monetization
              </div>
            </div>
          </div>
          <div className='pt-32 flex gap-4'>
            <button
              onClick={onLearnMoreClickHandler}
              className='button-outlined-sm md:button-outlined-lg'>
              Learn more
            </button>
            <button
              onClick={onBookClickHandler}
              className='button-filled-sm md:button-filled-lg'>
              Book a demo
            </button>
          </div>
        </div>
      </div>
      <div className='absolute top-0 left-0 w-full h-full'>
        <Image
          layout='fill'
          objectFit='cover'
          src={heroBg}
          alt='Hero background'
          quality={100}
        />
      </div>
    </section>
  );
};
