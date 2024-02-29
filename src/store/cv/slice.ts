import { createSlice } from "@reduxjs/toolkit";

import type { CV } from "./types";

import { EXAMPLE_CV } from "../../constants";

type CVState = {
  list: CV[];
  example: CV;
};

const initialState: CVState = {
  list: [],
  example: EXAMPLE_CV,
};

export const cvSlice = createSlice({
  name: "cv",
  initialState,
  reducers: {
    addCv: (state, { payload }: { payload: CV }) => {
      state.list.push(payload);
    },
    removeCv: (state, { payload }: { payload: string }) => {
      state.list.filter((cv) => cv.id !== payload);
    },
    editCv: (state, { payload }: { payload: CV }) => {
      state.list = [...state.list].map((cv) => {
        if (cv.id === payload.id) {
          return payload;
        }
        return cv;
      });
    },
  },
});

export const { addCv, editCv, removeCv } = cvSlice.actions;

export default cvSlice.reducer;
