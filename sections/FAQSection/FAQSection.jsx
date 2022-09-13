import { useState } from 'react';
import { FAQItem } from '../../components';

export const FAQSection = () => {
  const [expanded, setExpanded] = useState(null);
  const accordionIds = [0, 1, 2, 3, 4, 5];

  return (
    <section className='section' id='faq'>
      <div className='section-content'>
        <h3 className='text-xxl md:text-3xl font-bold text-center md:font-medium'>
          Frequently asked questions
        </h3>
        <div className='mt-20 flex flex-col gap-10'>
          {accordionIds.map(i => (
            <FAQItem
              key={i}
              i={i}
              expanded={expanded}
              setExpanded={setExpanded}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
