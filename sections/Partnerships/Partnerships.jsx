import Image from "next/image";
import { useTheme } from "next-themes";

export const Partnerships = () => {
  const { resolvedTheme } = useTheme();
  const isDarkTheme = resolvedTheme === "dark";

  return (
    <section className="dark:bg-codGray bg-athensGray">
      <div className="max-w-[1092px] mx-auto px-4 2xl:px-0 py-14 md:py-28 flex flex-col xl:flex-row justify-between">
        <div className="space-y-6 md:space-y-12">
          <h2 className="text-2xl xl:text-3xl font-black dark:text-athensGray text-codGray">Partnerships</h2>
          <div className="flex flex-col gap-6 md:gap-12">
            <figure>
              <Image
                src={isDarkTheme ? "/images/validata-dark.png" : "/images/validata-light.png"}
                alt="Validata logo"
                width={180}
                height={33}
              />
            </figure>
            <figure>
              <Image
                src={isDarkTheme ? "/images/steadynamic-dark.svg" : "/images/steadynamic-light.png"}
                alt="Steadynamic logo"
                width={225}
                height={30}
              />
            </figure>
            <figure>
              <Image
                src={isDarkTheme ? "/images/token-logo-dark.png" : "/images/token-logo-light.png"}
                alt="Token logo"
                width={130}
                height={55}
              />
            </figure>
          </div>
        </div>
        <div className="max-w-small">
          <h2 className="text-2xl xl:text-3xl font-black dark:text-athensGray text-codGray !leading-[64px] mb-4">
            Built on open standards and chain agnostic
          </h2>
          <ul>
            <li className="text-lg text-corduroy underline">w3.org/TR/did-core</li>
            <li className="text-lg text-corduroy underline">w3.org/TR/vc-data-model</li>
            <li className="text-lg text-corduroy underline">identity.foundation</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
