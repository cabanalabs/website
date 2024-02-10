import Image from "next/image";
import Link from "next/link";

import { Button } from "../../components";
import {SectionBody} from "../../components/SectionTitle/SectionTitle";

export const HeroSection = () => {
  return (
    <section className="section relative">
      <div className="max-w-medium flex flex-col gap-8">
        <h1 className="text-3xl lg:text-4xl font-extrabold text-white mt-36 -tracking-4">Create Trusted Web3 Identities</h1>
        <SectionBody className="mt-6 mb-4">
          Build stronger communities with Cabana Labs. Go beyond anonymous avatars and faceless interactions with a robust framework that unlocks value in your community.
        </SectionBody>
        <div>
          <Link href="/contact">
            <Button>Get started</Button>
          </Link>
        </div>
        <div className="absolute -top-40 xl:-top-1/3 -left-96 -z-20 scale-[2] lg:scale-[3.3] xl:scale-[3.6]">
          <Image src="/images/gradient-blob.svg" alt="Gradient blob" width={800} height={900} priority={true}/>
        </div>
      </div>
      <div className="hidden xl:block">
        <div className="absolute top-48 right-4 -z-10">
          <Image src="/images/hero-1.png" alt="Hero 1" width={654} height={654} />
        </div>
        <div className="absolute top-0 right-[500px] -z-20">
          <Image src="/images/hero-2.png" alt="Hero 2" width={236} height={236} />
        </div>
        <div className="absolute top-32 -right-2">
          <Image src="/images/hero-3.png" alt="Hero 3" width={150} height={136} />
        </div>
      </div>
      {/*<div className="absolute bottom-0 right-10 hidden md:block">*/}
      {/*  <ScrollIndicator />*/}
      {/*</div>*/}
    </section>
  );
};
