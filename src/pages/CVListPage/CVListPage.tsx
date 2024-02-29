import { useSelector } from "react-redux";

import { getCvListSelector } from "store/cv/selectors";

import { CVList } from "./CVList";

export const CVListPage = () => {
  const cvList = useSelector(getCvListSelector);

  return <CVList list={cvList} />;
};
