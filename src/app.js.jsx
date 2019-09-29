import React from "react";
import HookFetchFlights from "./components/hook_fetch_flights.js";
import ContainerFlights from "./components/containers_flights.js";

function App() {
  const fetchedData = HookFetchFlights();

  return <ContainerFlights {...fetchedData} />;
}
export default App;
