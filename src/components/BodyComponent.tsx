import { Card, Grid, Typography } from "@mui/material";
import React from "react";
import "../css/App.css";

export const BodyComponent: React.FC = () => {
  const weatherData = [
    {
      city: "Washington DC",
      Temperature: "90 degrees",
      FeelsLike: "100 degrees",
      AirQuality: "Good",
    },
    {
      city: "New York City",
      Temperature: "50 degrees",
      FeelsLike: "55 degrees",
      AirQuality: "Good",
    },
    {
      city: "Los Angeles",
      Temperature: "100 degrees",
      FeelsLike: "110 degrees",
      AirQuality: "Bad",
    },
  ];

  return (
    <>
      {weatherData.map((weather) => {
        return (
          <Grid container padding={2} justifyContent={"space-evenly"}>
            <Grid item sm={5} style={{ padding: "15px" }}>
              <Card variant="elevation">
                <Typography style={{ padding: "10px" }}>City:</Typography>
                <Typography style={{ padding: "10px" }}>
                  {weather.city}
                </Typography>
              </Card>
            </Grid>
            <Grid item sm={5} style={{ padding: "15px" }}>
              <Card variant="elevation">
                <Typography style={{ padding: "10px" }}>
                  Temperature:
                </Typography>
                <Typography style={{ padding: "10px" }}>
                  {weather.Temperature}
                </Typography>
              </Card>
            </Grid>
            <Grid item sm={5} style={{ padding: "15px" }}>
              <Card variant="elevation">
                <Typography style={{ padding: "10px" }}>Feels Like:</Typography>
                <Typography style={{ padding: "10px" }}>
                  {weather.FeelsLike}
                </Typography>
              </Card>
            </Grid>
            <Grid item sm={5} style={{ padding: "15px" }}>
              <Card variant="elevation">
                <Typography style={{ padding: "10px" }}>
                  Air Quality:
                </Typography>
                <Typography style={{ padding: "10px" }}>
                  {weather.AirQuality}
                </Typography>
              </Card>
            </Grid>
          </Grid>
        );
      })}
    </>
  );
};
