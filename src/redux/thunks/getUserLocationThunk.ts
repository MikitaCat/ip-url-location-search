import { createAsyncThunk } from "@reduxjs/toolkit";
import { getLocationByIPorDomain } from "../../API/getLocationByIPorDomain";
import { toast } from "react-toastify";

export const fetchUserLocation = createAsyncThunk(
  "userLocationSlise/get",
  async (value: string, thunkAPI) => {
    try {
      const response = await getLocationByIPorDomain(value);
      if (response.status === "success") {
        const { city, country, regionName, lat, lon, query } = response;
        return { city, country, regionName, lat, lon, query, name: value };
      } else {
        return thunkAPI.rejectWithValue("");
      }
    } catch (error) {
      toast.error("Something went wrong");
      return thunkAPI.rejectWithValue("");
    }
  }
);
