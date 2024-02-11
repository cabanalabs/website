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
          <ul className="li-star mt-8">
            <li className="text-sm xl:text-lg underline"><a href="https://w3.org/TR/did-core" target="_blank">w3.org/TR/did-core</a></li>
            <li className="text-sm xl:text-lg underline"><a href="https://w3.org/TR/vc-data-model" target="_blank">w3.org/TR/vc-data-model</a></li>
            <li className="text-sm xl:text-lg underline"><a href="https://identity.foundation" target="_blank">identity.foundation</a></li>
            <li className="text-sm xl:text-lg underline"><a href="https://www.passkeys.com" target="_blank">passkeys.com</a></li>
            <li className="text-sm xl:text-lg underline"><a href="https://jwt.io" target="_blank">jwt.io</a></li>
          </ul>
        </div>
      </div>
    </section>
  );
};
