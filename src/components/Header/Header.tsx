import { AppBar, Drawer, IconButton, Toolbar, Typography } from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { SearchesList } from "../SearchesList/SearchesHistoryList";

const Header = () => {
  const [draverOpened, setDraverOpened] = useState(false);
  return (
    <>
      <AppBar position="static">
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
            <MenuIcon onClick={() => setDraverOpened(true)} />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Search by IP or URL
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer open={draverOpened} onClose={() => setDraverOpened(false)}>
        <SearchesList />
      </Drawer>
    </>
  );
};

export default Header;
