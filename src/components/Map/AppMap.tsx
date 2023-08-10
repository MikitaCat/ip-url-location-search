import { Paper } from "@mui/material";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet/dist/images/marker-icon.png"; // Добавьте этот импорт
import "leaflet/dist/images/marker-shadow.png"; // Добавьте этот импор
import { LatLngExpression, Icon } from "leaflet";
import { useEffect, useLayoutEffect, useState } from "react";
import axios from "axios";

const AppMap = () => {
  const customIcon = new Icon({
    iconUrl: require("../../img/placeholder.png"),
    iconSize: [38, 38],
  });

  const [location, setLocation] = useState<LatLngExpression>([22.5, 22.5]);

  async function getIpFromUrl() {
    try {
      const response = await axios(`http://ip-api.com/json`);
      const data = await response;
      const latLon: LatLngExpression = [response.data.lat, response.data.lon];
      setLocation(latLon);
      console.log("Position", latLon);
    } catch (error) {
      console.error("Error getting IP:", error);
    }
  }

  useLayoutEffect(() => {
    getIpFromUrl();
  }, []);

  return (
    <Paper sx={{ height: "300px", width: "60%" }} elevation={3}>
      <MapContainer
        key={location?.toString()}
        center={location}
        zoom={9}
        style={{ height: "100%", width: "100%" }}
        attributionControl={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {location && <Marker position={location} icon={customIcon}></Marker>}
      </MapContainer>
    </Paper>
  );
};

export default AppMap;
