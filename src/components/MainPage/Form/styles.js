import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

export const FormTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#FF7BA9",
  },

  "& .MuiInput-underline:after": {
    borderBottomColor: "#C1F4C5",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#C1F4C5",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#C1F4C5",
    },
  },
});

export const useStyles = makeStyles((theme) => ({
  grid: {
    justifyContent: "center",
    flexGrow: 1,
    display: "flex",
  },
  container: {
    marginBottom: "20px",
  },
}));
