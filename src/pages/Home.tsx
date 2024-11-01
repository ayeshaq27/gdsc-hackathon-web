import React, { useState, useEffect } from "react";
import { Box, Typography, Grid, Container, Button } from "@mui/material";
import "./Home.css";
import "../App.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import FAQAccordion from "../components/formikInputs/FAQAccordian";

const calculateTimeLeft = () => {
  const now = new Date();
  const currentTimeUTC = Date.UTC(
    now.getUTCFullYear(),
    now.getUTCMonth(),
    now.getUTCDate(),
    now.getUTCHours(),
    now.getUTCMinutes(),
    now.getUTCSeconds()
  );

  const targetDateUTC = Date.UTC(2025, 1, 14, 0, 0, 0);
  const difference = targetDateUTC - currentTimeUTC;

  let timeLeft = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };

    const timezoneOffset = now.getTimezoneOffset() / 60;
    timeLeft.hours = (timeLeft.hours + timezoneOffset + 24) % 24;
  }

  return timeLeft;
};

const Home: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  useEffect(() => {
    const handleScroll = () => {
      const hackathonContainer = document.querySelector(".hackathon-container");
      console.log("hackathonContainer:", hackathonContainer); // Add this line
      if (hackathonContainer) {
        const hackathonItems = document.querySelectorAll(".hackathon-item");
        const containerTop = hackathonContainer.getBoundingClientRect().top;
        const containerBottom =
          hackathonContainer.getBoundingClientRect().bottom;

        hackathonItems.forEach((item, index) => {
          if (containerTop < window.innerHeight && containerBottom > 0) {
            item.classList.add("slide-in");
          } else {
            item.classList.remove("slide-in");
          }
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container className="home-container">
      <Box className="heading-container" id="home">
        <div className="wheel-wrapper">
          <img
            src={`${process.env.PUBLIC_URL}/SDGwheel.svg`}
            alt="SDG Wheel"
            className="wheel"
          />
        </div>
        <div className="heading">
          <Typography variant="h1" color="secondary.main" className="subH">
            GDG TMU
          </Typography>
          <Typography
            variant="h1"
            className="main-heading"
            color="primary.contrastText"
          >
            SOLUTION
            <br />
            HACKS
          </Typography>
          <Typography variant="h1" color="secondary.main" className="subH">
            FEB. 14 - 16, 2025
          </Typography>
        </div>
      </Box>

      <Box className='bighbox' id="about">
      <Container>
          <Grid
            container
            spacing={2}
            justifyContent="center"
            sx={{
              marginTop: "2vh",
              flexDirection: {
                xs: "column-reverse", // Stack vertically on extra-small screens
                md: "row", // Align in a row on medium and larger screens
              },
            }}
          >
            <Grid
              item
              xs={12}
              md={6}
              sx={{ textAlign: "center", paddingRight: "5vw" }}
            >
              <Typography
                variant="h1"
                color="secondary.contrastText"
                className="second-heading"
                sx={{
                  marginBottom: "2vh",
                  order: { xs: 1, md: 1 },
                  marginTop: "3vh",
                  zIndex:2
                }}
              >
                TORONTO'S BIGGEST HACKATHON
              </Typography>
              <Typography
                className="text-reg font-nm-16"
                color="secondary.contrastText"
                sx={{ order: { xs: 3, md: 2 },zIndex:2 }}
              >
                Join us this February for an unforgettable 36 hour event, where more than 1,000 hackers will come together to connect, build, and grow. Enjoy free meals, awesome swag, fun activities, and much more! 
 

                <br /> <br />At Solution Hacks TO, we welcome those who dream big and love to create. No matter your skill level, we want you to come out and create something impactful.
          
              </Typography>
              <Button
          variant="contained"
          color="primary"
          className="bttnF"
          sx={{ borderRadius: "40px", marginTop: "5vh" }}
          endIcon={<ArrowForwardIosIcon />}
          href="/interest-form"
        >
          INTEREST FORM
        </Button>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex", // Flexbox to center the content
                justifyContent: "flex-start", // Centers the content horizontally
                alignItems: "center", // Centers the content vertically
              }}
            >
              <img
                src={`${process.env.PUBLIC_URL}/cn.svg`}
                alt="CN towe"
                className="cntower"
                
              />
            </Grid>
           
          </Grid>
        </Container>

      </Box>
     

      {/* here */}
      <Container className="timeP" id="application">
        <Typography variant="h2" color="primary.contrastText">
          ROAD TO SOLUTIONHACKS
        </Typography>
        <Grid
          container
          spacing={2}
          justifyContent="center"
          className="timer-grid"
        >
          <Grid item className="timer-item">
            <Box className="timer-box">
              <Typography
                variant="h1"
                className="timer-value"
                color="custom.dark"
              >
                {timeLeft.days}
              </Typography>
            </Box>
            <Typography variant="h4" className="timer-label">
              DAYS
            </Typography>
          </Grid>

          <Grid item className="timer-item">
            <Box className="timer-box">
              <Typography
                variant="h1"
                className="timer-value"
                color="custom.dark"
              >
                {timeLeft.hours}
              </Typography>
            </Box>
            <Typography variant="h4" className="timer-label">
              HOURS
            </Typography>
          </Grid>
          <Typography
            variant="h1"
            className="timer-colon"
            color="secondary.contrastText"
          >
            :
          </Typography>
          <Grid item className="timer-item">
            <Box className="timer-box">
              <Typography
                variant="h1"
                className="timer-value"
                color="custom.dark"
              >
                {timeLeft.minutes}
              </Typography>
            </Box>
            <Typography variant="h4" className="timer-label">
              MINUTES
            </Typography>
          </Grid>
          <Typography
            variant="h1"
            className="timer-colon hide-on-mobile"
            color="secondary.contrastText"
          >
            :
          </Typography>
          <Grid item className="timer-item hide-on-mobile">
            <Box className="timer-box">
              <Typography
                variant="h1"
                className="timer-value"
                color="custom.dark"
              >
                {timeLeft.seconds}
              </Typography>
            </Box>
            <Typography variant="h4" className="timer-label">
              SECONDS
            </Typography>
          </Grid>
        </Grid>
        <Typography
          color="primary.contrastText"
          style={{ marginTop: "5vh" }}
          className="text-reg font-lg-24"
        >
          Applications coming soon! For now, fill out this interest form so we
          can contact you when they open!
        </Typography>
        <Button
          variant="contained"
          color="primary"
          className="bttnF"
          sx={{ borderRadius: "40px", marginTop: "5vh" }}
          endIcon={<ArrowForwardIosIcon />}
          href="/interest-form"
        >
          INTEREST FORM
        </Button>
      </Container>

      <Container className="SPONSOR" id="sponsor">
        <Container>
        <Typography variant="h2" color="secondary.contrastText">
        SPONSOR US - COMING SOON
        </Typography>
        
        <Typography
          color="secondary.contrastText"
          style={{ marginTop: "5vh" }}
          className="text-reg font-lg-24"
        >
          Don’t miss out on the opportunity to be part of this unforgettable hackathon! Showcase your brand to top talent, innovators, and future leaders.
        </Typography>
        {/* <Button
          variant="contained"
          color="primary"
          className="bttnF"
          sx={{ borderRadius: "40px", marginTop: "5vh" }}
          endIcon={<ArrowForwardIosIcon />}
          href="/team"
        >
          BECOME A SPONSOR
        </Button> */}
        </Container>
      </Container>

      
        <Container className="faq" id='faq'>
        <Typography variant="h1" color="primary.contrastText" style={{marginBottom: "5vh"}}>
        FAQS
        </Typography>
        
       <FAQAccordion/>
       </Container>
      
    </Container>
  );
};

export default Home;
