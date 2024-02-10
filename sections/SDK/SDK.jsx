import {SectionTitle} from "../../components";
import Image from "next/image";
import {SectionBody} from "../../components/SectionTitle/SectionTitle";
import {sdkData} from "./sdkData";
//
export const SDK = () => {
  return (
    <section className="section text-white divide-y divide-slate-600">
      <div>
        <SectionTitle className="mb-8"> Cabana SDK </SectionTitle>
        <div className="flex flex-col gap-10 mb-14 max-w-medium">
          <SectionBody>Effortlessly embed Cabana Identity into existing protocols, platforms and projects, enriching user experience and unlocking additional community value.</SectionBody>

          <SectionBody>Cabana Identity thrives on collaboration. We provide the building blocks. You shape the future.</SectionBody>
        </div>
      </div>
      <div className="px-20 pt-32 flex flex-col gap-24">
        <div className="flex justify-between items-center px-20">
          <div>
            <h2 className="text-xl xl:text-1xl font-bold text-white max-w-sm">
              Decentralized Key Management </h2>{/*<p className="mt-12 max-w-2xl">*/} {/*  Cabana utilizes a decentralized key management system for Web2 and Web3 solutions powered by smart contracts on the Oasis Sapphire network. </p>*/}
            <ul className="mt-6 li-star">
              <li>Powered by smart contracts on <a className="text-blue-400" href="https://oasisprotocol.org/sapphire">Oasis Sapphire</a></li>
              <li>Sign & verify transactions across blockchains.</li>
              <li>Issue and verify Verifiable Credentials</li>
              <li>Verify ZK Proofs</li>
              <li>Verify Passkeys</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl xl:text-1xl font-bold text-white max-w-sm">
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
          <div className="mb-12 flex flex-wrap justify-center gap-8">
            {sdkData.map(({ alt, image, hidden }, index) => {
              if (hidden) {
                return null;
              }
              return (
                <div><Image src={image} width={100} height={100} title={alt} /></div>
              );
            })}
          </div>
          <div className="absolute -z-10 -top-64 right-1/4 scale-[1.4]">
            <Image src="/images/sdk/blob.svg"  width={668} height={669}/>
          </div>
        </div>
        <div className="relative flex justify-between items-center">
          <div>
            <h2 className="text-xl xl:text-1xl font-bold text-white max-w-sm">
              What can you build? </h2>
            <ul className="mt-6 li-star">
              <li>Web3 Profiles for your favorite Ecosystems</li>
              <li>Smart Wallets (Account Abstraction)</li>
              <li>Identity Verification (Privacy-Preserving)</li>
            </ul>
          </div>
          <div>
            <figure>
              <Image src="/images/sdk/build.png" alt="SDK" width={668} height={669}/>
            </figure>
          </div>
          <div className="absolute -z-10 top-34 right-1/4 scale-[1.4]">
            <Image src="/images/sdk/blob.svg" width={668} height={669}/>
          </div>
        </div>
      </div>
    </section>
  );
}