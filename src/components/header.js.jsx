import React from "react";
import { FlexboxDiv, TextSpan } from "./layouts.js";
import { SORT_BY_TYPE } from "./helper";
import styled from "styled-components";

const H1 = styled.h1`
  padding: 0 1em;
`;

const Header = ({ sortByType, resortFlightsFn }) => {
  return (
    <FlexboxDiv flexDirection="column" alignItems="center">
      <H1>List of Flights</H1>
      <FlexboxDiv paddingDefault whiteBg justifyContent="center">
        <TextSpan marginRDefault>Sort By:</TextSpan>
        <TextSpan
          marginRDefault
          linkLike
          isActive={sortByType === SORT_BY_TYPE.TIME}
          onClick={() => resortFlightsFn(SORT_BY_TYPE.TIME)}
        >
          Time
        </TextSpan>
        <TextSpan
          marginRDefault
          linkLike
          isActive={sortByType === SORT_BY_TYPE.AIRPORT_ORIGIN}
          onClick={() => resortFlightsFn(SORT_BY_TYPE.AIRPORT_ORIGIN)}
        >
          Origin
        </TextSpan>
        <TextSpan
          linkLike
          isActive={sortByType === SORT_BY_TYPE.AIRPORT_DESTINATION}
          onClick={() => resortFlightsFn(SORT_BY_TYPE.AIRPORT_DESTINATION)}
        >
          Destination
        </TextSpan>
      </FlexboxDiv>
    </FlexboxDiv>
  );
};

export default Header;
