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
        <AppMap />
        <InfoBlock locationInfo={locationInfo} isLoading={isLoading} />
      </DataDisplayBlock>
    </>
  );
};

export default React.memo(DataDisplay);
