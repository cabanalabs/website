import { SectionTitle } from "../../components";
import { trustScoreData } from "./trustScoreData";

export const TrustScores = () => {
  return (
    <section className="section xl:pt-64">
      <SectionTitle className="mb-8" purple>
        Trust Metrics
      </SectionTitle>
      <p className="text-md xl:text-xl mb-14 max-w-[1020px]">
        Gain a holistic view of trustworthiness through immutable metrics. A comprehensive suite of measurements offer
        a view into individual’s and organization’s trustworthiness
        in the digital world.
      </p>
      <div className="grid gap-10 md:gap-16 md:grid-cols-4">
        {trustScoreData.map(({ number, title, description, image }, index) => {
          return (
            <div key={index} className="p-3 xl:p-8 flex flex-col gap-4 bg-black w-[350px] h-[475px] rounded-2xl border border-b-corduroy">
              <div className="flex justify-center items-center min-h-[230px]">
                <div><img src={image} width={200} /></div>
              </div>
              <span className="text-xl xl:text-2xl font-bold text">{title}</span>
              {/*<p className="text-lg xl:text-xl font-black mb-4">{title}</p>*/}
              <p className="text-sm xl:text-lg font-medium">{description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
