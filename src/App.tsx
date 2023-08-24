import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/SideBar/Sidebar";
import DataDisplay from "./components/DataDisplay/DataDisplay";
import AppInput from "./components/AppInput/AppInput";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getLocationByIPorDomain } from "./API/getLocationByIPorDomain";

function App() {
  // useEffect(() => {
  //   getLocationByIPorDomain("pl.wikipedia.org");
  //   getLocationByIPorDomain("88.156.138.31");
  // }, []);

  return (
    <>
      <Header />
      <div className="container">
        <Sidebar />

        <div className="main">
          <DataDisplay title="Users Info:" />
          <AppInput />
          <DataDisplay title="Searched Info:" />
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
