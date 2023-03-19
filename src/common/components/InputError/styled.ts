import styled, { css } from "styled-components";

interface WrapperProps {
  error?: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  position: absolute;
  bottom: -10px;
  margin-left: 10px;
  font-size: 12px;
  color: var(--danger);
  height: 15px;
  display: flex;
  align-items: flex-start;
  filter: opacity(0);
  transition: 0.2s all;

  ${(props) =>
    props.error &&
    css`
      bottom: -15px;
      filter: opacity(1);
    `}
`;
