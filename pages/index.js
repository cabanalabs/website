import Head from "next/head";

import { AppFeature, HeroSection, HowItWorks, Newsletter, Partnerships, Team, WhyItMatters } from "../sections";

import { appPillarsData } from "../sections/AppFeature/appPillarsData";
import {UseCases} from "../sections/UseCases/UseCases";

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
        {/*<HowItWorks />*/}
        <UseCases />
        {appPillarsData.map((appFeature, index) => (
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
        {/*<WhyItMatters />*/}
        <Team />
        <Partnerships />
        <Newsletter />
      </>
    </>
  );
}
