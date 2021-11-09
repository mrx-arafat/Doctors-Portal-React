import { Container, Grid } from "@mui/material";
import chair from "../../../../images/chair.png";
import React from "react";
import Calender from "../../../../Shared/Calender/Calender";

const AppointmentHeader = ({ date, setDate }) => {
  return (
    <div>
      <Container style={{ display: "flex", marginTop: "60px" }}>
        <Grid xs={12} md={6}>
          <Calender date={date} setDate={setDate}></Calender>
        </Grid>
        <Grid xs={12} md={6}>
          <img style={{ width: 400 }} src={chair} alt="" />
        </Grid>
      </Container>
    </div>
  );
};

export default AppointmentHeader;
