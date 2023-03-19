import styled, { css } from "styled-components";
import { TextField as TextFieldFabric } from "office-ui-fabric-react";

interface TextInputProps {
  error?: boolean;
}

interface InputLimitPros {
  display: boolean;
}

export const TextField = styled(TextFieldFabric)<TextInputProps>`
  .ms-TextField-fieldGroup {
    border-radius: var(--border-radius);
    ${(props) =>
      props.error &&
      css`
        border-color: var(--danger);
      `}

    .ms-TextField-field {
      padding: 6px 6px;

      &::placeholder {
        color: var(--grey-100);
      }
    }
  }
`;

export const Title = styled.div`
  font-size: 16px;
  margin-bottom: 8px;
  color: var(--green);
`;
export const Wrapper = styled.div`
  position: relative;
  flex: 1;
`;

export const InputLimit = styled.div<InputLimitPros>`
  position: absolute;
  bottom: -10px;
  right: 10px;
  font-size: 12px;
  color: var(--danger);
  height: 15px;
  display: flex;
  align-items: flex-start;
  filter: opacity(0);
  transition: 0.2s all;

  ${(props) =>
    props.display &&
    css`
      bottom: -15px;
      filter: opacity(1);
    `}
`;
