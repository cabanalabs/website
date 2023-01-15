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
        {/*<div>*/}
        {/*  <div className="bg-porcelain mt-[4px] h-4 w-full z-21"></div>*/}
        {/*</div>*/}
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
