import styled, { css } from "styled-components";
import { TagPicker as TagPickerFabric } from "office-ui-fabric-react";

interface WrapperProps {
  disabled?: boolean;
  showcase?: boolean;
}

interface TagPickerInputProps {
  error?: boolean;
  showcase?: boolean;
}

export const TagPickerInput = styled(TagPickerFabric)<TagPickerInputProps>`
  .ms-BasePicker-text {
    border-radius: var(--border-radius);

    .ms-TagItem {
      background-color: var(--green);
      color: white;
      border-radius: var(--border-radius);
    }

    .ms-TagItem-close {
      i {
        color: white;
      }
    }

    ${(props) =>
      props.error &&
      css`
        border-color: var(--danger);
      `}

    input {
      border-radius: var(--border-radius);
    }

    ${(props) =>
      props.showcase &&
      css`
        border: none;

        .ms-TagItem-close {
          display: none;
        }
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

  ${(props) =>
    props.disabled &&
    css`
      pointer-events: none;
      opacity: 0.6;
    `}

  ${(props) =>
    props.showcase &&
    css`
      pointer-events: none;
    `}
`;
