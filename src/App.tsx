import React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme } from "./theme";
import Footer from "./components/Footer";
import Banner from "./components/Banner";

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Banner />
    <Footer />
  </ThemeProvider>
);

export default App;
