import React, { useState } from "react";
import { FlexboxDiv, TextSpan } from "./layouts.js.jsx";

const LoadMore = ({ pages, setFlightsFn, getByPageNumberFn }) => {
  const [currentPage, setCurrentPage] = useState(0);

  return currentPage + 1 >= pages ? null : (
    <FlexboxDiv paddingDefault>
      <TextSpan
        marginRDefault
        linkLike
        onClick={() => {
          setCurrentPage(currentPage + 1);
          setFlightsFn(getByPageNumberFn(currentPage + 1));
        }}
      >
        Load more flights!...
      </TextSpan>
    </FlexboxDiv>
  );
};

export default LoadMore;
