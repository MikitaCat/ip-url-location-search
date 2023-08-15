import React, { useEffect, useState } from "react";
import { SearchesList } from "./components/SearchesList/SearchesList";
import {
  AppBar,
  Button,
  Drawer,
  IconButton,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import AppMap from "./components/Map/AppMap";
import Info from "./components/Info/Info";
import "./App.css";
import { LatLngExpression } from "leaflet";
import Header from "./components/Header/Header";

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
  const handleButtonClick = () => {
    // setPosition(generateRandomLocation());
  };

  const [string, setString] = useState("");

  // useEffect(() => {
  //   getIpFromUrl("https://www.openai.com/research/");
  // }, []);

  return (
    <>
      <Header />
      <div className="container">
        <div className="sidebar">
          <SearchesList />
        </div>

        <div className="main">
          <Typography>Users Info</Typography>
          <div className="main__usersInfo">
            <AppMap />
            <Info />
          </div>

          <div className="main__prompt">
            <TextField
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setString(e.target.value);
                console.log(string);
              }}
              value={string}
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
    </>
  );
}

export default App;
