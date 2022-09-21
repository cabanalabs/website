import { SectionCard, SectionItem } from '../../components';

import forConsumersImage from '../../public/images/forConsumers.png';

import { forConsumersData } from './forConsumersData';

export const ForConsumers = () => {
  return (
    <section className='section'>
      <div className='section-content'>
        <SectionCard
          image={forConsumersImage}
          title='Cabana for consumers'
          description='Cabana gives consumers full control over their online personal data and digital privacy, improving security and reducing the time spent verifying their identity online.'
        />
        <div className='space-y-14 md:space-y-20 mt-20'>
          {forConsumersData.map((data, index) => (
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
