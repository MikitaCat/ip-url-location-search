import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/SideBar/Sidebar";
import DataDisplay from "./components/DataDisplay/DataDisplay";
import AppInput from "./components/AppInput/AppInput";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  checkIsIP,
  checkIsPrivateIP,
  urlValidation,
} from "./utils/adressValidation";
import { useAppDispatch, useAppSelector } from "./redux/hooks/redux";
import { fetchLocation } from "./redux/thunks/getLocationThunk";

function App() {
  const dispatch = useAppDispatch();
  const [inputValue, setInputValue] = useState("");
  const { locationInfo, error, isLoading } = useAppSelector(
    (state) => state.getLocationSlise
  );

  const searchInputClick = () => {
    if (checkIsIP(inputValue)) {
      if (checkIsPrivateIP(inputValue)) {
        toast.warn("Invalid or Private IP");
        return;
      }
      console.log("Good IP, server request with", inputValue);
      dispatch(fetchLocation(inputValue));
      return;
    }

    let domainMane = urlValidation(inputValue);

    if (domainMane) {
      console.log("Correct Domain name, server request with", domainMane);
      dispatch(fetchLocation(domainMane));
    } else {
      toast.warn("Incorrect Domain Name");
    }
  };

  return (
    <>
      <Header />
      <div className="container">
        <Sidebar />

        <div className="main">
          <DataDisplay title="Users Info:" />
          <AppInput
            value={inputValue}
            setValue={setInputValue}
            buttonClick={searchInputClick}
          />
          <DataDisplay
            title="Searched Info:"
            locationInfo={locationInfo}
            isLoading={isLoading}
          />
        </div>

        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </div>
    </>
  );
}

export default App;
