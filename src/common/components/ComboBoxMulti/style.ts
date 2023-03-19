import styled, { css } from "styled-components";
import { ComboBox as ComboBoxFabric } from "@fluentui/react";

interface DropdownInputProps {
  error?: boolean;
}

interface WrapperProps {
  disabled?: boolean;
}

export const ComboBoxInput = styled(ComboBoxFabric)<DropdownInputProps>`
  .ms-ComboBox-Input::placeholder {
    color: #747876;
  }

  .ms-ComboBox-Input {
    padding-left: 6px;
  }

  .ms-ComboBox::after {
    border-radius: var(--border-radius);
    border-width: 1px !important;
  }

  .ms-ComboBox {
    padding-left: 6px;

    ${(props) =>
      props.error &&
      css`
        border-color: var(--danger);
      `}
  }
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

export const Title = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 5px;
  padding-top: 1rem;
  color: var(--grey-100);
`;
