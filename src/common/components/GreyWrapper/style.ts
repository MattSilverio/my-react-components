import styled, { css } from "styled-components";

interface WrapperProps {
  border?: boolean;
  noMargin?: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  margin-bottom: 8px;
  padding: 12px 16px;
  background-color: var(--grey-20);
  border-radius: var(--border-radius);
  position: relative;

  ${(props) =>
    props.border &&
    css`
      border: 1px solid var(--grey-60);
    `}

  ${(props) =>
    props.noMargin &&
    css`
      margin: 0;
    `}
`;
