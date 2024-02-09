import Image from "next/image";

import { SectionTitle } from "../../components";

export const AppFeature = ({ imageDark, imageLight, title, description, isReversed, greenTitle, w= 404, h = 821 }) => {
  // const { resolvedTheme } = useTheme();
  // const isDarkTheme = resolvedTheme === "dark";

  return (
    <section className="section">
      <div
        className={`flex flex-col items-center justify-center gap-12 md:flex-row ${
          isReversed ? "md:flex-row-reverse" : ""
        }`}
      >
        <figure style={{ height:`${h}px`, width: `${w}px`}} className={`shrink-0 relative`}>
          {/*<Image src={isDarkTheme ? imageDark : imageLight} alt={title} layout="fill" />*/}
          <Image src={imageDark} alt={title} layout="fill" />
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
