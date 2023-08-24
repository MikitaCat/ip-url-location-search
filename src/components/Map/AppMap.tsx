import { Paper } from "@mui/material";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { LatLngExpression, Icon } from "leaflet";
import { useEffect, useLayoutEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import { useAppSelector } from "../../redux/hooks/redux";

const AppMap = () => {
  const customIcon = new Icon({
    iconUrl: require("../../img/placeholder.png"),
    iconSize: [38, 38],
  });

  const [locat, setLocation] = useState<LatLngExpression>([22.5, 22.5]);

  const { locationInfo, isLoading, error } = useAppSelector(
    (state) => state.getLocationSlise
  );

  // function generateRandomLocation(): LatLngExpression {
  //   const minLat = -90;
  //   const maxLat = 90;
  //   const minLng = -180;
  //   const maxLng = 180;

  //   const randomLat = Math.random() * (maxLat - minLat) + minLat;
  //   const randomLng = Math.random() * (maxLng - minLng) + minLng;

  //   return [randomLat, randomLng];
  // }

  // const locat = generateRandomLocation();

  // useEffect(() => {
  //   generateRandomLocation();
  // }, []);

  return (
    <Paper
      sx={{
        height: "300px",
        width: "60%",
        "@media (max-width: 990px)": { width: "100%", marginBottom: "10px" },
      }}
      elevation={3}
    >
      <MapContainer
        key={locat?.toString()}
        center={locat}
        zoom={13}
        style={{ height: "100%", width: "100%" }}
        attributionControl={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {locat && <Marker position={locat} icon={customIcon}></Marker>}
      </MapContainer>
    </Paper>
  );
};

export default AppMap;
