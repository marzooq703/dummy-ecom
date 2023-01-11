import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";

const theme = createTheme({
  palette: {
    primary: {
      light: "#F78E7E",
      main: "#F7715D",
      dark: "#002884",
      contrastText: "#F0E9E8",
    },
    secondary: {
      light: "#F8DBD3",
      main: "#FFD9CE",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
