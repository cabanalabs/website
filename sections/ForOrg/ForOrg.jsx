import { SectionCard, SectionItem } from '../../components';

import forOrg from '../../public/images/forOrg.png';
import { forOrgData } from './forOrgData';
import {scroller} from "react-scroll";

export const ForOrg = () => {

  const onLearnMoreClickHandler = () => {
    scroller.scrollTo('forConsumer', {
      offset: -100,
    });
  };

  return (
    <section className='section' id='forOrg'>
      <div className='section-content ml-10'>
        <div className="flex flex-col lg:flex-row space-x-none space-y-none lg:space-y-20 lg:space-x-16 ">
          <div>
            <div className="uppercase font-bold text-xl lg:text-lg2 text-second600 ">
              limit risk, easier onboarding  <span className="-tracking-4" >——</span>
            </div>
            <div className="text-3xl font-bold max-w-3xl py-6">
              Cabana for organizations
            </div>
            <div className="text-lg2 text-corduroy font-medium max-w-5xl lg:max-w-xl py-4">
              Cabana provides organizations with the tools needed to create a better, safer, and more productive digital environment for Web 2.0 and Web3. Our Self-Sovereign Identity (SSI) products uniquely benefit organizations by allowing users to own their data and control how their personal information is shared and used.
            </div>
            <div className='pt-32 flex gap-4 hidden lg:block'>
              <button
                onClick={onLearnMoreClickHandler}
                className='button-outlined-sm md:button-outlined-lg'>
                Learn more
              </button>
            </div>
          </div>
          <div className='flex flex-row flex-wrap mt-8'>
            {forOrgData.map((data, index) => (
              <SectionItem
                key={data.title}
                // reversed={(index + 1) % 2}
                index={index}
                image={data.image}
                title={data.title}
                description={data.description}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
