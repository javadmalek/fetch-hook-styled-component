import React from "react";
import HookFetchFlights from "./components/hook_fetch_flights.js";
import ContainerFlights from "./components/containers_flights.js";

function App() {
  const fetchedFlights = HookFetchFlights();
  return (
    <div>
      <ContainerFlights fetchedFlights={fetchedFlights} />
    </div>
  );
}
export default App;
