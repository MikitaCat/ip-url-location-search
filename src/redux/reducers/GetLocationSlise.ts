import { LocationInfoType } from "./../../models/location";
import { createSlice } from "@reduxjs/toolkit";
import { fetchLocation } from "../thunks/getLocationThunk";

type initialStateType = {
  locationInfo: LocationInfoType;
  isLoading: boolean;
  history: LocationInfoType[];
};

const initialState: initialStateType = {
  locationInfo: {} as LocationInfoType,
  isLoading: false,
  history: [],
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
      console.log("ACTION", action);
      state.isLoading = false;
      state.locationInfo = action.payload;
      state.history.push(action.payload);
    });
    builder.addCase(fetchLocation.rejected, (state, action) => {
      state.locationInfo = {} as LocationInfoType;
      state.isLoading = false;
    });
  },
});

export default getLocationSlise.reducer;
