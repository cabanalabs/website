import { SectionCard, SectionItem } from '../../components';

import ssiImage from '../../public/images/ssi.png';
import { ssiData } from './ssidata';

export const SSISection = () => {
  return (
    <section className='section'>
      <div className='section-content'>
        <SectionCard
          image={ssiImage}
          title='Self Sovereign Identity (SSI)'
          description='We give individuals ownership and control over their data and develop
        products that incentivise both consumers and organizations to operate on
        a level playing field.'
        />
        <div className='space-y-14 md:space-y-20 mt-20'>
          {ssiData.map((data, index) => (
            <SectionItem
              key={data.title}
              reversed={(index + 1) % 2}
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
