import React from "react";
import { PreloaderContainerStyled } from "./Preloader.styled";
import { CircularProgress } from "@mui/material";

const Preloader = () => {
  return (
    <PreloaderContainerStyled>
      <CircularProgress size={90} />
    </PreloaderContainerStyled>
  );
};

export default Preloader;
