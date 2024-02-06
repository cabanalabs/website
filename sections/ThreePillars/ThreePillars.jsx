import {threePillarsData} from "./threePillarsData";
import {AppFeature} from "../AppFeature/AppFeature";

export const ThreePillars = () => {
  return threePillarsData.map((appFeature, index) => (
      <AppFeature
        key={index}
        imageDark={appFeature.imageDark}
        imageLight={appFeature.imageLight}
        title={appFeature.title}
        description={appFeature.description}
        isReversed={appFeature.isReversed}
        greenTitle={appFeature.greenTitle}
      />
    ));
}