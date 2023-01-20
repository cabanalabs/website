import { SectionCard, SectionItem } from '../../components';

import forConsumersImage from '../../public/images/forConsumers.png';

import { forConsumersData } from './forConsumersData';
import {scroller} from "react-scroll";
import Image from "next/image";
import consumerImage from "../../public/images/consumer_doug.png";

export const ForConsumers = () => {

  const onLearnMoreClickHandler = () => {
    scroller.scrollTo('whatWeCanDoForYou', {
      offset: -100,
    });
  };

  return (
    <section className='section max-w-[150rem]' id='forConsumer'>
      <div>
        <div className="flex flex-row space-x-20  ml-10 justify-center">
          <div>
            <div className="uppercase font-bold text-xl text-cabanaRazz">
              control your own identity  <span className="-tracking-4" >———</span>
            </div>
            <div className="text-4xl font-bold max-w-3xl pt-8 pb-16">
              Cabana for consumers
            </div>
            <div className="text-xl sm:text-lg2 text-corduroy font-medium max-w-3xl sm:py-4">
              Cabana gives consumers full control over their online personal data and digital privacy, improving security and reducing the time spent verifying their identity online.
            </div>
            <div className='pt-20 flex gap-4'>
              <button
                onClick={onLearnMoreClickHandler}
                className='button-outlined-sm md:button-outlined-lg'>
                Learn more
              </button>
            </div>
        </div>
        <div className="pr-20">
          <Image
            src={consumerImage}
            alt='Consumer'
            quality={100}
          />
        </div>
      </div>
        <div className='flex flex-row flex-wrap mt-10 justify-center'>
          {forConsumersData.map((data, index) => (
            <SectionItem
              key={data.title}
              size='small'
              image={data.image}
              title={data.title}
              description={data.description}
              isLast={index === forConsumersData.length-1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
