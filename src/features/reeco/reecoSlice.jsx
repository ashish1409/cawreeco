import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllReecoApi = createAsyncThunk("reeco/getAPI", async () => {
  const apiResponse = await axios.get("http://localhost:4000/fruits");
  return apiResponse.data;
});

export const fetchAllProductList = createAsyncThunk(
  "productList/getAPI",
  async () => {
    const apiResponse = await axios.get("http://localhost:4000/fruitsList");
    return apiResponse.data;
  }
);
const initialState = {
  reecoData: [],
  loading: "idle",
};
const reecoslice = createSlice({
  name: "reecoProduct",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllReecoApi.pending, (state, action) => {
      state.loading = "pending";
    });
    builder.addCase(fetchAllReecoApi.fulfilled, (state, action) => {
      state.loading = "idle";
      state.reecoData = action.payload;
    });

    builder.addCase(fetchAllProductList.pending, (state, action) => {
      state.loading = "pending";
    });
    builder.addCase(fetchAllProductList.fulfilled, (state, action) => {
      state.loading = "idle";
      state.reecoData = action.payload;
    });
  },
});

export const { allReecoLoading, allReecoProductRecived } = reecoslice.actions;

export const getAllReeco = (state) => state.reeco.reecoData;
export const getLoading = (state) => state.reeco.loading;
export default reecoslice.reducer;
