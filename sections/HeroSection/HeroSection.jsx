import Image from "next/image";
import Link from "next/link";

import { Button } from "../../components";
import {PageTitle, SectionBody} from "../../components/SectionTitle/SectionTitle";

export const HeroSection = () => {
  return (
    <section className="section relative">
      <div className="max-w-medium flex flex-col gap-8">
        <PageTitle className="max-w-[380px] xl:mt-36 xl:max-w-small">Create Trusted Web3 Identities</PageTitle>
        <SectionBody className="mt-6 mb-4 xl:pr-20 max-w-lg xl:max-w-2xl">
          Build stronger communities with Cabana Labs. Go beyond anonymous avatars and faceless interactions with a robust framework that unlocks value in your community.
        </SectionBody>
        <div>
          <Link href="/contact">
            <Button>Get started</Button>
          </Link>
        </div>
        <div className="absolute -top-2/4 -left-52 xl:-top-1/3 xl:-left-96 -z-20 scale-[2] lg:scale-[2.3] xl:scale-[3.6]">
          <Image src="/images/gradient-blob.svg" alt="Gradient blob" width={800} height={900} priority={true}/>
        </div>
      </div>
      <div className="hidden lg:block">
        <div className="absolute -z-10 top-12 -right-20 scale-50 xl:top-48 xl:right-4 xl:scale-100">
          <Image src="/images/hero-1.png" alt="Hero 1" width={654} height={654} />
        </div>
        <div className="absolute -z-20 top-12 right-[300px] scale-75 xl:top-0 xl:right-[500px] xl:scale-100">
          <Image src="/images/hero-2.png" alt="Hero 2" width={236} height={236} />
        </div>
        <div className="absolute top-32 -right-0 scale-75 xl:scale-100">
          <Image src="/images/hero-3.png" alt="Hero 3" width={150} height={136} />
        </div>
      </div>
      {/*<div className="absolute bottom-0 right-10 hidden md:block">*/}
      {/*  <ScrollIndicator />*/}
      {/*</div>*/}
    </section>
  );
};
