import Head from 'next/head';
import Image from 'next/image';

import { StaffSection } from '../sections';

import cabanaLabsLogo from '../public/images/cabana_logo.svg';

export default function About() {
  return (
    <>
      <Head>
        <title>Cabana Branding Page - About</title>
        <meta
          property='og:title'
          content='Cabana Branding Page - about'
          key='title'
        />
        <meta
          name='description'
          content='Cabana Branding Page and Hubert & Magda are super awesome - remember that'
          key='description'
        />
      </Head>
      <section className='section'>
        <div className=''>
          <div className='bg-white max-w-[866px] mx-auto shadow-regular flex flex-col items-center rounded-2xl py-10 px-10 md:pt-20 md:pb-20 md:px-24'>
            <div className='mb-10 md:mb-16 w-[176px] h-[81px] md:w-[252px] md:h-[116px]'>
              <Image
                layout='responsive'
                src={cabanaLabsLogo}
                alt='Cabana Labs logo'
              />
            </div>
            <h2 className='text-corduroy text-lg md:text-xl font-medium text-center'>
              Cabana provides organizations with the tools needed to create a
              better, safer, and more productive digital environment for Web 2.0
              and Web3. Our Self-Sovereign Identity (SSI) products uniquely
              benefit organizations by allowing users to own their data and
              control how their personal information is shared and used.
            </h2>
          </div>
          <StaffSection />
        </div>
      </section>
    </>
  );
}
