import React from "react";
import { useState, useEffect, useCallback } from "react";
import Header from "./header.js";
import Flights from "./flights.js";
import { sortByFn } from "./helper";

const ContainerFlights = ({ fetchedFlights }) => {
  const [flights, setFlights] = useState(fetchedFlights);
  const [sortByType, setSortByType] = useState(null);

  useEffect(() => {
    setFlights(fetchedFlights);
    resortFlights(sortByType);
  }, [fetchedFlights]);

  const resortFlights = useCallback(newSortType => {
    if (newSortType === sortByType) return null; // no change in sort by type

    setSortByType(newSortType);
    sortByFn(flights, newSortType);
  });

  return (
    <div>
      <Header
        sortByType={sortByType}
        resortFlightsFn={newType => resortFlights(newType)}
      />
      <Flights flights={flights} />
    </div>
  );
};

export default ContainerFlights;
