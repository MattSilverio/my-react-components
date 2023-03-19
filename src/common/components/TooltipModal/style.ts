import styled, { css } from "styled-components";

export const Wrapper = styled.div``;

interface ILineProps {
  hide?: boolean;
}

export const Line = styled.p<ILineProps>`
  font-size: 1rem;
  margin-bottom: 6px;

  ${(props) =>
    props.hide &&
    css`
      display: none;
    `}
`;

export const Strong = styled.span`
  font-weight: 600;
`;
