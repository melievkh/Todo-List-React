import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  colors: {
    textColor: "#2b2b2b",
    body: "#fff",
    title: "#444852",
    headingColor: "#fff",
    input: "#fff",
  },
  darkmode: false,
};

export const theme_slice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setDarkTheme(state) {
      state.colors.textColor = "#ffffff";
      state.colors.body = "#1f1f2e";
      state.colors.title = "#29293b";
      state.colors.input = "#29293b";
      state.colors.headingColor = "#fff";

      state.darkmode = true;
    },
    setDefaultTheme(state) {
      state.colors.textColor = "#444852";
      state.colors.body = "#fff";
      state.colors.title = "#444852";
      state.colors.input = "#fff";
      state.colors.headingColor = "#fff";

      state.darkmode = false;
    },
  },
});

export const { setDarkTheme, setDefaultTheme } = theme_slice.actions;
export default theme_slice.reducer;
