import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import React from "react";
import { HighlitedTableCell, InfoBlockPaper } from "./InfoBlock.styled";
import { InfoBlockProps } from "./InfoBlockProps";

const InfoBlock = ({ locationInfo, isLoading }: InfoBlockProps) => {
  return (
    <InfoBlockPaper>
      <Table>
        <TableBody>
          <TableRow>
            <HighlitedTableCell component="th" scope="row">
              IP adress:
            </HighlitedTableCell>
            <TableCell>{locationInfo?.query}</TableCell>
          </TableRow>

          <TableRow>
            <HighlitedTableCell component="th" scope="row">
              Country:
            </HighlitedTableCell>
            <TableCell>{locationInfo?.country}</TableCell>
          </TableRow>

          <TableRow>
            <HighlitedTableCell component="th" scope="row">
              City:
            </HighlitedTableCell>
            <TableCell>{locationInfo?.city}</TableCell>
          </TableRow>

          <TableRow>
            <HighlitedTableCell component="th" scope="row">
              Region Name:
            </HighlitedTableCell>
            <TableCell>{locationInfo?.regionName}</TableCell>
          </TableRow>

          <TableRow>
            <HighlitedTableCell component="th" scope="row">
              Latitude:
            </HighlitedTableCell>
            <TableCell>{locationInfo?.lat}</TableCell>
          </TableRow>

          <TableRow>
            <HighlitedTableCell
              component="th"
              scope="row"
              sx={{ borderBottom: "none" }}
            >
              Longitude:
            </HighlitedTableCell>
            <TableCell sx={{ borderBottom: "none" }}>
              {locationInfo?.lon}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </InfoBlockPaper>
  );
};

export default InfoBlock;
