import React, { FC, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home.tsx";
import Loader from "./components/formikInputs/Loader.tsx";
import "./index.css";
import Footer from "./components/formikInputs/Footer.tsx";
import { ThemeProvider, createTheme } from "@mui/material";
import NavBar from "./components/formikInputs/NavBar.tsx";
import InterestForm from "./pages/InterestForm.tsx";
import ScrollToTop from "./components/ScrollToTop";

declare module '@mui/material/styles' {
  interface Palette {
    custom: Palette['primary'];
  }
  interface PaletteOptions {
    custom?: PaletteOptions['primary'];
  }
}

const App: FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const theme = createTheme({
    palette: {
      primary: {
        main: "#78AFF0",
        contrastText: "#f5f5dc",
      },
      secondary: {
        main: "#0659B5",
        contrastText: "#000000",
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
      custom: { // Add custom palette option
        light: "#e54538",
        main: "#10a052",
        dark: "#f6bc18",
        contrastText: "#4683f0",
      },
    },
    typography: {
      fontFamily: "Product Sans, Inter, Arial, sans-serif",
      h1: {
        fontFamily: "Kdam Thmor Pro",
        fontWeight: 600,
        fontSize: "48px",
        lineHeight: "110%",
      },
      h2: {
        fontFamily: "Kdam Thmor Pro",
        fontWeight: 600,
        fontSize: "38px",
        lineHeight: "100%",
      },
      h3: {
        fontFamily: "Kdam Thmor Pro",
        fontWeight: 600,
        fontSize: "28px",
        lineHeight: "95%",
      },
      h4: {
        fontFamily: "Kdam Thmor Pro",
        fontWeight: 600,
        fontSize: "18px",
        lineHeight: "95%",
      },
      h5: {
        fontFamily: "Kdam Thmor Pro",
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
      <ScrollToTop />
      <div className="app-container gradient-bg">
        <ThemeProvider theme={theme}>
          {loading ? (
            <Loader /> // Display the Loader on initial load
          ) : (
            <>
             <NavBar />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/interest-form" element={<InterestForm/>} />
                <Route path="*" element="notfound"/>
              </Routes>
              <div style={{backgroundColor: '#f9f9ff', marginTop: '10vh'}}> 
                <Footer />
              </div>
              
            
            </>
          )}
        </ThemeProvider>
      </div>
    </Router>
  );
};

export default App;
