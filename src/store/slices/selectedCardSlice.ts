import { createSlice } from "@reduxjs/toolkit";

const selectedCardSlice = createSlice({
  name: "selectedCard",
  initialState: { dt_txt: null } as {
    dt_txt: string | null | number;
  },
  reducers: {
    setSelectedCard(state, action: { payload: string | number }) {
      state.dt_txt = action.payload;
    },
  },
});

export const { setSelectedCard } = selectedCardSlice.actions;
export default selectedCardSlice.reducer;
