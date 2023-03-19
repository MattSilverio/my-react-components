import styled, { css } from "styled-components";
import { TextField as TextFieldFabric } from "office-ui-fabric-react";

interface TextInputProps {
  error?: boolean;
}

interface InputLimitPros {
  display: boolean;
}

interface ErrorProps {
  error?: boolean;
}

interface InputWrapperProps {
  error?: boolean;
  hide?: boolean;
}

export const TextField = styled(TextFieldFabric)<TextInputProps>`
  .ms-TextField-fieldGroup {
    border: none;

    ${(props) =>
      props.error &&
      css`
        border-color: var(--danger);
      `}

    .ms-TextField-field {
      padding: 6px 6px;

      &::-webkit-resizer {
        display: none;
      }

      &::placeholder {
        color: var(--grey-100);
      }
    }
  }
`;

export const Title = styled.div`
  font-size: 18px;
  color: var(--green);
  margin-bottom: 4px;
`;

export const Wrapper = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const InputLimit = styled.div<InputLimitPros>`
  position: absolute;
  bottom: 0px;
  right: 5px;
  font-size: 12px;
  color: var(--danger);
  height: 15px;
  display: flex;
  align-items: flex-start;
  filter: opacity(0);
  transition: 0.2s all;
  z-index: 999;

  ${(props) =>
    props.display &&
    css`
      bottom: 3px;
      filter: opacity(1);
    `}
`;

export const TranslateLink = styled.div<InputLimitPros>`
  position: absolute;
  bottom: 0px;
  right: 5px;
  font-size: 12px;
  color: var(--green);
  height: 15px;
  display: flex;
  align-items: flex-start;
  filter: opacity(0);
  transition: 0.2s all;
  cursor: pointer;
  pointer-events: none;
  z-index: 999;

  ${(props) =>
    props.display &&
    css`
      bottom: 3px;
      filter: opacity(1);
      pointer-events: all;
    `}
`;

export const Translating = styled.div<InputLimitPros>`
  position: absolute;
  bottom: 0px;
  right: 5px;
  font-size: 12px;
  color: var(--green);
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  filter: opacity(0);
  transition: 0.2s all;
  z-index: 999;

  ${(props) =>
    props.display &&
    css`
      bottom: 3px;
      filter: opacity(1);
    `}
`;

export const InputWrapper = styled.div<InputWrapperProps>`
  position: relative;
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 5px 18px 5px 8px;
  transition: 0.2s border-color;
  will-change: border-color;

  &:first-of-type {
    position: relative;
    bottom: -1px;
    border: 1px solid rgb(89, 89, 89);
    border-radius: var(--border-radius) var(--border-radius) 0 0;
    border-bottom: 1px solid transparent;

    ${(props) =>
      props.error &&
      css`
        border-color: var(--danger);
      `}
  }

  &:last-of-type {
    position: relative;
    top: -1px;
    border: 1px solid rgb(89, 89, 89);
    border-radius: 0 0 var(--border-radius) var(--border-radius);
    border-top: 1px solid transparent;

    ${(props) =>
      props.error &&
      css`
        border-color: var(--danger);
      `}
  }

  &:focus-within {
    border: 1px solid var(--green);
  }

  ${(props) =>
    props.hide &&
    css`
      display: none;
    `}
`;

export const InnerInputWrapper = styled.div`
  flex: 1;
`;

export const InputsContainer = styled.div`
  background-color: white;
  border-radius: var(--border-radius);
`;

export const ErrorText = styled.div<ErrorProps>`
  position: absolute;
  bottom: 0px;
  right: 5px;
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
      bottom: 3px;
      filter: opacity(1);
    `}
`;

export const MiddleBorder = styled.div`
  border-bottom: 1px solid rgb(89, 89, 89);
`;

interface IHeaderProps {
  isVisible: boolean;
}

export const Header = styled.div<IHeaderProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 29px;

  ${(props) =>
    !props.isVisible &&
    css`
      display: none;
    `}
`;
