import Image from "next/image";
import {SectionTitle} from "../../components";

export const Partnerships = () => {
  // const { resolvedTheme } = useTheme();
  // const isDarkTheme = resolvedTheme === "dark";

  return (
    <section>
      <div className="flex flex-col gap-10 items-center pb-28 px-10">
        <SectionTitle>Partnerships</SectionTitle>
        <div className="flex gap-6 lg:gap-12 justify-center items-center flex-wrap">
          <figure>
            <Image src="/images/validata-dark.png" alt="Validata logo" width={180} height={33}/>
          </figure>
          <figure>
            <Image src="/images/partnerships/wolfgang-logo-dark.png" alt="The Wolfgang Project logo" width={126} height={56}/>
          </figure>
          <figure> <Image src="/images/steadynamic-dark.svg" alt="Steadynamic logo" width={225} height={30}/>
          </figure>
          <figure>
            <Image src="/images/token-logo-dark.png" alt="Token logo" width={130} height={55}/>
          </figure>
        </div>
      </div>
    </section>
  );
};
