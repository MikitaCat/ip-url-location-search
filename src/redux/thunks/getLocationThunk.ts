import { createAsyncThunk } from "@reduxjs/toolkit";
import { getLocationByIPorDomain } from "../../API/getLocationByIPorDomain";

export const fetchLocation = createAsyncThunk(
  "locationSlise/get",
  async (value: string, thunkAPI) => {
    const response = await getLocationByIPorDomain(value);
    const { city, country, regionName, lat, lon, query } = response;
    return { city, country, regionName, lat, lon, query };
  }
);
