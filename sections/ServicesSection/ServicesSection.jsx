import { SectionCard, SectionItem } from '../../components';

import servicesImage from '../../public/images/services.png';

import { servicesData } from './servicesData';

export const ServicesSection = () => {
  return (
    <section className='section' id='services'>
      <div className='section-content'>
        <SectionCard
          image={servicesImage}
          title='Our Services'
          description='We offer a suite of tools and solutions to get you started with self sovereign identity and verified credentials.'
        />
        <div className='space-y-14 md:space-y-20 mt-20'>
          {servicesData.map((data, index) => (
            <SectionItem
              key={data.title}
              reversed={index % 2}
              image={data.image}
              title={data.title}
              description={data.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
