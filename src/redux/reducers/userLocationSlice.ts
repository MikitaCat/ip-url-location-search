import { createSlice } from "@reduxjs/toolkit";
import { LocationInfoType } from "../../models/location";
import { fetchUserLocation } from "../thunks/getUserLocationThunk";

type initialStateType = {
  userLocationInfo: LocationInfoType;
  userDataLoading: boolean;
};

const initialState: initialStateType = {
  userLocationInfo: {} as LocationInfoType,
  userDataLoading: false,
};

export const userLocationSlice = createSlice({
  name: "userLocation",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUserLocation.pending, (state) => {
      state.userDataLoading = true;
    });
    builder.addCase(fetchUserLocation.fulfilled, (state, action) => {
      console.log("ACTION", action);
      state.userDataLoading = false;
      state.userLocationInfo = action.payload;
    });
    builder.addCase(fetchUserLocation.rejected, (state) => {
      state.userLocationInfo = {} as LocationInfoType;
      state.userDataLoading = false;
    });
  },
});

export default userLocationSlice.reducer;
