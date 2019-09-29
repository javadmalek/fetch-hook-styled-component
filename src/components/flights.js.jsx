import React from "react";
import { FlexboxDiv } from "./layouts.js";
import dateFormat from "dateformat";
import { DATE_FORMAT } from "./helper";

const flight = ({
  segmentId,
  type,
  origin,
  destination,
  departure,
  detail
}) => {
  const mainInfo = (
    <div>
      <span>{`${origin.value} -> ${destination.value}`}</span>
      <span>{detail.flightNumber}</span>
    </div>
  );

  const boardingInfo = (
    <div>
      <span>Departure: {dateFormat(departure, DATE_FORMAT)}</span>
      <span>Boarding: {dateFormat(detail.boarding, DATE_FORMAT)}</span>
      <span>Gate: {detail.gate}</span>
      <span>Seat: {detail.seat}</span>
    </div>
  );
  return (
    <div key={segmentId}>
      {mainInfo}
      {boardingInfo}
    </div>
  );
};

const Flights = ({ flights }) => {
  console.log(flights);
  if (flights === undefined || flights.length === 0) return null;

  const list = flights.map(item => flight(item));
  return <FlexboxDiv flexWrap="wrap">{list}</FlexboxDiv>;
};

export default Flights;
