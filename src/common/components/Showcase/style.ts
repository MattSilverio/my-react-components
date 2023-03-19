import styled, { css } from "styled-components";

interface ContentProps {
  black?: boolean;
}

export const Title = styled.div`
  font-size: 16px;
  color: var(--green);
`;

export const Content = styled.p<ContentProps>`
  color: var(--grey-150);
  overflow-x: hidden;
  display: flex;
  align-items: center;

  ${(props) =>
    props.black &&
    css`
      color: black;
    `}
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const FlagIcon = styled.div`
  margin-right: 1ch;
  display: flex;
  align-items: center;
`;

export const JustifiedContent = styled.p`
  white-space: break-spaces;
`;
