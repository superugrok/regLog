import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IGlobalReducer } from "@Types/store/store";
import { getLocalTime } from "@Utils/getLocalTime";

const initialState: IGlobalReducer = {
  stage: "enter",
  email: null,
  time: getLocalTime(),
};

export const globalReducer = createSlice({
  name: "GLOBAL",
  initialState,
  reducers: {
    CHANGE_CURRENT_STAGE(
      state,
      action: PayloadAction<"enter" | "chars" | "create">
    ) {
      state.stage = action.payload;
    },
    CHANGE_EMAIL(state, action: PayloadAction<string>) {
      state.email = action.payload;
    },
  },
});
