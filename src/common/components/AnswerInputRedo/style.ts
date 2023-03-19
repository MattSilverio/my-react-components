import styled, { css } from "styled-components";

interface WrapperProps {
  inactive?: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  align-items: center;

  ${(props) =>
    props.inactive &&
    css`
      opacity: 0.5;
    `}
`;
