import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Checkbox, Typography, Paper, Box } from "@mui/material";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import { deleteItem } from "../../../../redux/formSlice";

const theme = createTheme({
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 500,
      ipad: 700,
      laptop: 1024,
      desktop: 1200,
    },
  },
});

const ControlPaperSize = styled(Paper)(({ theme }) => ({
  [theme.breakpoints.down("tablet")]: {
    width: "260px",
  },
  [theme.breakpoints.up("tablet")]: {
    width: "350px",
  },
  [theme.breakpoints.up("ipad")]: {
    width: "450px",
  },
  [theme.breakpoints.up("laptop")]: {
    width: "570px",
  },
}));

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Post = (props) => {
  const dispatch = useDispatch();
  const [isDeleted, setIsDeleted] = useState(false);
  const darkMode = useSelector((state) => state.darkMode.isDark);

  const checked = () => {
    setIsDeleted((prevValue) => !prevValue);
    setTimeout(() => {
      dispatch(deleteItem(props.id));
    }, 500);
  };

  const fontColor = darkMode ? "#f5f5f5" : "";

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          margin: "10px auto",
          maxWidth: "100%",
          border: "5px solid ",
          borderColor: `${darkMode ? "#FFBED8" : "#FF7BA9"}`,
          borderRadius: "10px",
          padding: "10px 20px 10px 20px",
        }}
      >
        <ControlPaperSize
          elevation={0}
          sx={{ backgroundColor: `${darkMode ? "#616161" : ""}` }}
        >
          <Grid container alignItems="center" sx={{ color: `${fontColor}` }}>
            <Grid
              item
              justifyContent="center"
              sx={{
                textAlign: "center",
                display: "fixed",
                paddingRight: "10px",
              }}
            >
              <Checkbox
                {...label}
                sx={{
                  color: "#C1F4C5",
                  "&.Mui-checked": {
                    color: "#cdf6d0",
                  },
                  "& .MuiSvgIcon-root": { fontSize: 30 },
                }}
                onChange={checked}
              />
            </Grid>
            <Grid item>
              <Grid container spacing={2}>
                <Grid item>
                  <Typography variant="body2">{props.date}</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2">{props.time}</Typography>
                </Grid>
              </Grid>
              {isDeleted ? (
                <Typography
                  variant="h6"
                  align="justify"
                  sx={{
                    textDecoration: "line-through",
                    color: "#bcaaa4",
                    fontFamily: "Courgette",
                    fontWeight: "bold",
                    fontSize: "1.4em",
                  }}
                >
                  {props.contents}
                </Typography>
              ) : (
                <Typography
                  variant="h6"
                  align="justify"
                  sx={{
                    // textDecoration: `${isDeleted && "line-through"}`,
                    fontFamily: "Courgette",
                    fontWeight: "bold",
                    fontSize: "1.4em",
                  }}
                >
                  {props.contents}
                </Typography>
              )}
            </Grid>
          </Grid>
        </ControlPaperSize>
      </Box>
    </ThemeProvider>
  );
};

export default Post;
