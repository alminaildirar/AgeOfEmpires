import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
import Home from "../pages/Home";
import Units from "../pages/Units";

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Age Of Empires
          </Typography>
          <NavLink to="/" element={<Home />}>
            Home
          </NavLink>
          <NavLink to="/units" element={<Units />} style={{ margin: "0 25px" }}>
            Units
          </NavLink>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
