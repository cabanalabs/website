import Image from "next/image";
import {SectionTitle} from "../../components";
import {SectionBody} from "../../components/SectionTitle/SectionTitle";

export const IdentityBuilding = () => {
  return (
    <section className="max-w-medium xl:max-w-xxl mx-auto xl:my-24">
      <div className={`flex flex-col lg:flex-row gap-6 xl:gap-12 items-center`}>
        <div className="max-w-[360px]">
          <SectionTitle className="mb-6 xl:mb-12 max-w-[300px]">
            Identity Building
          </SectionTitle>
          <SectionBody>Motivate users to invest in their digital identities for greater access, opportunities, and community standing.</SectionBody>
        </div>
        <div className="relative h-[476px] w-[420px] lg:w-[750px] xl:h-[768px] xl:w-[1000px] scale-[.7] md:scale-100 -mt-28 md:mt-0 ">
          <div className="absolute mt-2 xl:mt-28 h-[476px] w-[475px] -translate-x-1/2 left-24 xl:left-0 scale-[.6] xl:transform-none">
            <Image src="/images/ib/ib_real_person.png" layout="fill"/>
          </div>
          <div className="absolute z-10 h-[307px] w-[529px] -right-44 xl:right-28 scale-[.6] xl:transform-none">
            <Image src="/images/ib/ib_profile_card.png" layout="fill"/>
          </div>
          <div className="z-40 h-[95px] w-[231px] -right-12 absolute xl:right-52 inset-y-[215px] xl:inset-y-[320px] scale-[.6] xl:transform-none">
            <Image src="/images/ib/ib_badges.png" layout="fill"/>
          </div>
          <div className="z-20 h-[318px] w-[451px] -right-36 -bottom-16 absolute xl:bottom-1 xl:right-32 scale-[.6] xl:transform-none">
            <Image src="/images/ib/ib_verifications.png" layout="fill"/>
          </div>
          <div className="-z-10 absolute -bottom-40 scale-[1.4]">
            <Image src="/images/sdk/blob.svg" width={668} height={669}/>
          </div>
        </div>
      </div>
    </section>
  )
}