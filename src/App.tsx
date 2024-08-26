import React, { FC, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home.tsx";
import Loader from "./components/formikInputs/Loader.tsx";
import "./index.css";
import Footer from "./components/formikInputs/Footer.tsx";
import { ThemeProvider, createTheme } from "@mui/material";

const App: FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const theme = createTheme({
    palette: {
      primary: {
        main: "#ffffff",
        contrastText: "#000000",
      },
      secondary: {
        main: "#4285f4",
        contrastText: "#ffffff",
      },
      text: {
        primary: "#000000",
      },
      error: {
        main: "#EF5D54",
      },
      success: {
        main: "#3EAA76",
      },
      info: {
        main: "#6F757B",
        contrastText: "#5454EF",
      },
    },
    typography: {
      fontFamily: "Product Sans, Inter, Arial, sans-serif",
      h1: {
        fontFamily: "Product Sans, Arial, sans-serif",
        fontWeight: 600,
        fontSize: "48px",
        lineHeight: "110%",
      },
      h2: {
        fontFamily: "Product Sans, Arial, sans-serif",
        fontWeight: 600,
        fontSize: "38px",
        lineHeight: "100%",
      },
      h3: {
        fontFamily: "Product Sans, Arial, sans-serif",
        fontWeight: 600,
        fontSize: "28px",
        lineHeight: "95%",
      },
      h4: {
        fontFamily: "Product Sans, Arial, sans-serif",
        fontWeight: 600,
        fontSize: "18px",
        lineHeight: "95%",
      },
      h5: {
        fontFamily: "Product Sans, Arial, sans-serif",
        fontWeight: 600,
        fontSize: "8px",
        lineHeight: "90%",
      },
    },
    components: {
      MuiTypography: {
        styleOverrides: {
          h2: `
          @media only screen and (max-width: 500px) {
            font-size: 45px;
          }
          `,
        },
      },
      MuiButton: {
        styleOverrides: {
          contained: {
            boxShadow: "none",
          },
          sizeSmall: `
            padding-top: 12px;
            padding-bottom: 12px;
            padding-left: 24px;
            padding-right: 24px;
            font-size: 12px;
            width: 245px;
            text-transform: none;
            font-family: Product Sans, Inter, sans-serif;
            font-weight: 600;
            line-height: 150%;
            word-wrap: break-word;
          `,
          sizeMedium: `
            padding-top: 16px;
            padding-bottom: 16px;
            padding-left: 32px;
            padding-right: 32px;
            font-size: 14px;
            text-transform: none;
            font-family: Product Sans, Inter, sans-serif;
            font-weight: 600;
            line-height: 150%;
            word-wrap: break-word;
          `,
          sizeLarge: `
            padding-top: 20px;
            padding-bottom: 20px;
            padding-left: 24px;
            padding-right: 24px;
            font-size: 16px;
            width: 279px;
            text-transform: none;
            font-family: Product Sans, Inter, sans-serif;
            font-weight: 600;
            line-height: 150%;
            word-wrap: break-word;
          `,
        },
      },
    },
  });

  return (
    <Router>
      <div className="app-container">
        <ThemeProvider theme={theme}>
          {loading ? (
            <Loader /> // Display the Loader on initial load
          ) : (
            <>
              {/**  <NavBar />*/}
              <Routes>
                <Route path="/" element={<HomePage />} />
              </Routes>
              
              
            
            </>
          )}
        </ThemeProvider>
      </div>
    </Router>
  );
};

export default App;
