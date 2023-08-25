import {
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListSubheader,
  Tooltip,
} from "@mui/material";
import { Delete } from "@mui/icons-material";
import React from "react";
import { useAppSelector } from "../../redux/hooks/redux";

export const SearchesList = () => {
  const { history } = useAppSelector((state) => state.getLocationSlise);
  return (
    <List sx={{ maxWidth: "300px", width: "100%" }}>
      <ListSubheader>Already Searched:</ListSubheader>
      <Divider />
      {history.map((el, index) => {
        return (
          <ListItem key={index}>
            <Tooltip title={el.name} placement="bottom">
              <ListItemButton
                sx={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {el.name}
              </ListItemButton>
            </Tooltip>
            <IconButton edge="end" aria-label="delete">
              <Delete />
            </IconButton>
          </ListItem>
        );
      })}
    </List>
  );
};
