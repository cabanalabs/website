import { SectionTitle } from "../../components";

export const BuildTogether = () => {
  return (
    <section className="section xl:pt-36">
      <SectionTitle className="mb-20 xl:mb-12 text-center" purple>Let&apos;s Build Together</SectionTitle>
      <div className="flex flex-col gap-4 text-sm md:text-lg lg:text-xl text-athensGray mx-44">
        <div className="flex">
          <div>Cabana thrives on collaboration. Its open architecture welcomes developers and innovators to build upon its foundation.</div>
          <div className="min-w-[52%]">&nbsp;</div>
        </div>
        <div className="flex">
          <div className="min-w-[52%]">&nbsp;</div>
          <div className="max-w-l">Create applications that leverage verifiable credentials, code smart contracts to extend methods, or offer trust-building verification services. The possibilities are endless.</div>
        </div>
        <div className="flex">
          <div>Join Cabana – plugin, build, and let’s revolutionize identity management together.</div>
          <div className="min-w-[62%]">&nbsp;</div>
        </div>
        </div>
    </section>
);
};
