import { AppBar, Drawer, IconButton, Toolbar, Typography } from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

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
            sx={{ mr: 2 }}
          >
            <MenuIcon onClick={() => setDraverOpened(true)} />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Search by Ip or Url
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer open={draverOpened} onClose={() => setDraverOpened(false)}>
        erererferfre
      </Drawer>
    </>
  );
};

export default Header;
