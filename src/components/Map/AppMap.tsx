import { Paper } from "@mui/material";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet/dist/images/marker-icon.png"; // Добавьте этот импорт
import "leaflet/dist/images/marker-shadow.png"; // Добавьте этот импор
import L, { LatLngExpression, Icon } from "leaflet";

type AppMapProps = {
  position?: LatLngExpression | undefined;
};

const AppMap = ({ position }: AppMapProps) => {
  const customIcon = new Icon({
    iconUrl: require("../../img/placeholder.png"),
    iconSize: [38, 38],
  });

  return (
    <Paper sx={{ height: "300px", width: "60%" }} elevation={3}>
      <MapContainer
        key={position?.toString()}
        center={position}
        zoom={9}
        style={{ height: "100%", width: "100%" }}
        attributionControl={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {position && <Marker position={position} icon={customIcon}></Marker>}
      </MapContainer>
    </Paper>
  );
};

export default AppMap;
