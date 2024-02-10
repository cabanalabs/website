import { SectionTitle } from "../../components";
import { trustScoreData } from "./trustScoreData";
import {SectionBody} from "../../components/SectionTitle/SectionTitle";

export const TrustScores = () => {
  return (
    <section className="section xl:pt-64 text-white">
      <SectionTitle className="mb-8">
        Trust Scores
      </SectionTitle>
      <SectionBody className="mb-14 max-w-[1020px]">
        Trust Scores offer a rich tapestry of information – make informed decisions, secure interactions, and establish meaningful connections. These measurements offer
        a view into each identity's trustworthiness in the digital world.
      </SectionBody>
      {/*<p>Gain a holistic view of trustworthiness through immutable metrics. </p>*/}
      <div className="flex gap-8 md:gap-10 xl:gap-6 flex-wrap ">
        {trustScoreData.map(({ number, title, description, image }, index) => {
          return (
            <div key={index} className="p-4 lg:p-6 xl:p-8 flex flex-col gap-6 bg-black w-[344px] h-[474px] rounded-2xl border border-zinc-500">
              <div className="flex justify-center items-center min-h-[230px]">
                <div><img src={image} width={200} /></div>
              </div>
              <span className="text-xl xl:text-[2.5rem] font-bold">{title}</span>
              {/*<p className="text-lg xl:text-xl font-extrabold mb-4">{title}</p>*/}
              <SectionBody>{description}</SectionBody>
            </div>
          );
        })}
      </div>
    </section>
  );
};
