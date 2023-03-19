import styled, { css } from "styled-components";
import { ButtonIconTypes } from ".";

interface WrapperProps {
  type?: ButtonIconTypes;
}

export const Wrapper = styled.div<WrapperProps>`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 17px;
  cursor: pointer;
  background-color: white;
  color: var(--green);
  transition: 0.2s all;

  &:hover {
    background-color: var(--green);
    color: white;
  }

  ${(props) =>
    props.type === "Danger" &&
    css`
      background-color: white;
      color: var(--danger);

      &:hover {
        background-color: var(--danger);
        color: white;
      }
    `}

  ${(props) =>
    props.type === "Hero" &&
    css`
      background-color: white;
      color: var(--yellow);

      &:hover {
        background-color: var(--yellow);
        color: white;
      }
    `}

    ${(props) =>
    props.type === "HeroActive" &&
    css`
      background-color: var(--yellow);
      color: white;

      &:hover {
        background-color: var(--yellow);
        color: white;
      }
    `}
`;

export const ButtonIconContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 8px;
  height: 32px;
  position: relative;
  top: -10px;
`;
