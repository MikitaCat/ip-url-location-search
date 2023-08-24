import { createAsyncThunk } from "@reduxjs/toolkit";
import { getLocationByIPorDomain } from "../../API/getLocationByIPorDomain";

export const fetchLocation = createAsyncThunk(
  "locationSlise/get",
  async (value: string, thunkAPI) => {
    const response = await getLocationByIPorDomain(value);
    return response;
  }
);
