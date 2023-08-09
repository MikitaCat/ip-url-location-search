import React, { useEffect } from "react";
import { SearchesList } from "./components/SearchesList/SearchesList";
import { Button, Container, Grid, Paper, TextField } from "@mui/material";
import AppMap from "./components/Map/AppMap";
import Info from "./components/Info/Info";
import "./App.css";

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
          <AppMap />
          <Info />
        </div>

        <div className="main__prompt">
          <TextField sx={{ width: "100%", marginRight: "10px" }} />
          <Button variant="contained">Search</Button>
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
