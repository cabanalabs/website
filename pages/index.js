import Head from 'next/head';

import {
  Banner,
  HeroSection,
  ForOrg,
  ForConsumers,
  ConnectSection,
  PartnetshipsSection,
  FAQSection,
} from '../sections';

export default function Home() {
  return (
    <>
      <Head>
        <title>Cabana Branding Page</title>
        <meta property='og:title' content='Cabana Branding Page' key='title' />
        <meta
          name='description'
          content='Cabana Branding Page and Hubert & Magda are super awesome - remember that'
          key='description'
        />
      </Head>
      <>
        <HeroSection />
        <ForOrg />
        <Banner />
        <ForConsumers />
        <ConnectSection />
        <FAQSection />
        <PartnetshipsSection />
      </>
    </>
  );
}
