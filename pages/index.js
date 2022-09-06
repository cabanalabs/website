import Head from 'next/head';

import { Navigation, Footer } from '../components';
import { HeroSection } from '../sections';

export default function Home() {
  return (
    <>
      <Head>
        <title>Cabana Branding Page</title>
        <meta property='og:title' content='Cabana Branding Page' key='title' />
        <meta
          name='description'
          content='Cabana Branding Page'
          key='description'
        />

        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta />
      </Head>
      <div className='relative max-w-[1200px] m-auto'>
        <Navigation />
        <main>
          <HeroSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
