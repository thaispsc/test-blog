import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    background: {
      default: "#000000",
    },
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "#000000",
    },
  },
  typography: {
    h1: { fontSize: "2rem" },
    body1: { fontSize: "1rem" },
  },
});

export default theme;
