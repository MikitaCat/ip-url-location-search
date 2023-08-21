import { Paper } from "@mui/material";
import React from "react";
import { SearchesList } from "../SearchesList/SearchesList";
import { AsideBlock, AsidePaper } from "./SideBar.styled";

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
