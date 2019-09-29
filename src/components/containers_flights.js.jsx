import React from "react";
import { useState, useEffect } from "react";
import Header from "./header.js";
import Flights from "./flights.js";

const ContainerFlights = ({ fetchedFlights }) => {
  const [flights, setFlights] = useState(fetchedFlights || []);

  useEffect(() => {
    setFlights(fetchedFlights);
  }, [fetchedFlights]);

  // do resort here

  return (
    <div>
      <Header />
      <Flights flights={flights} />
    </div>
  );
};

export default ContainerFlights;
