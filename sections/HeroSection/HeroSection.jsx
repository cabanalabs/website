import Image from "next/image";

import { Button, ScrollIndicator } from "../../components";

export const HeroSection = () => {
  return (
    <section className="section relative xl:pb-24">
      <div className="max-w-[482px] flex flex-col gap-8">
        <h1 className="text-3xl lg:text-4xl font-black text-athensGray">What is your digital identity worth?</h1>
        <p className="text-sm md:text-lg text-athensGray font-bold">
          Cabana ID empowers individuals by giving them full control over their personal data and identity, allowing
          them to create, share and monetize profiles based on their reputation, influence, professional experience,
          network, and digital assets.
        </p>
        <div>
          <Button>Create CabanaID</Button>
        </div>
      </div>
      <div className="hidden xl:block">
        <div className="absolute bottom-0 right-24 -z-10">
          <Image src="/images/hero-1.png" alt="Hero 1" width={754} height={754} />
        </div>
        <div className="absolute top-28 right-[660px] -z-20">
          <Image src="/images/hero-1.png" alt="Hero 2" width={246} height={246} />
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
