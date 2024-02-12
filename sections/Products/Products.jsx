import {AppFeature} from "../AppFeature/AppFeature";
import {productData} from "./productData";

export const Products = () => {
  return productData.map((appFeature, index) => (
      <AppFeature
        key={index}
        imageDark={appFeature.imageDark}
        imageLight={appFeature.imageLight}
        title={appFeature.title}
        description={appFeature.description}
        isReversed={appFeature.isReversed}
        greenTitle={appFeature.greenTitle}
        w={appFeature.w}
        h={appFeature.h}
      />
    ));
}