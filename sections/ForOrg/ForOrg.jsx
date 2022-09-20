import { SectionCard, SectionItem } from '../../components';

import forOrg from '../../public/images/forOrg.png';
import { forOrgData } from './forOrgData';

export const ForOrg = () => {
  return (
    <section className='section' id='forOrg'>
      <div className='section-content'>
        <SectionCard
          image={forOrg}
          title='Cabana For Organizations'
          description='Cabana provides organizations with the tools needed to create a better, safer, and more productive digital environment for Web 2.0 and Web3. Our Self-Sovereign Identity (SSI) products uniquely benefit organizations by allowing users to own their data and control how their personal information is shared and used.'
        />
        <div className='space-y-14 md:space-y-20 mt-20'>
          {forOrgData.map((data, index) => (
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
