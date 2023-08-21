import React, { useEffect, useState } from "react";
import "./App.css";
import { LatLngExpression } from "leaflet";
import Header from "./components/Header/Header";
import Sidebar from "./components/SideBar/Sidebar";
import DataDisplay from "./components/DataDisplay/DataDisplay";
import AppInput from "./components/AppInput/AppInput";

function App() {
  async function getIpFromUrl(url: string) {
    try {
      const domain = new URL(url).hostname;
      console.log("Domain", domain);

      const response = await fetch(`http://ip-api.com/json/${domain}`);
      const data = await response.json();
      console.log("IP from URL", data);
    } catch (error) {
      console.error("Error getting IP:", error);
    }
  }

  const [position, setPosition] = useState<LatLngExpression | undefined>([
    51.9, -0.09,
  ]);

  // useEffect(() => {
  //   getIpFromUrl("https://www.openai.com/research/");
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
      </div>
    </>
  );
}

export default App;
