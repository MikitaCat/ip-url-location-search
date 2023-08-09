import {
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListSubheader,
  Paper,
  Tooltip,
} from "@mui/material";
import { Delete } from "@mui/icons-material";
import React from "react";

const array = [
  "Fisrt1111111111111111",
  "Second22222222222222222",
  "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  "https://www.example.com",
  "https://www.openai.com/research/",
  "255.255.255.0.",
  "192.0.2.1",
  "88.156.138.82",
  "255.255.255.0.",
  "192.0.2.1",
  "88.156.138.82",
  "255.255.255.0.",
  // "192.0.2.1",
  // "88.156.138.82",
];

export const SearchesList = () => {
  return (
    <Paper
      component="aside"
      sx={{
        maxHeight: "300px",
        height: "100%",
        overflow: "auto",
      }}
      elevation={3}
    >
      <List>
        <ListSubheader>Already Searched:</ListSubheader>
        <Divider />
        {array.map((el, index) => {
          return (
            <ListItem key={index}>
              <Tooltip title={el} placement="bottom">
                <ListItemButton
                  sx={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {el}
                </ListItemButton>
              </Tooltip>
              <IconButton edge="end" aria-label="delete">
                <Delete />
              </IconButton>
            </ListItem>
          );
        })}
      </List>
    </Paper>
  );
};
