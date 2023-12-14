import { SectionTitle } from "../../components";

export const UseCases = () => {
  return (
    <section className="section xl:pt-64">
      <SectionTitle className="mb-20 xl:mb-12 text-center" purple> Cabana Identity Enhances Your Community </SectionTitle>
      <div className="flex flex-col items-center justify-center">
      {/*<div className="text-sm md:text-lg lg:text-xl text-athensGray mx-44 text-center">*/}
      {/*  Cabana identity solutions seamlessly blend into existing systems, supporting various applications, including new member onboarding, social platforms, wallet-as-a-service, web3 profiles, verifiable credential enrichment, and more.*/}
      {/*  <p className="mt-16">Our team is currently collaborating with partners on the following:</p>*/}
      {/*</div>*/}
        <div className="text-sm md:text-lg lg:text-xl text-athensGray mx-44">
          Our technology seamlessly integrates with existing systems, offering a range of solutions:
          <ul className="list-disc ml-20 mt-4 grid gap-4">
            <li>New Member Onboarding: Streamline the process with an emphasis on welcoming and integrating new users.</li>
            <li>Social Platforms: Enhance user interaction with verified profiles, encouraging genuine connections.</li>
            <li>Wallet-as-a-Service & Web3 Profiles: Provide a secure yet user-friendly environment for digital transactions and interactions.</li>
            <li>Verifiable Credential Enrichment: Empower users with control over their digital identities, fostering trust and transparency.</li>
          </ul>
        </div>
      </div>


    </section>
  );
};
