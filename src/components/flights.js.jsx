import React, { Component } from "react";

const renderFlight = ({
  segmentId,
  type,
  origin,
  destination,
  departure,
  detail
}) => {
  return (
    <div key={segmentId} w30 paddingDefault>
      {segmentId}
    </div>
  );
};

const Flights = ({ flights }) => {
  if (flights === undefined || flights.length === 0) return null;

  const list = flights.map(item => renderFlight(item));
  return <div>{list}</div>;
};

export default Flights;
