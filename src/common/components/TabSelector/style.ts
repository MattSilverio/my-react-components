import styled, { css } from "styled-components";

interface TabProps {
  selected: boolean;
  disabled?: boolean;
  tabSize: number;
}

interface SelectedBgProps {
  position: number;
  tabSize: number;
  grey?: boolean;
}

interface WrapperProps {
  disabled?: boolean;
  backgroundColor?: string;
}

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  position: relative;
  ${(props) =>
    props.disabled &&
    css`
      pointer-events: none;
    `}

  ${(props) =>
    !!props.backgroundColor &&
    css`
      background-color: ${props.backgroundColor};
    `}
`;

export const Tab = styled.div<TabProps>`
  width: ${(props) => props.tabSize}px;
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: "Caecilia";
  font-size: 24px;
  z-index: 5;
  cursor: pointer;
  user-select: none;
  color: var(--grey-100);

  ${(props) =>
    props.selected &&
    css`
      color: var(--green);
    `}

  ${(props) =>
    !props.selected &&
    props.disabled &&
    css`
      opacity: 0.3;
    `}
`;

export const SelectedBg = styled.div<SelectedBgProps>`
  background-color: white;
  width: ${(props) => props.tabSize}px;
  height: 75px;
  position: absolute;
  transition: 0.2s left ease;
  will-change: left;
  border-radius: var(--border-radius) var(--border-radius) 0 0;
  border-bottom: none;
  top: 0px;
  left: 0px;

  ${(props) =>
    !!props.grey &&
    css`
      background-color: var(--grey-20);
    `}

  ${(props) =>
    props.position &&
    css`
      left: ${props.position * props.tabSize}px;
    `}
`;
