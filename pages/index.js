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

import heroBg from '../public/images/hero_bg_47331.jpg';

export default function Home() {
  return (
    <>
      <Head>
        <title>Cabana Labs</title>
        <meta property='og:title' content='Cabana Labs'  />
        <meta property='og:description' content="Boost utility in your project with Cabana Labs' digital identity solutions for Web3. Offer your members decentralized profiles, membership credentials and engagement badges" />
        <meta property='og:image' content={heroBg}  />
        <meta property="og:image:alt" content="An image featuring two mobile phones at different angles showing different screens of the Cabana identity app." />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="1000" />
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
