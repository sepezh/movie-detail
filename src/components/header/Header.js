import * as React from "react";
import {
  TextField,
  Autocomplete,
  AppBar,
  Toolbar,
  Typography,
} from "@mui/material";
import "./Header.css";

const Header = () => {
  return (
    <AppBar position="relative">
      <Toolbar className="toolbar">
        <Typography
          variant="h6"
          color="inherit"
          noWrap
          sx={{ px: 2, mr: 5, mt: 0.25 }}
          className="logo"
        >
          MOVIE
          <br />
          DETAIL
        </Typography>
        <Autocomplete
          disablePortal
          size="small"
          sx={{ width: 700, mr: 5 }}
          id="combo-box-demo"
          options={[]}
          renderInput={(params) => (
            <TextField {...params} label="Search Movie" />
          )}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
