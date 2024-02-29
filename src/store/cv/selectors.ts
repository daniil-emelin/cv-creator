import { createSelector } from "@reduxjs/toolkit";

import type { RootState } from "store/store";

export const cvStateSelector = (state: RootState) => state.cv;

export const getCvListSelector = createSelector(
  cvStateSelector,
  (cv) => cv.list
);

export const getExampleCvSelector = createSelector(
  cvStateSelector,
  (cv) => cv.example
);

export const getCvByIdSelector = (id: string) =>
  createSelector(getCvListSelector, (list) => {
    return list.filter(({ id: cvId }) => cvId === id)?.[0];
  });
