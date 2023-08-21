import styled from "@emotion/styled";
import { Paper, TableCell } from "@mui/material";

export const InfoBlockPaper = styled(Paper)({
  height: "300px",
  width: "39%",
  padding: "5px",
  "@media (max-width: 990px)": { width: "100%" },
}) as typeof Paper;

export const HighlitedTableCell = styled(TableCell)({
  fontWeight: "bold",
});
