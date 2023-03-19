import styled, { css } from "styled-components";
import NumberFormat from "react-number-format";

interface TextInputProps {
  error?: boolean;
}

export const NumberField = styled(NumberFormat)<TextInputProps>`
  min-height: 30px;
  border-radius: var(--border-radius);
  border: 1px solid rgb(89, 89, 89);
  padding: 0px 12px;
  flex: 1;

  ${(props) =>
    props.error &&
    css`
      border-color: var(--danger);
    `}

  &:focus {
    outline: none;
  }
`;

export const Title = styled.div`
  font-size: 16px;
  margin-bottom: 8px;
  color: var(--green);
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
`;
