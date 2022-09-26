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
        <title>Cabana Labs</title>
        <meta property='og:title' content='Cabana Labs' key='title' />
        <meta name='description' content='Cabana Labs' key='description' />
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
