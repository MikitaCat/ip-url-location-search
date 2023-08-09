import { Paper } from "@mui/material";
import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const AppMap: React.FC = () => {
  return (
    <Paper sx={{ height: "300px", width: "60%" }} elevation={3}>
      <MapContainer
        center={[51.505, -0.09]} // Центр карты, можно изменить на нужные координаты
        zoom={13} // Уровень масштабирования
        style={{ height: "100%", width: "100%" }}
        attributionControl={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" // URL для базового слоя карты
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' // Атрибуция
        />
      </MapContainer>
    </Paper>
  );
};

export default AppMap;
