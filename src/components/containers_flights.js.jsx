import React from "react";
import { useState, useEffect, useCallback } from "react";
import Header from "./header.js";
import Flights from "./flights.js";
import { sortByFn } from "./helper";
import LoadMore from "./load_more.js";

const ContainerFlights = ({
  pages,
  fetchedFlights,
  getByPageNumberFn,
  sortDataFn
}) => {
  const [flights, setFlights] = useState(fetchedFlights);
  const [sortByType, setSortByType] = useState(null);

  useEffect(() => {
    setFlights(fetchedFlights);
    sortDataFn(sortByType);
  }, [fetchedFlights, sortByType]);

  const resortFlights = useCallback(newSortType => {
    if (newSortType === sortByType) return null; // no change in sort by type

    setSortByType(newSortType);
    sortDataFn(newSortType);
  });

  return (
    <div>
      <Header
        sortByType={sortByType}
        resortFlightsFn={newType => resortFlights(newType)}
      />
      <Flights flights={flights} />
      <LoadMore
        pages={pages}
        setFlightsFn={setFlights}
        getByPageNumberFn={pageNo => getByPageNumberFn(pageNo, sortByType)}
      />
    </div>
  );
};

export default ContainerFlights;
