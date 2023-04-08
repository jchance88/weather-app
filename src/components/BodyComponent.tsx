import { Card, Grid } from "@mui/material";
import React from "react";

interface BodyComponentProps {
  city: string;
  country: string;
}

export const BodyComponent: React.FC<BodyComponentProps> = ({
  city,
  country,
}) => {
  return (
    <Grid container paddingTop={2} justifyContent={"center"}>
      <Grid item sm={10}>
        <Card variant="elevation">TEST</Card>
      </Grid>
    </Grid>
  );
};
