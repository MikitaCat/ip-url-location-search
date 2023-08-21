import { Typography } from "@mui/material";
import React from "react";
import AppMap from "../Map/AppMap";
import InfoBlock from "../InfoBlock/InfoBlock";
import { DataDisplayProps } from "./DataDispalyTypes";
import { DataDisplayBlock } from "./DataDisplay.styled";

const DataDisplay = ({ title }: DataDisplayProps) => {
  return (
    <>
      <Typography>{title}</Typography>
      <DataDisplayBlock>
        <AppMap />
        <InfoBlock />
      </DataDisplayBlock>
    </>
  );
};

export default DataDisplay;
