import { Container, Grid } from "@mui/material";
import React from "react";
import login from "../../../images/login.png";

const Login = () => {
  return (
    <Container style={{ display: "flex" }}>
      <Grid xs={8} md={6}></Grid>
      <Grid xs={8} md={6}>
        <img src={login} alt="" />
      </Grid>
    </Container>
  );
};

export default Login;
