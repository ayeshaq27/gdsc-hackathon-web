import React, { useState, useEffect } from "react";
import { Box, Typography, Grid, useTheme, Container, SxProps } from "@mui/material";
import "./Home.css";
import "../App.css";

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

  const targetDateUTC = Date.UTC(2025, 0, 1, 0, 0, 0); // January 1, 2025, 00:00:00 UTC

  console.log("Current UTC Time (ms):", currentTimeUTC);
  console.log("Target UTC Time (ms):", targetDateUTC);

  const difference = targetDateUTC - currentTimeUTC;

  console.log("Difference in milliseconds:", difference);

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

    // Adjust the hours based on the local time offset
    const timezoneOffset = now.getTimezoneOffset() / 60;
    timeLeft.hours = (timeLeft.hours + timezoneOffset + 24) % 24;
  }

  console.log("Calculated Time Left:", timeLeft);

  return timeLeft;
};

const Home: React.FC = () => {
  const theme = useTheme();
  
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <Box className="home-container">
            <img src={`${process.env.PUBLIC_URL}/logo.svg`} alt="Logo" className="logo" width={690} height={120} />
      <Typography variant="h1" className="main-heading">
      COMING SOON: GDSC TMU Hacks
      </Typography>
      
      <Grid
        container
        spacing={2}
        justifyContent="center"
        className="timer-grid"
      >
        <Grid item>
          <Box className="timer-box">
            <Typography variant="h3" className="timer-value">
              {timeLeft.days}
            </Typography>
          </Box>
          <Typography variant="h6" className="timer-label">
            DAYS
          </Typography>
        </Grid>
        <Grid item>
          <Box className="timer-box">
            <Typography variant="h3" className="timer-value">
              {timeLeft.hours}
            </Typography>
          </Box>
          <Typography variant="h6" className="timer-label">
            HOURS
          </Typography>
        </Grid>
        <Grid item>
          <Box className="timer-box">
            <Typography variant="h3" className="timer-value">
              {timeLeft.minutes}
            </Typography>
          </Box>
          <Typography variant="h6" className="timer-label">
            MINUTES
          </Typography>
        </Grid>
        <Grid item>
          <Box className="timer-box">
            <Typography variant="h3" className="timer-value">
              {timeLeft.seconds}
            </Typography>
          </Box>
          <Typography variant="h6" className="timer-label">
            SECONDS
          </Typography>
        </Grid>
      </Grid>
      <Container sx={{marginTop: '5vh'}}>
        <Typography className="text-bold font-lg-24">
          January 1st, 2025
        </Typography>
      </Container>
      
    </Box>
  );
};

export default Home;
