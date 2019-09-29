import styled from "styled-components";

export const FlexboxDiv = styled.div`
  width: 100%;
  display: flex;
  ${({
    flexDirection = "row",
    alignItems = "flex-start",
    justifyContent = "flex-start",
    flexWrap = "nowrap",
    flexGrow = 1,
    flexBasis
  }) => `
        align-items:${alignItems};
        justify-content:${justifyContent};
        flex-direction:${flexDirection};
        flex-wrap:${flexWrap};
        flex-Basis:${flexBasis};
        flex:${flexGrow};
    `}
`;

export const TextSpan = styled.span`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
`;
