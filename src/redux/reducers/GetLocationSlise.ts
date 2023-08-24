import { createSlice } from "@reduxjs/toolkit";
import { fetchLocation } from "../thunks/getLocationThunk";
import { LocationType } from "../../models/location";

type initialStateType = {
  locationInfo: LocationType | {};
  isLoading: boolean;
  error: any;
};

const initialState: initialStateType = {
  locationInfo: {},
  isLoading: false,
  error: "",
};

export const getLocationSlise = createSlice({
  name: "locationSlise",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchLocation.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchLocation.fulfilled, (state, action) => {
      state.isLoading = false;
      state.locationInfo = action.payload;
    });
    builder.addCase(fetchLocation.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default getLocationSlise.reducer;
