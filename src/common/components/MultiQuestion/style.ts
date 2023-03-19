import styled, { css } from "styled-components";

interface WrapperProps {
  showcase?: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  ${(props) =>
    props.showcase &&
    css`
      pointer-events: none;
    `}
`;
