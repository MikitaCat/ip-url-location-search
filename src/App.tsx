import React, { useEffect, useState } from "react";
import { SearchesList } from "./components/SearchesList/SearchesList";
import { Button, TextField } from "@mui/material";
import AppMap from "./components/Map/AppMap";
import Info from "./components/Info/Info";
import "./App.css";
import { LatLngExpression } from "leaflet";

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

  function generateRandomLocation(): LatLngExpression {
    const minLat = -90;
    const maxLat = 90;
    const minLng = -180;
    const maxLng = 180;

    const randomLat = Math.random() * (maxLat - minLat) + minLat;
    const randomLng = Math.random() * (maxLng - minLng) + minLng;

    return [randomLat, randomLng];
  }

  const [position, setPosition] = useState<LatLngExpression | undefined>([
    51.9, -0.09,
  ]);
  const handleButtonClick = () => {
    setPosition(generateRandomLocation());
  };

  useEffect(() => {
    getIpFromUrl("https://www.openai.com/research/");
  }, []);

  return (
    <div className="container">
      <div className="sidebar">
        <SearchesList />
      </div>

      <div className="main">
        <div className="main__usersInfo">
          <AppMap position={position} />
          <Info />
        </div>

        <div className="main__prompt">
          <TextField
            sx={{ width: "100%", marginRight: "10px" }}
            label="Eneter IP adress or URL"
            variant="standard"
          />
          <Button variant="contained" onClick={handleButtonClick}>
            Search
          </Button>
        </div>

        <div className="main__usersInfo">
          <AppMap />
          <Info />
        </div>
      </div>
    </div>
  );
}

export default App;
