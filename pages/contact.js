import Head from 'next/head';
import Image from 'next/image';

import { ContactFormSection } from '../sections';

import crownImage from '../public/images/forConsumers.png';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Cabana Labs - Contact</title>
        <meta property='og:title' content='Cabana Labs - contact' key='title' />
        <meta
          name='description'
          content='Cabana Labs - contact'
          key='description'
        />
      </Head>
      <section className='section'>
        <div className='section-content max-w-[866px] '>
          <div className='bg-black mx-auto shadow-regular flex flex-col items-center rounded-2xl py-10 px-10 md:pt-20 md:pb-20 md:px-24'>
            <div className='mb-10 md:mb-16 w-[170px] h-[170px] md:w-[260px] md:h-[260px]'>
              <Image
                layout='responsive'
                src={crownImage}
                alt='Cabana Labs logo'
              />
            </div>
            <h1 className='text-xl text-center font-bold md:text-3xl md:font-medium mb-6 md:mb-8'>
              How can we help?
            </h1>
            <h2 className='text-corduroy text-lg md:text-xl font-medium text-center'>
              hello@cabanalabs.com
            </h2>
          </div>
          <ContactFormSection />
        </div>
      </section>
    </>
  );
}