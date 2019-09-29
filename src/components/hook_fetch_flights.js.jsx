import { useState, useEffect } from "react";
import camelcaseKeys from "camelcase-keys";
import MockingData from "../resources/mocking_data.json";
import { sortByFn } from "./helper";

const ITEMS_PER_PAGE = 3;

const HookFetchFlights = url => {
  const [data, setData] = useState([]);

  const parseData = data => camelcaseKeys(data, { deep: true });

  const getByPageNumber = (pageNo, sortByType) => {
    const baseIndex = pageNo * ITEMS_PER_PAGE;
    sortByFn(data, sortByType);

    return data.slice(0, baseIndex + ITEMS_PER_PAGE);
  };

  const sortData = newSortType => sortByFn(data, newSortType);

  useEffect(() => {
    if (url) {
      fetch(url)
        .then(response => response.json())
        .then(data => setData(parseData(data)));
    } else {
      setData(parseData(MockingData));
    }
  }, [url]);

  return {
    pages: Math.ceil(data.length / ITEMS_PER_PAGE),
    fetchedFlights: getByPageNumber(0),
    getByPageNumberFn: getByPageNumber,
    sortDataFn: sortData
  };
};

export default HookFetchFlights;
