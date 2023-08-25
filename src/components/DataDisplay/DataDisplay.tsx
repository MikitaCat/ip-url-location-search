import { Typography } from "@mui/material";
import React from "react";
import AppMap from "../Map/AppMap";
import InfoBlock from "../InfoBlock/InfoBlock";
import { DataDisplayProps } from "./DataDispalyProps";
import { DataDisplayBlock } from "./DataDisplay.styled";

const DataDisplay = ({ title, locationInfo, isLoading }: DataDisplayProps) => {
  return (
    <>
      <Typography>{title}</Typography>
      <DataDisplayBlock>
        <AppMap
          // It is not required to do it. But the map without any
          // lat/lon expression looks like just a gray square and it is very ugly.
          // So, I decided to put some default prop. Lat/Lon of Warsaw, for example.
          latlong={
            locationInfo && locationInfo.lat
              ? [locationInfo?.lat, locationInfo?.lon]
              : [52.237049, 21.017532]
          }
        />
        <InfoBlock locationInfo={locationInfo} isLoading={isLoading} />
      </DataDisplayBlock>
    </>
  );
};

export default React.memo(DataDisplay);
