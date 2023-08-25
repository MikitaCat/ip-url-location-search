import { LocationInfoType } from "./../../models/location";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { fetchLocation } from "../thunks/getLocationThunk";

type initialStateType = {
  locationInfo: LocationInfoType;
  isLoading: boolean;
  history: LocationInfoType[];
};

const storageHistory = localStorage.getItem("searchedHistory");

const initialState: initialStateType = {
  locationInfo: {} as LocationInfoType,
  isLoading: false,
  history: storageHistory ? JSON.parse(storageHistory) : [],
};

export const locationSlice = createSlice({
  name: "locationSlice",
  initialState,
  reducers: {
    setLocationFromHistory(state, action: PayloadAction<string>) {
      const selectedPoint = state.history.find((item: LocationInfoType) => {
        return item.name === action.payload;
      });

      if (selectedPoint) state.locationInfo = selectedPoint;
    },
    deleteHistoryPoint(state, action: PayloadAction<string>) {
      const updatedHistory = state.history.filter(
        (item) => item.name !== action.payload
      );
      if (updatedHistory) {
        state.history = updatedHistory;
        localStorage.setItem("searchedHistory", JSON.stringify(state.history));
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchLocation.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchLocation.fulfilled, (state, action) => {
      console.log("ACTION", action);
      state.isLoading = false;
      state.locationInfo = action.payload;

      //Adding to the history if there aren't such element
      const historyPoint = state.history.find((item: LocationInfoType) => {
        return item.name === action.payload.name;
      });

      if (!historyPoint) {
        state.history.push(action.payload);
        localStorage.setItem("searchedHistory", JSON.stringify(state.history));
      }
    });
    builder.addCase(fetchLocation.rejected, (state, action) => {
      state.locationInfo = {} as LocationInfoType;
      state.isLoading = false;
    });
  },
});

export default locationSlice.reducer;
export const { setLocationFromHistory, deleteHistoryPoint } =
  locationSlice.actions;
