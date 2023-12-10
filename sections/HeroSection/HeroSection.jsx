import Image from "next/image";

import { Button, ScrollIndicator } from "../../components";

export const HeroSection = () => {
  return (
    <section className="section relative xl:pb-24">
      <div className="max-w-[512px] flex flex-col gap-8">
        <h1 className="text-3xl lg:text-4xl font-black text-athensGray mt-40">Protect your community</h1>
        <p className="text-sm md:text-lg lg:text-xl text-athensGray font-bold mt-16 ">
          Cabana Identity is a decentralized identification service that fosters community trust and security by ensuring individuals are authentic, unique, and legitimate.
        </p>
        <div>
          <Button>Get started</Button>
        </div>
        <div className="absolute -top-40 lg:-top-22 xl:-top-12 -left-96 -z-20 scale-[2] lg:scale-[3.3] xl:scale-[3.7]">
          <Image src="/images/gradient-blob.svg" alt="Gradient blob" width={800} height={900} />
        </div>
      </div>
      <div className="hidden xl:block">
        <div className="absolute top-72 right-24 -z-10">
          <Image src="/images/hero-1.png" alt="Hero 1" width={754} height={754} />
        </div>
        <div className="absolute top-28 right-[660px] -z-20">
          <Image src="/images/hero-2.png" alt="Hero 2" width={246} height={246} />
        </div>
        <div className="absolute top-16 right-4">
          <Image src="/images/hero-3.png" alt="Hero 3" width={150} height={136} />
        </div>
      </div>
      <div className="absolute bottom-0 right-10 hidden md:block">
        <ScrollIndicator />
      </div>
    </section>
  );
};
