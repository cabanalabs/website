import Image from 'next/image';
import { useRouter } from 'next/router';
import { scroller } from 'react-scroll';

import heroBg from '../../public/images/hero_bg_47331.jpg';
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
    <section className='section relative'>
      <div className='flex section-content  ml-10'>
        <div className='pt-[2rem] lg:pt-[14rem] rounded-2xl z-10 min-h-[58rem] lg:min-h-[98rem] md:min-w-[60rem]'>
          <div className="uppercase font-bold text-xl text-cabanaBlue2">
            What we do  <span className="-tracking-4" >——————</span>
          </div>
          <div className="text-2xl md:text-4xl max-w-md md:max-w-3xl pt-10 pb-32 font-bold">
            Digital Identity for Web3
          </div>
          <div className="flex flex-col flex-grow-1 md:flex-row space-y-10 md:space-y-0 space-x-none md:space-x-10 text-xl md:text-lg text-corduroy font-medium">
            <div className="pr-10 md:border-dotted md:border-r-2 border-r-gray-300 mx-auto md:mx-0">
              <Image
                width={36}
                height={34}
                src={piggyIcon}
                alt='Twitter icon'
                quality={100}
              />
              <div className="py-4 max-w-[22rem] md:max-w-[18rem]">
                We are a consortium of web3 innovators. Our projects are funded by team members, strategic partners, grants and sponsorships.
              </div>
            </div>
            <div className="pr-10 md:border-dotted md:border-r-2 border-r-gray-300 mx-auto md:mx-0">

                <Image
                  width={48}
                  height={36}
                  src={boostIcon}
                  alt='Twitter icon'
                  quality={100}
                />

              <div className="py-4 max-w-[22rem] md:max-w-[19rem]">
                CabanaLabs <br/>boosts utility in web3 projects with its identity protocols. Your project members can leverage our user centric tools for building decentralized profiles and reputation.
              </div>
            </div>
            <div className="pb-8 mx-auto md:mx-0">
              <Image
                width={36}
                height={36}
                src={sparkleIcon}
                alt='Twitter icon'
                quality={100}
              />
              <div className="py-4 max-w-[22rem] md:max-w-[16rem]">
                We offer the <br/> latest web3 technologies with gated access controls, verifiable credentials and profit sharing data monetization.
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
        <div className="relative -ml-56 -mt-52 hidden lg:block">
          <div className='w-[120rem] h-[100rem]'>
            <Image
              layout='fill'
              src={heroBg}
              alt='Hero background'
              quality={100}
            />
          </div>
        </div>

      </div>

    </section>
  );
};
