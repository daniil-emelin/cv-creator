import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { getCvByIdSelector, getExampleCvSelector } from "store/cv/selectors";

import { CVPreview } from "./CVPreview";

export const CVPreviewPage = () => {
  const { id = "" } = useParams();
  
  const cvById = useSelector(getCvByIdSelector(id));
  const exampleCv = useSelector(getExampleCvSelector);

  return <CVPreview cv={id === 'example' ? exampleCv : cvById} />;
};
