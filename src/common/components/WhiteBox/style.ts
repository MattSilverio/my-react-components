import styled, { css } from "styled-components";

interface ContentProps {
  gap?: "No" | "Small" | "Medium" | "Big";
  noPadding?: boolean;
  centerContentVertically?: boolean;
}

interface WrapperProps {
  color?: string;
  maxWidth?: number;
}

export const Wrapper = styled.div<WrapperProps>`
  padding: 20px 15px;
  background-color: white;
  display: flex;
  flex-direction: column;

  ${(props) =>
    props.color === "grey" &&
    css`
      background-color: var(--grey-20);
      border-radius: var(--border-radius);
      border: 1px solid var(--grey-60);
    `}

  ${(props) =>
    props.maxWidth &&
    css`
      max-width: ${props.maxWidth}px;
    `}
`;

export const Title = styled.p`
  color: var(--green);
  font-family: "Caecilia";
  font-weight: 600;
  font-size: 18px;
  flex: 1;
  display: flex;
  justify-content: space-between;
`;

export const Content = styled.div<ContentProps>`
  padding: 25px 20px;
  display: flex;
  flex-direction: column;
  gap: 0px;

  ${(props) =>
    props.gap === "No" &&
    css`
      gap: 0px;
    `};

  ${(props) =>
    props.gap === "Small" &&
    css`
      gap: 5px;
    `};

  ${(props) =>
    props.gap === "Medium" &&
    css`
      gap: 8px;
    `};

  ${(props) =>
    props.gap === "Big" &&
    css`
      gap: 15px;
    `};

  ${(props) =>
    props.noPadding &&
    css`
      padding: 15px 0px;
    `};

  ${(props) =>
    props.centerContentVertically &&
    css`
      flex: 1;
      justify-content: center;
    `}
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid var(--grey-60);
  padding-bottom: 15px;
  padding-left: 15px;
`;
