import Head from "next/head";

import { AppFeature, HeroSection, HowItWorks, Team, WhyItMatters } from "../sections";

import { appFeaturesData } from "../sections/AppFeature/appFeaturesData";

export default function Home() {
  return (
    <>
      <Head>
        <title>Cabana Labs</title>
        <meta
          name="description"
          content="Boost utility in your project with Cabana Labs digital identity solutions for Web3. Offer your members decentralized profiles, membership credentials and engagement badges"
        />
        <meta property="og:title" content="Cabana Labs" />
        <meta
          property="og:description"
          content="Boost utility in your project with Cabana Labs digital identity solutions for Web3. Offer your members decentralized profiles, membership credentials and engagement badges"
        />
        <meta property="og:image" content="https://cabanalabs.com/images/hero_bg_47331_sm.png" />
        <meta
          property="og:image:alt"
          content="An image featuring two mobile phones at different angles showing different screens of the Cabana identity app."
        />
        <meta property="og:image:width" content="360" />
        <meta property="og:image:height" content="300" />
      </Head>
      <>
        <HeroSection />
        <HowItWorks />
        {appFeaturesData.map((appFeature, index) => (
          <AppFeature
            key={index}
            imageDark={appFeature.imageDark}
            imageLight={appFeature.imageLight}
            title={appFeature.title}
            description={appFeature.description}
            isReversed={appFeature.isReversed}
            greenTitle={appFeature.greenTitle}
          />
        ))}
        <WhyItMatters />
        <Team />
      </>
    </>
  );
}
