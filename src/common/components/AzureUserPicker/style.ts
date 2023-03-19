import styled, { css } from "styled-components";

interface ContainerProps {
  error?: boolean;
}

interface SubTitleProps {
  error?: boolean;
}

export const Container = styled.div<ContainerProps>`
  flex: 1;

  .ms-BasePicker-text {
    border: 1px solid rgb(89, 89, 89);
    border-radius: var(--border-radius);
    transition: 0.2s border;
    will-change: border;

    > input {
      border-radius: var(--border-radius);
    }

    &:focus-within {
      border: 1px solid var(--green);
    }

    ${(props) =>
      props.error &&
      css`
        border: 1px solid var(--danger);
      `}
  }
`;

export const SubTitle = styled.p<SubTitleProps>`
  font-size: 18px;
  color: var(--green);
  margin-bottom: 4px;
`;

export const Error = styled.p`
  color: var(--danger);
  margin-top: 2px;
  margin-left: 5px;
  font-size: 0.8rem;
`;
