import Image from "next/image";
import {SectionTitle} from "../../components";

export const OpenStandards = () => {

  return (
    <section className="dark:bg-codGray bg-athensGray">
      <div className="section">
        <div className="max-w-[990px]">
          <SectionTitle >
            Built on open standards and chain agnostic
          </SectionTitle>
          <ul className="li-starGray mt-8">
            <li className="text-sm xl:text-lg text-corduroy underline">w3.org/TR/did-core</li>
            <li className="text-sm xl:text-lg text-corduroy underline">w3.org/TR/vc-data-model</li>
            <li className="text-sm xl:text-lg text-corduroy underline">identity.foundation</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
