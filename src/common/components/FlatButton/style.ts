import styled, { css } from "styled-components";

interface WrapperProps {
  small?: boolean;
  bold?: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  align-items: center;
  gap: 0.7ch;
  padding: 0.8rem;
  cursor: pointer;
  user-select: none;

  &:hover {
    background-color: var(--grey-20);
  }

  &:active {
    background-color: var(--grey-40);
  }

  ${(props) =>
    props.bold &&
    css`
      div {
        color: var(--green);
        font-weight: bold;
      }
    `}

  ${(props) =>
    props.small &&
    css`
      padding: 5px 10px;
    `}

  &:hover {
    > div {
      color: var(--green);
    }
  }
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  color: var(--green);
  font-size: 1.2rem;
`;

export const Desc = styled.div`
  color: black;
  display: flex;
  align-items: center;
`;
