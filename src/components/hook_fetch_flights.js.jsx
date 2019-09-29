import { useState, useEffect } from "react";
import camelcaseKeys from "camelcase-keys";
import MockingData from "../resources/mocking_data.json";

const HookFetchFlights = url => {
  const [data, setData] = useState([]);

  const parseData = data => camelcaseKeys(data, { deep: true });

  useEffect(() => {
    if (url) {
      fetch(url)
        .then(response => response.json())
        .then(data => setData(parseData(data)));
    } else {
      setData(parseData(MockingData));
    }
  }, [url]);

  return data;
};

export default HookFetchFlights;
