import { Paper } from "@mui/material";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { LatLngExpression, Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import { AppMapPaperStyled } from "./AppMap.styled";

const AppMap = ({ latlong }: any) => {
  const customIcon = new Icon({
    iconUrl: require("../../img/placeholder.png"),
    iconSize: [38, 38],
  });

  return (
    <AppMapPaperStyled>
      <MapContainer
        key={latlong ? latlong.toString() : ""}
        center={latlong}
        zoom={15}
        style={{ height: "100%", width: "100%" }}
        attributionControl={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {latlong && <Marker position={latlong} icon={customIcon}></Marker>}
      </MapContainer>
    </AppMapPaperStyled>
  );
};

export default AppMap;
