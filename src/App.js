import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Page from "./components/MainPage/Page";
import { Box, CssBaseline, GlobalStyles } from "@mui/material";
import { useSelector } from "react-redux";

function App() {
  const darkMode = useSelector((state) => state.darkMode.isDark);
  return (
    <>
      <CssBaseline />
      <GlobalStyles
        styles={{ body: { backgroundColor: `${darkMode ? "#616161" : ""}` } }}
      />
      <Box
        sx={{
          "&.MuiBox-root": {
            padding: 0,
            margin: 0,
          },
        }}
      >
        <Navbar />
        <Page />
      </Box>
    </>
  );
}

export default App;
