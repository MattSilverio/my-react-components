import styled, { css } from "styled-components";
import { ComboBox as ComboBoxFluent } from "@fluentui/react";

interface DropdownInputProps {
  error?: boolean;
}

interface WrapperProps {
  disabled?: boolean;
}

export const ComboBoxInput = styled(ComboBoxFluent)<DropdownInputProps>`
  .ms-ComboBox-Input::placeholder {
    color: #747876;
  }

  .ms-ComboBox {
    padding-left: 6px;

    &::after {
      border-radius: var(--border-radius);
      border-width: 1px !important;
    }

    ${(props) =>
      props.error &&
      css`
        border-color: var(--danger);
      `}
  }
`;

export const Title = styled.div`
  font-size: 16px;
  margin-bottom: 8px;
  color: var(--green);
`;
export const Wrapper = styled.div<WrapperProps>`
  position: relative;
  flex: 1;

  ${(props) =>
    props.disabled &&
    css`
      pointer-events: none;
      opacity: 0.6;
    `}
`;
