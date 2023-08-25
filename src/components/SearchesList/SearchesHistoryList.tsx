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
import { useAppDispatch, useAppSelector } from "../../redux/hooks/redux";
import locationSlice, {
  setLocationFromHistory,
} from "../../redux/reducers/locationSlice";

export const SearchesList = () => {
  const { history } = useAppSelector((state) => state.locationSlice);
  const dispatch = useAppDispatch();

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
                onClick={() => dispatch(setLocationFromHistory(el.name))}
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
