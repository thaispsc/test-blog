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
    info: {
      light: "#EDEDED",
      main: "#BABABA",
      dark: "#838383",
    },
  },
  typography: {
    h1: { fontSize: "2rem", fontWeight: 700 },
    h2: { fontSize: "1.5rem", fontWeight: 600 },
    body1: { fontSize: "1rem", marginBottom: "8px" },
  },
});

export default theme;
