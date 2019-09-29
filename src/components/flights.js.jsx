import React from "react";
import { FlexboxDiv, TextSpan } from "./layouts.js";
import dateFormat from "dateformat";
import { DATE_FORMAT } from "./helper.js";

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
      <div>
        <span>{detail.flightNumber}</span>
        <span>Departure: {dateFormat(departure, DATE_FORMAT)}</span>
      </div>
    </div>
  );

  const boardingInfo = (
    <div>
      <span>Boarding: {dateFormat(detail.boarding, DATE_FORMAT)}</span>
      <div>
        <span>Gate: {detail.gate}</span>
        <span>Seat: {detail.seat}</span>
      </div>
    </div>
  );
  return (
    <FlexboxDiv key={segmentId}>
      {mainInfo}
      {boardingInfo}
    </FlexboxDiv>
  );
};

const Flights = ({ flights }) => {
  console.log(flights);
  if (flights === undefined || flights.length === 0) return null;

  const list = flights.map(item => flight(item));
  return <FlexboxDiv flexWrap="wrap">{list}</FlexboxDiv>;
};

export default Flights;
