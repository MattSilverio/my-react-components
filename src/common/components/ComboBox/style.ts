import styled, { css } from "styled-components";
import { ComboBox as ComboBoxFabric } from "office-ui-fabric-react";

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

  .ms-ComboBox {
    border-radius: var(--border-radius);
    padding-left: 6px;

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
