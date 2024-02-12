import { SectionTitle } from "../../components";
import { trustScoreData } from "./trustScoreData";
import {SectionBody} from "../../components/SectionTitle/SectionTitle";

export const TrustScores = () => {
  return (
    <section className="section pt-4 lg:pt-32 xl:pt-64">
      <SectionTitle className="mb-8">
        Trust Scores
      </SectionTitle>
      <SectionBody className="mb-14 max-w-small lg:max-w-medium xl:max-w-2xl">
        Trust Scores offer a rich tapestry of information – make informed decisions, secure interactions, and establish meaningful connections. These measurements offer
        a view into each identity's trustworthiness in the digital world.
      </SectionBody>
      {/*<p>Gain a holistic view of trustworthiness through immutable metrics. </p>*/}

        <div className="flex flex-wrap justify-center gap-8 md:gap-8 xl:gap-6 ">
          {trustScoreData.map(({ number, title, description, image }, index) => {
            return (
              <div key={index} className="p-4 lg:p-6 xl:p-6 flex flex-col gap-4 bg-black w-[344px] h-[434px] md:w-[344px] md:h-[474px] rounded-2xl border border-zinc-500">
                <div className="flex justify-center items-center min-h-[230px]">
                  <img src={image} width={200} />
                </div>
                <span className="text-[2rem] xl:text-[2.5rem] font-bold">{title}</span>
                <h2 className="text-md lg:text-lg">{description}</h2>
              </div>
            );
          })}
        </div>

    </section>
  );
};
