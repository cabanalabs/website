import Head from "next/head";

import {
  Banner,
  HeroSection,
  ForOrg,
  ForConsumers,
  ConnectSection,
  PartnetshipsSection,
  FAQSection,
} from "../sections";

import heroBg from "../public/images/hero_bg_47331.jpg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Cabana Labs</title>
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
        <h1 className="text-9xl">new page</h1>
      </>
    </>
  );
}
