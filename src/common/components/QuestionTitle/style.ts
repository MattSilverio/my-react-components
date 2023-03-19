import styled, { css } from "styled-components";

interface InputProps {
  isChild?: boolean;
}

interface OrderProps {
  isChild?: boolean;
}

export const Wrapper = styled.div`
  display: flex;
  gap: 1ch;
  margin-bottom: 10px;
  align-items: flex-start;
`;

export const Title = styled.span<InputProps>`
  flex: 1;
  font-size: 24px;
  color: var(--green);

  ${(props) =>
    props.isChild &&
    css`
      padding-left: 2px;
      font-size: 18px;
      color: var(--green);
    `}
`;

export const Order = styled.span<OrderProps>`
  font-size: 24px;
  color: var(--green);

  ${(props) =>
    props.isChild &&
    css`
      font-size: 18px;
    `};
`;
