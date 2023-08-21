import styled from "@emotion/styled";
import { Paper } from "@mui/material";
import React from "react";

export const AsideBlock = styled.div`
  max-width: 250px;
  width: 100%;
  margin-right: 15px;
  display: flex;
  flex-direction: column;

  @media (max-width: 770px) {
    display: none;
  }
`;

export const AsidePaper = styled(Paper)({
  maxWidth: "300px",
  width: "100%",
  maxHeight: "300px",
  height: "100%",
  overflow: "auto",
}) as typeof Paper;
