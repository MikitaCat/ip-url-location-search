import styled from "@emotion/styled";
import { Paper, TableCell, TableContainer } from "@mui/material";

export const InfoBlockPaper = styled(Paper)({
  width: "39%",
  height: "320px",
  "@media (max-width: 990px)": { width: "100%" },
}) as typeof Paper;

export const HighlitedTableCell = styled(TableCell)({
  fontWeight: "bold",
});
