import {
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListSubheader,
  Tooltip,
  Typography,
} from "@mui/material";
import { Delete } from "@mui/icons-material";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/redux";
import {
  setLocationFromHistory,
  deleteHistoryPoint,
} from "../../redux/reducers/locationSlice";
import { SearchesListProps } from "./SearchesListProps";

export const SearchesList = ({ drawerOpen }: SearchesListProps) => {
  const { history } = useAppSelector((state) => state.locationSlice);
  const dispatch = useAppDispatch();

  const handleButtonClick = (name: string) => {
    dispatch(setLocationFromHistory(name));
    if (drawerOpen) {
      drawerOpen(false);
    }
  };

  return (
    <List sx={{ maxWidth: "300px", width: "100%" }}>
      <ListSubheader>Already Searched:</ListSubheader>
      <Divider />
      {history.length !== 0 ? (
        history.map((el, index) => {
          return (
            <ListItem key={index}>
              <Tooltip title={el.name} placement="bottom">
                <ListItemButton
                  sx={{
                    paddingLeft: "8px",
                  }}
                  onClick={() => handleButtonClick(el.name)}
                >
                  {el.name}
                </ListItemButton>
              </Tooltip>
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => dispatch(deleteHistoryPoint(el.name))}
              >
                <Delete />
              </IconButton>
            </ListItem>
          );
        })
      ) : (
        <Typography sx={{ textAlign: "center", marginTop: "15px" }}>
          No Searches Yet
        </Typography>
      )}
    </List>
  );
};
