import Image from "next/image";
import {SectionTitle} from "../../components";
import {SectionBody} from "../../components/SectionTitle/SectionTitle";

export const IdentityBuilding = () => {
  return (
    <section className="section text-white">
      <div className={`flex flex-col gap-12 md:flex-row items-center`}>
        <div className="max-w-small">
          <SectionTitle className="mb-12">
            Identity Building
          </SectionTitle>
          <SectionBody>Motivate users to invest in their digital identities for greater access, opportunities, and community standing.</SectionBody>
        </div>
        <div className="relative w-[880px] h-[760px]">
          <div className="shrink-0 h-[238px] w-[238px] xl:h-[476px] xl:w-[475px] relative mt-28">
            <Image src="/images/ib/ib_real_person.png" layout="fill"/>
          </div>
          <div className="shrink-0 h-[307px] w-[529px] xl:h-[307px] xl:w-[529px] absolute right-1 top-1 z-10">
            <Image src="/images/ib/ib_profile_card.png" layout="fill"/>
          </div>
          <div className="shrink-0 h-[95px] w-[231px] xl:h-[95px] xl:w-[231px] absolute right-32 z-1 inset-y-[320px]">
            <Image src="/images/ib/ib_badges.png" layout="fill"/>
          </div>
          <div className="shrink-0 h-[318px] w-[451px] xl:h-[318px] xl:w-[451px] absolute right-1 bottom-1 z-20">
            <Image src="/images/ib/ib_verifications.png" layout="fill"/>
          </div>
          <div className="absolute -z-10 -bottom-40 scale-[1.4]">
            <Image src="/images/sdk/blob.svg" width={668} height={669}/>
          </div>
        </div>
      </div>
    </section>
  )
}