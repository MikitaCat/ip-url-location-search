import { Button, Paper } from "@mui/material";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LatLngExpression } from "leaflet";

type AppMapProps = {
  position?: LatLngExpression | undefined;
};

const AppMap = ({ position }: AppMapProps) => {
  return (
    <Paper sx={{ height: "300px", width: "60%" }} elevation={3}>
      <MapContainer
        key={position?.toString()}
        center={position}
        zoom={13}
        style={{ height: "100%", width: "100%" }}
        attributionControl={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
      </MapContainer>
    </Paper>
  );
};

export default AppMap;
