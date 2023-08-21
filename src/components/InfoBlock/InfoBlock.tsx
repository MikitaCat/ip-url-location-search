import { Paper } from "@mui/material";
import React from "react";

const InfoBlock = () => {
  return (
    <Paper
      sx={{
        height: "300px",
        width: "39%",
        padding: "5px",
        "@media (max-width: 990px)": { width: "100%" },
      }}
      elevation={3}
    >
      soksekeconwcon
    </Paper>
  );
};

export default InfoBlock;
