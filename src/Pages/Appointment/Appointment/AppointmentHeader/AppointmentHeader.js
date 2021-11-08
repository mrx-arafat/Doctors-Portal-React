import { Container, Grid } from "@mui/material";
import chair from "../../../../images/chair.png";
import React from "react";
import Calender from "../../../../Shared/Calender/Calender";

const AppointmentHeader = () => {
  return (
    <div>
      <h3>appointment header </h3>

      <Container>
        <Grid xs={12} md={6}>
          <Calender></Calender>
        </Grid>
        <Grid xs={12} md={6}>
          <img style={{ width: 400, marginTop: "-110px" }} src={chair} alt="" />
        </Grid>
      </Container>
    </div>
  );
};

export default AppointmentHeader;
