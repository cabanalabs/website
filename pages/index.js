import Head from "next/head";

import { HeroSection, Newsletter, Partnerships, Team } from "../sections";
import {TrustScores} from "../sections/TrustScores/TrustScores";
import {IdentityBuilding} from "../sections/IdentityBuilding/IdentityBuilding";
import {SDK} from "../sections/SDK/SDK";
import {OpenStandards} from "../sections/OpenStandards/OpenStandards";

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
        {/*<BuildTogether />*/}
        <TrustScores />
        <IdentityBuilding />
        <SDK />
        {/*<Products />*/}
        {/*<ThreePillars />*/}
        {/*<WhyItMatters />*/}
        <Team />
        <Partnerships />
        <OpenStandards />
        {/*<Newsletter />*/}
      </>
    </>
  );
}
