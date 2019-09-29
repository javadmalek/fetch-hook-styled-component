import React, { Component } from "react";
import { FlexboxDiv, TextSpan } from "./layouts.js";
import dateFormat from "dateformat";
import { DATE_FORMAT, DATE_FORMAT_HM } from "./helper";
import styled from "styled-components";

const FlightNumberSpan = styled.span`
  color: white;
  background: #48384c;
  border-radius: 50%;
  padding: 0.5em;
`;

const renderFlight = ({
  segmentId,
  type,
  origin,
  destination,
  departure,
  detail
}) => {
  if (type !== "FLIGHT") return null;
  const mainInfo = (
    <FlexboxDiv flexDirection="column" alignItems="center">
      <TextSpan
        fontL
        bold
      >{`${origin.value} -> ${destination.value}`}</TextSpan>
      <FlightNumberSpan fontM>{detail.flightNumber}</FlightNumberSpan>
    </FlexboxDiv>
  );

  const boardingInfo = (
    <FlexboxDiv flexDirection="column" ghostWhiteBg>
      <TextSpan paddingS>
        Departure: {dateFormat(departure, DATE_FORMAT)}
      </TextSpan>
      <TextSpan paddingS>
        Boarding: {dateFormat(detail.boarding, DATE_FORMAT_HM)}
      </TextSpan>
      <FlexboxDiv justifyContent="space-between">
        <TextSpan paddingS>Gate: {detail.gate}</TextSpan>
        <TextSpan paddingS>Seat: {detail.seat}</TextSpan>
      </FlexboxDiv>
    </FlexboxDiv>
  );
  return (
    <FlexboxDiv key={segmentId} w30 paddingDefault>
      <FlexboxDiv
        flexDirection="column"
        alignItems="center"
        whiteBg
        borderRadius
      >
        {mainInfo}
        {boardingInfo}
      </FlexboxDiv>
    </FlexboxDiv>
  );
};

const Flights = ({ flights }) => {
  if (flights === undefined || flights.length === 0) return null;

  const list = flights.map(item => renderFlight(item));
  return <FlexboxDiv flexWrap="wrap">{list}</FlexboxDiv>;
};

export default Flights;
