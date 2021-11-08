import React from "react";
import Navigation from "../../../Shared/Navigation/Navigation";
import AppointmentHeader from "./AppointmentHeader/AppointmentHeader";
import AvailableAppointments from "./AvailableAppointments/AvailableAppointments";

const Appointment = () => {
  const [date, setDate] = React.useState(new Date());
  return (
    <div>
      <h1>hello Appointment </h1>
      <Navigation></Navigation>
      <AppointmentHeader date={date} setDate={setDate}></AppointmentHeader>
      <AvailableAppointments date={date}></AvailableAppointments>
    </div>
  );
};

export default Appointment;
