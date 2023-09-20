import { AppBar, Drawer, IconButton, Toolbar, Typography } from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { SearchesList } from "../SearchesList/SearchesHistoryList";

const Header = () => {
  const [drawerOpened, setDrawerOpened] = useState(false);
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{
              mr: 2,
              display: "none",
              "@media (max-width: 770px)": {
                display: "block",
              },
            }}
          >
            <MenuIcon onClick={() => setDrawerOpened(true)} />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Search by IP or URL
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer open={drawerOpened} onClose={() => setDrawerOpened(false)}>
        <SearchesList drawerOpen={setDrawerOpened} />
      </Drawer>
    </>
  );
};

export default Header;
