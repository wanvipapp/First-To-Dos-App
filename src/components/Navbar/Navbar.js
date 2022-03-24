import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import { useStyles, MaterialUISwitch } from "./styles";
import { setDarkMode } from "../../redux/darkMode";

import notebook from "../../images/Notebook.png";

const Navbar = () => {
  const darkMode = useSelector((state) => state.darkMode.isDark);
  
  const dispatch = useDispatch();

  const classes = useStyles();

  const handleSwitch = () => {
    dispatch(setDarkMode(darkMode));
  };
  

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="relative"
          sx={{ backgroundColor: `${darkMode ? "#212121" : "#65C18C"}` }}
        >
          <Toolbar>
            <img className={classes.img} src={notebook} alt="notebook" />
            <Typography
              variant="h4"
              className={classes.heading}
              sx={{ fontFamily: "Fredoka", fontWeight: "600", color: `${darkMode ? "#f5f5f5" :"#402b2e"}`, }}
            >
              TO-DOs
            </Typography>
            <MaterialUISwitch
              onClick={handleSwitch}
              className={classes.switch}
            />
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Navbar;
