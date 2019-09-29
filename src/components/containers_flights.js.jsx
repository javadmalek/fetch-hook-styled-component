import React from "react";
import Header from "./header.js";
import Flights from "./flights.js";

const ContainerFlights = props => {
  return (
    <div>
      <Header />
      <Flights />
    </div>
  );
};

export default ContainerFlights;
