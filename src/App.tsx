import React, { useEffect, useState } from "react";
import "./App.css";
import { LatLngExpression } from "leaflet";
import Header from "./components/Header/Header";
import Sidebar from "./components/SideBar/Sidebar";
import DataDisplay from "./components/DataDisplay/DataDisplay";
import AppInput from "./components/AppInput/AppInput";
import { Alert, Snackbar } from "@mui/material";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  async function getIpFromUrl(url: string) {
    try {
      let finalUrl = "";
      if (
        url.includes("https://") ||
        url.includes("http://") ||
        url.includes("ftp://")
      ) {
        finalUrl = new URL(url).hostname;
        console.log("Domain", finalUrl);
      } else {
        finalUrl = url;
      }

      console.log("FINAL URL AFTER IF", finalUrl);
      const response = await fetch(`http://ip-api.com/json/${finalUrl}`);
      const data = await response.json();
      console.log("IP from URL", data);
    } catch (error) {
      console.error("Error getting IP:", error);
    }
  }

  const [position, setPosition] = useState<LatLngExpression | undefined>([
    51.9, -0.09,
  ]);

  useEffect(() => {
    // getIpFromUrl("https://www.openai.com/research/");
    // getIpFromUrl("https://wikipedia.org");
    // getIpFromUrl("https://pl.wikipedia.org/wiki/Leprous");
  }, []);

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
