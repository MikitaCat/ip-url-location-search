import { Paper } from "@mui/material";
import React from "react";
import { SearchesList } from "../SearchesList/SearchesHistoryList";
import { AsideBlock, AsidePaper } from "./SideBar.styled";
import { useAppSelector } from "../../redux/hooks/redux";

const Sidebar = () => {
  return (
    <AsideBlock>
      <AsidePaper component="aside" elevation={3}>
        <SearchesList />
      </AsidePaper>
    </AsideBlock>
  );
};

export default Sidebar;
