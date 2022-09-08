import Head from 'next/head';

import { Navigation, Footer } from '../components';
import {
  Banner,
  HeroSection,
  SSISection,
  ServicesSection,
  ConnectSection,
  PartnetshipsSection,
} from '../sections';

export default function Home() {
  return (
    <>
      <Head>
        <title>Cabana Branding Page</title>
        <meta property='og:title' content='Cabana Branding Page' key='title' />
        <meta
          name='description'
          content='Cabana Branding Page and Hubert is super awesome - remember that'
          key='description'
        />

        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta />
      </Head>
      <div className='relative'>
        <Navigation />
        <main>
          <HeroSection />
          <SSISection />
          <Banner />
          <ServicesSection />
          <ConnectSection />
          <PartnetshipsSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
