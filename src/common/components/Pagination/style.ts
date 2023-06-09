import styled, { css } from "styled-components";

interface ButtonProps {
  active?: boolean;
  decorative?: boolean;
  onClick?: (v: number) => void;
  arrow?: boolean;
  customColor?: string;
}

interface CustomColor {
  customColor?: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
  margin: 0 1rem 0 1rem;
  margin-top: 2rem;

  * {
    user-select: none;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 0.1rem;
  border-radius: var(--border-radius);
  background-color: var(--grey-20);
  height: 44px;
  padding: 4px 0px;
  border: 1px solid var(--grey-60);
`;

export const NoItemsContainer = styled.div<CustomColor>`
  ${(props) =>
    props.customColor ? `color: ${props.customColor}` : `color: var(--green);`};
  font-weight: 600;
  font-size: 14px;
  flex: 1;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 2rem;

  > * {
    font-size: 2rem;
  }

  p {
    font-size: 14px;
  }
`;

export const DisclaimerContainer = styled.div<CustomColor>`
  ${(props) =>
    props.customColor ? `color: ${props.customColor}` : `color: var(--green);`};
  font-weight: normal;
  font-size: 14px;
`;

export const Button = styled.button<ButtonProps>`
  border: none;
  background: none;
  border-radius: var(--border-radius);
  ${(props) =>
    props.customColor ? `color: ${props.customColor}` : `color: var(--green);`};
  font-weight: 600;
  width: 30px;
  line-height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s background-color;
  will-change: background-color;

  &:hover {
    background-color: var(--grey-40);
  }

  ${(props) =>
    props.active &&
    css`
      ${props.customColor
        ? `background-color: ${props.customColor}`
        : `background-color: var(--green);`};
      color: white;
      &:hover {
        ${props.customColor
          ? `background-color: ${props.customColor}`
          : `background-color: var(--green);`};
      }
    `};

  ${(props) =>
    props.arrow &&
    css`
      width: fit-content;
      font-size: 1.2rem;
      padding: 0;
    `}

  height: 36px;
  width: 36px;

  ${(props) =>
    props.decorative &&
    css`
      pointer-events: none;
      width: 25px;
    `}
`;

export const ArrowsContainer = styled.div`
  display: flex;

  &:first-of-type {
    padding-right: 2px;
    margin-right: 2px;
    margin-left: 2px;
    border-right: 1px solid var(--grey-60);
  }

  &:last-of-type {
    padding-left: 2px;
    margin-right: 2px;
    margin-left: 2px;
    border-left: 1px solid var(--grey-60);
  }
`;
