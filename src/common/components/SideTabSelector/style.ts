import styled, { css } from "styled-components";

interface TabProps {
  selected: boolean;
  disabled?: boolean;
  noAction?: boolean;
}

interface WrapperProps {
  disabled?: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 1rem;

  ${(props) =>
    props.disabled &&
    css`
      pointer-events: none;
    `}
`;

export const Tab = styled.div<TabProps>`
  width: 300px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 1rem;
  font-family: "Caecilia";
  font-size: 24px;
  z-index: 5;
  cursor: pointer;
  user-select: none;
  color: var(--grey-100);
  background-color: white;
  transition: 0.2s opacity;
  will-change: opacity;
  position: relative;

  &:after {
    content: "";
    display: block;
    width: 1rem;
    height: 150px;
    background-color: transparent;
    position: absolute;
    right: -1rem;
    top: 0;
    transition: 0.2s background-color;
    will-change: background-color;
  }

  ${(props) =>
    props.selected
      ? css`
          color: var(--green);
          &:after {
            background-color: white;
          }
        `
      : css`
          opacity: 0.8;
        `}

  ${(props) =>
    !props.selected &&
    props.disabled &&
    css`
      opacity: 0.3;
    `}

    ${(props) =>
    props.noAction &&
    css`
      cursor: not-allowed;
      opacity: 0.3;
    `}
`;

export const Index = styled.div`
  font-size: 4rem;
  padding: 2rem;
  padding-left: 1rem;
`;

export const Name = styled.div``;
