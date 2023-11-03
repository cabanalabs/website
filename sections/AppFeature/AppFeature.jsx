// import { useTheme } from "next-themes";
import Image from "next/image";

import { SectionTitle } from "../../components";

export const AppFeature = ({ imageDark, imageLight, title, description, isReversed, greenTitle }) => {
  // const { resolvedTheme } = useTheme();
  const isDarkTheme = true;//resolvedTheme === "dark";

  return (
    <section className="section">
      <div
        className={`flex flex-col items-center justify-center gap-12 md:flex-row ${
          isReversed ? "md:flex-row-reverse" : ""
        }`}
      >
        <figure className="shrink-0 h-[574px] w-[283px] xl:h-[821px] xl:w-[404px] relative">
          <Image src={isDarkTheme ? imageDark : imageLight} alt={title} layout="fill" />
        </figure>
        <div className="max-w-small">
          <SectionTitle className="mb-12" purple={!greenTitle}>
            {title}
          </SectionTitle>
          <p className="whitespace-pre-line font-medium text-sm xl:text-lg">{description}</p>
        </div>
      </div>
    </section>
  );
};
