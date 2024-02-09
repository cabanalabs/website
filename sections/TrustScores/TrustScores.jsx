import { SectionTitle } from "../../components";
import { trustScoreData } from "./trustScoreData";

export const TrustScores = () => {
  return (
    <section className="section xl:pt-64 text-white">
      <SectionTitle className="mb-8">
        Trust Scores
      </SectionTitle>
      <p className="text-md xl:text-xl mb-14 max-w-[1020px]">
        Gain a holistic view of trustworthiness through immutable metrics. A comprehensive suite of measurements offer
        a view into individual’s and organization’s trustworthiness
        in the digital world.
      </p>
      <div className="flex gap-8 md:gap-10 xl:gap-16 ">
        {trustScoreData.map(({ number, title, description, image }, index) => {
          return (
            <div key={index} className="p-2 xl:p-6 flex flex-col gap-4 bg-black w-[350px] h-[475px] rounded-2xl border border-zinc-500">
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
