import styled, { css } from "styled-components";

export const CustomizeRichText = css`
  div[class*="e-rte-content"] {
    padding-left: 30px;
  }
`;

export const Container = styled.div`
  ${CustomizeRichText};
`;

export const Label = styled.p`
  font-size: 18px;
  color: var(--green);
  margin-bottom: 4px;
`;

export const Field = styled.div`
  position: relative;

  svg {
    position: absolute;
    top: 55%;
    left: 10px;
    z-index: 999;
  }
`;
