import React from "react";
import { FlexboxDiv, TextSpan } from "./layouts.js";
import { SORT_BY_TYPE } from "./helper";

const Header = ({ sortByType, resortFlightsFn }) => {
  return (
    <FlexboxDiv flexDirection="column">
      <h1>List of Flights</h1>
      <FlexboxDiv>
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
          Airport Origin
        </TextSpan>
        <TextSpan
          marginRDefault
          linkLike
          isActive={sortByType === SORT_BY_TYPE.AIRPORT_DESTINATION}
          onClick={() => resortFlightsFn(SORT_BY_TYPE.AIRPORT_DESTINATION)}
        >
          Airport Destination
        </TextSpan>
      </FlexboxDiv>
    </FlexboxDiv>
  );
};

export default Header;
