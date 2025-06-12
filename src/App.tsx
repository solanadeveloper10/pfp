import React, { useEffect } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme } from "./theme";
import Footer from "./components/Footer";
import Banner from "./components/Banner";

const App: React.FC = () => {
  useEffect(() => {
    const hoverTarget = document.getElementById("hover1");

    const cursor = document.getElementById("custom-cursor");

    if (cursor && hoverTarget) {
      hoverTarget.addEventListener("mouseenter", () => {
        cursor.style.width = "64px";
        cursor.style.height = "64px";
      });

      hoverTarget.addEventListener("mouseleave", () => {
        cursor.style.width = "32px";
        cursor.style.height = "32px";
      });

      hoverTarget.addEventListener("click", () => {
        cursor.style.width = "32px";
        cursor.style.height = "32px";
      });
    }

    const moveCursor = (e: { clientX: number; clientY: number }) => {
      if (cursor) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      }
    };

    document.addEventListener("mousemove", moveCursor);
    return () => document.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <img id='custom-cursor' src='/typelogo.svg' />
      <CssBaseline />
      <Banner />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
