import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { Container, Fab, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { FormTextField, useStyles } from "./styles";
import AddIcon from "@mui/icons-material/Add";
import { addItem } from "../../../redux/formSlice";

const Form = () => {
  const dispatch = useDispatch();
  const inputRef = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    let inputEnter = inputRef.current.value;
    inputEnter = inputEnter.charAt(0).toUpperCase() + inputEnter.slice(1);
    if (inputEnter.length > 0) {
      dispatch(addItem({ content: inputEnter }));
    }

    inputRef.current.value = "";
  };

  const theme = useTheme();
  const classes = useStyles(theme);
  return (
    <Container className={classes.container}>
      <form onSubmit={handleFormSubmit}>
        <Grid container spacing={2} className={classes.grid}>
          <Grid item md={6} xs={8}>
            <FormTextField
              fullWidth={true}
              label="TO DO"
              id="to-do"
              name="content"
              inputRef={inputRef}
            />
          </Grid>
          <Grid item>
            <Fab
              style={{ backgroundColor: "#C1F4C5", color: "#402b2e" }}
              aria-label="add"
              onClick={handleFormSubmit}
            >
              <AddIcon />
            </Fab>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default Form;
