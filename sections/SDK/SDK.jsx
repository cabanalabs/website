import {SectionTitle} from "../../components";
import Image from "next/image";
//divide-y
export const SDK = () => {
  return (
    <section className="section text-white divide-dotted divide-slate-500">
      <div>
        <SectionTitle className="mb-8"> Cabana SDK </SectionTitle>
        <div className="flex flex-col gap-10 text-md xl:text-lg mb-14 max-w-[1020px]">
          <p>Effortlessly embed Cabana Identity into existing protocols, platforms and projects, enriching user experience and unlocking additional community value.</p>

          <p>Cabana Identity thrives on collaboration. We provide the building blocks. You shape the future.</p>
        </div>
      </div>
      <div className="px-20 pt-10 flex flex-col gap-24">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl xl:text-2xl font-bold text-white max-w-lg">
              Decentralized Key Management </h2>
            <p className="mt-12 max-w-2xl">
              Cabana utilizes a decentralized key management system for Web2 and Web3 solutions powered by smart contracts on the Oasis Sapphire network. </p>
            <ul className="mt-6 li-star">
              <li>Sign & verify transactions across blockchains.</li>
              <li>Issue and verify Verifiable Credentials Attesters</li>
              <li>Verify ZK Proofs</li>
              <li>Verify Passkeys</li>
            </ul>
          </div>
          <div>
            <figure>
              <Image src="/images/sdk/tech_icons.png" alt="SDK" width={380} height={245}/>
            </figure>
          </div>
        </div>
        <div>
          <div  className="mb-12 flex justify-center">
            <h2 className="text-2xl xl:text-2xl font-bold text-white">
              Multi-Chain, Web2 and Web3
            </h2>
          </div>
          <figure className="flex justify-center">
            <Image src="/images/sdk/algorithms.png" alt="SDK" width={735} height={360}/>
          </figure>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl xl:text-2xl font-bold text-white max-w-lg">
              What can you build? </h2>
            <ul className="mt-6 li-star">
              <li>Web3 Profiles for your Ecosystem</li>
              <li>Smart Wallets  (Account Abstraction)</li>
              <li>Identity Verification (Privacy-Preserving)</li>
            </ul>
          </div>
          <div>
            <figure>
              <Image src="/images/sdk/build.png" alt="SDK" width={668} height={669}/>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}