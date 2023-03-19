import styled, { css } from "styled-components";

interface LineProps {
  right?: boolean;
}

export const Line = styled.div<LineProps>`
  display: flex;
  gap: 28px;
  flex: 1;

  ${(props) =>
    props.right &&
    css`
      justify-content: flex-end;
    `}
`;
