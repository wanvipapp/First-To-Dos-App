import React from "react";
import { useSelector } from "react-redux";
import { Container, Grid } from "@mui/material";
import useStyles from "./styles";
import Form from "./Form/Form";
import Posts from "./Posts/Posts";

const Page = () => {
  const darkMode = useSelector((state) => state.darkMode.isDark);
  const classes = useStyles();
  return (
    <>
      <Container
        sx={{
          flexGrow: 1,
          backgroundColor: `${darkMode ? "#616161" : ""}`,
        }}
        className={classes.paper}
      >
        <Form />
      </Container>
      <Grid
        container
        sx={{
          flexGrow: 1,
          backgroundColor: `${darkMode ? "#616161" : ""}`,
          padding: "10px 20px 10px 20px",
          justifyContent: "center",
          margin: "0 auto",
        }}
        className={classes.paper}
      >
        <Grid item={true}>
          <Posts />
        </Grid>
      </Grid>
    </>
  );
};

export default Page;
