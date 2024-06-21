import { createSlice } from "@reduxjs/toolkit";

interface ICategoriesState {
  records: { id: number; title: string; prfix: string; img: string }[];
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: string | null;
}

const initialState: ICategoriesState = {
  records: [],
  loading: "idle",
  error: null,
};

const categoriosSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
});

export default categoriosSlice.reducer;
