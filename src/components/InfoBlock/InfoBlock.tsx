import { Table, TableBody, TableCell, TableRow } from "@mui/material";
import React from "react";
import { HighlitedTableCell, InfoBlockPaper } from "./InfoBlock.styled";
import { InfoBlockProps } from "./InfoBlockProps";

const InfoBlock = ({}: InfoBlockProps) => {
  return (
    <InfoBlockPaper>
      <Table>
        <TableBody>
          <TableRow>
            <HighlitedTableCell component="th" scope="row">
              IP adress:
            </HighlitedTableCell>
            <TableCell>jasxjnjansx</TableCell>
          </TableRow>

          <TableRow>
            <HighlitedTableCell component="th" scope="row">
              Country:
            </HighlitedTableCell>
            <TableCell>jasxjnjansx</TableCell>
          </TableRow>

          <TableRow>
            <HighlitedTableCell component="th" scope="row">
              City:
            </HighlitedTableCell>
            <TableCell>jasxjnjansx</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </InfoBlockPaper>
  );
};

export default InfoBlock;
