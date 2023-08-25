import styled from "@emotion/styled";
import { Paper } from "@mui/material";

export const AppMapPaperStyled = styled(Paper)({
  height: "320px",
  width: "60%",
  "@media (max-width: 990px)": { width: "100%", marginBottom: "10px" },
}) as typeof Paper;
