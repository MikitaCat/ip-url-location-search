import { createAsyncThunk } from "@reduxjs/toolkit";
import { getLocationByIPorDomain } from "../../API/getLocationByIPorDomain";
import { toast } from "react-toastify";

//When server can not find info or user entered the value that
//don't handled by validations, it returns 200 status code
//but in responce object we can see field "status" with
//value "fail", otherwise the value is "success".
//I used it for errors handling and alerts displaying
export const fetchLocation = createAsyncThunk(
  "locationSlise/get",
  async (value: string, thunkAPI) => {
    try {
      const response = await getLocationByIPorDomain(value);
      if (response.status === "success") {
        const { city, country, regionName, lat, lon, query } = response;
        return { city, country, regionName, lat, lon, query };
      } else {
        toast.warn("You entered incorrect IP/URL or it is impossible to find");
        return thunkAPI.rejectWithValue("Status fail");
      }
    } catch (error) {
      toast.error("Something went wrong");
      return thunkAPI.rejectWithValue("Something went wrong");
    }
  }
);
