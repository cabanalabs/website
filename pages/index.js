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
          content="Build stronger communities with Cabana Labs. Go beyond anonymous avatars and faceless interactions with a robust framework. Offer members decentralized profiles, membership credentials and engagement badges."
        />
        <meta property="og:title" content="Cabana Labs" />
        <meta
          property="og:description"
          content="Build stronger communities with Cabana Labs. Go beyond anonymous avatars and faceless interactions with a robust framework. Offer members decentralized profiles, membership credentials and engagement badges."
        />
        <meta property="og:image" content="https://cabanalabs.com/images/hero_bg_v3.jpg" />
        <meta
          property="og:image:alt"
          content="An image featuring three digital identities each has a person avatar image and profile score."
        />
        <meta property="og:image:width" content="1686" />
        <meta property="og:image:height" content="960" />
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
