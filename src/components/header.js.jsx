import React from "react";
import { FlexboxDiv, TextSpan } from "./layouts.js";
import { SORT_BY_TYPE } from "./helper";

const Header = props => {
  return (
    <FlexboxDiv flexDirection="column">
      <h1>List of Flights</h1>
      <FlexboxDiv>
        <TextSpan>Sort By:</TextSpan>
        <TextSpan onClick={() => console.log(SORT_BY_TYPE.TIME)}>Time</TextSpan>
        <TextSpan onClick={() => console.log(SORT_BY_TYPE.AIRPORT_ORIGIN)}>
          Airport Origin
        </TextSpan>
        <TextSpan onClick={() => console.log(SORT_BY_TYPE.AIRPORT_DESTINATION)}>
          Airport Destination
        </TextSpan>
      </FlexboxDiv>
    </FlexboxDiv>
  );
};

export default Header;
