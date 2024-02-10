import {SectionTitle} from "../../components";
import Image from "next/image";
import {SectionBody} from "../../components/SectionTitle/SectionTitle";
import {sdkData} from "./sdkData";
//
export const SDK = () => {
  return (
    <section className="section divide-y divide-slate-600">
      <div className="px-6 md:px-20 xl:px-0 ">
        <SectionTitle className="mb-8"> Cabana SDK </SectionTitle>
        <div className="flex flex-col gap-10 mb-14 max-w-[620px] xl:max-w-medium">
          <SectionBody>Effortlessly embed Cabana Identity into existing protocols, platforms and projects, enriching user experience and unlocking additional community value.</SectionBody>

          <SectionBody>Cabana Identity thrives on collaboration. We provide the building blocks. You shape the future.</SectionBody>
        </div>
      </div>
      <div className="px:16 xl:px-20 pt-32 flex flex-col gap-24 justify-center">
        <div className="flex flex-wrap md:flex-nowrap items-center px-10 xl:px-20 gap-12">
          <div>
            <h2 className="text-xl lg:text-1xl font-bold max-w-small">
              Decentralized Key Management </h2>
            <ul className="mt-6 li-star">
              <li>Powered by smart contracts on <a className="text-blue-400" href="https://oasisprotocol.org/sapphire" target="_blank">Oasis Sapphire</a></li>
              <li>Sign & verify transactions across blockchains.</li>
              <li>Issue and verify Verifiable Credentials</li>
              <li>Verify ZK Proofs</li>
              <li>Verify Passkeys</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl lg:text-1xl font-bold max-w-[280px]">
              Cryptographic Algorithms </h2>
            <ul className="mt-6 li-star max-w-sm">
              <li>ES256K (Secp256k1) - Bitcoin, Alephium, ICP, Ethereum, All EVM-Compatible, and more </li>
              <li>ES256 (Secp256r1) - JWT, Passkeys</li>
              <li>Ed25519, Sr25519 - Zcash, Cosmo, Cardano, Polkadot, and more </li>
              <li>BLS12-381 - ZK Proofs </li>
            </ul>
          </div>
        </div>
        <div className="relative">
          <div className="mx-0 mb-4 xl:mx-0 md:mb-12 flex flex-wrap justify-center gap-4 md:gap-8">
            {sdkData.map(({ alt, image, hidden }, index) => {
              if (hidden) {
                return null;
              }
              return (
                <div className="scale-75 md:scale-100" key={index}><Image src={image} width={100} height={100} title={alt} /></div>
              );
            })}
          </div>
          <div className="absolute -z-10 -top-64 right-1/4 scale-[1.4]">
            <Image src="/images/sdk/blob.svg"  width={668} height={669}/>
          </div>
        </div>
        <div className="ml-10 xl:ml-0 relative flex justify-between items-center">
          <div>
            <h2 className="text-xl xl:text-1xl font-bold text-white max-w-sm">
              Build With Us </h2>
            <ul className="mt-6 li-star">
              <li>Web3 Profiles (Verifiable + Selective Disclosure)</li>
              <li>Smart Wallets (Account Abstraction)</li>
              <li>Identity Verification (Privacy-Preserving)</li>
            </ul>
            <ul className="mt-2 li-star-2">
              <li>Node Validators</li>
              <li>Fair Airdrops</li>
              <li>Governance Roles</li>
            </ul>
          </div>
          <div>
            <figure className="hidden md:block scale-75 xl:scale-100">
              <Image src="/images/sdk/build.png" alt="SDK" width={668} height={669}/>
            </figure>
          </div>
          <div className="absolute -z-10 top-34 right-44 scale-[1.4]">
            <Image src="/images/sdk/blob.svg" width={668} height={669}/>
          </div>
        </div>
      </div>
    </section>
  );
}