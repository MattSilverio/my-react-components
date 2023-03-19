import styled, { css } from "styled-components";
import { IAvailableButtonTypes } from "../../../interfaces/IAvailableButtonTypes";

interface ButtonProps {
  type: IAvailableButtonTypes;
  small?: boolean;
  micro?: boolean;
  disabled?: boolean;
}

export const Wrapper = styled.button<ButtonProps>`
  border-radius: var(--border-radius);
  display: flex;
  color: white;
  padding: 0;
  border: none;
  user-select: none;
  background-color: var(--dark-green);

  &:active {
    > div {
      transform: translateY(0px);
    }
  }

  ${(props) =>
    props.type === "BasicWhite" &&
    css`
      background-color: var(--green);
    `}

  ${(props) =>
    props.type === "Hero" &&
    css`
      outline-offset: 4px;
      transform: translateY(0px);
      background-color: var(--dark-yellow);
    `}

  ${(props) =>
    props.type === "Danger" &&
    css`
      background-color: var(--dark-danger);
    `}

    ${(props) =>
    props.type === "DangerWhite" &&
    css`
      background-color: var(--danger);
    `}

    ${(props) =>
    props.type === "OutlineWhite" &&
    css`
      background-color: var(--green);
      border: 1px solid white;
    `}


    ${(props) =>
    props.type === "Neutral" &&
    css`
      background-color: var(--grey-100);
      border: 1px solid white;
    `}

    ${(props) =>
    props.disabled &&
    css`
      pointer-events: none;
      opacity: 0.6;
    `}
`;

export const Front = styled.div<ButtonProps>`
  gap: 8px;
  display: flex;
  padding: 0px 16px;
  height: 40px;
  border-radius: var(--border-radius);
  color: white;
  position: relative;
  overflow: hidden;
  will-change: transform;
  transition: transform 20ms;
  box-shadow: none;
  align-items: center;

  &:after {
    background: #fff;
    content: "";
    height: 155px;
    left: -75px;
    opacity: 0.1;
    position: absolute;
    top: -50px;
    transform: rotate(35deg);
    transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
    width: 50px;
    z-index: -10;
  }

  &:hover {
    &:after {
      left: 120%;
      transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
    }
  }

  ${(props) =>
    props.type === "Hero" &&
    css`
      transform: translateY(-3px);
      background: var(--yellow);
    `}

  ${(props) =>
    props.type === "Basic" &&
    css`
      background-color: var(--green);
      transform: translateY(-2px);

      &:hover {
        box-shadow: var(--box-shadow);
      }
    `}

    ${(props) =>
    props.type === "BasicWhite" &&
    css`
      background-color: white;
      color: var(--green);
      transform: translateY(-2px);
      border: 1px solid var(--green);

      &:hover {
        box-shadow: var(--box-shadow);
      }
    `}

    ${(props) =>
    props.type === "Danger" &&
    css`
      background-color: var(--danger);
      transform: translateY(-2px);

      &:hover {
        box-shadow: var(--box-shadow);
      }
    `}

    ${(props) =>
    props.type === "DangerWhite" &&
    css`
      background-color: white;
      color: var(--danger);
      transform: translateY(-2px);
      border: 1px solid var(--danger);

      &:hover {
        box-shadow: var(--box-shadow);
      }
    `}

    ${(props) =>
    props.type === "OutlineWhite" &&
    css`
      background-color: none;
      color: white;
      transform: translateY(-2px);
      border: 1px solid white;

      &:hover {
        box-shadow: var(--box-shadow);
      }
    `}

    ${(props) =>
    props.type === "Neutral" &&
    css`
      background-color: white;
      color: var(--grey-100);
      transform: translateY(-2px);
      border: 1px solid var(--grey-100);

      &:hover {
        box-shadow: var(--box-shadow);
      }
    `}

    ${(props) =>
    props.small &&
    css`
      padding: 8px 12px;
    `}

    ${(props) =>
    props.micro &&
    css`
      padding: 2px 12px;
      height: 24px;
    `}
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.3rem;
`;
