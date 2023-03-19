import styled, { css } from "styled-components";

interface WrapperProps {
  show: boolean;
}

interface TextProps {
  color?: string;
}

interface LoadingContainerProps {
  isLoading?: boolean;
}

interface BoxProps {
  size?: string;
}

export const Wrapper = styled.div<WrapperProps>`
  z-index: 99;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0 0 0 / 20%);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  pointer-events: none;
  transition: 0.2s all;
  will-change: opacity;

  ${(props) =>
    props.show &&
    css`
      opacity: 100%;
      pointer-events: all;
    `}
`;

export const Box = styled.div<BoxProps>`
  min-width: 450px;
  overflow-y: scroll;
  background-color: white;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  position: relative;

  ::-webkit-scrollbar {
    width: 8px;
    height: 4px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
    padding: 2px;
  }

  ::-webkit-scrollbar-thumb {
    background: var(--grey-70);
    border-radius: 4px;

    &:hover {
      background: var(--grey-75);
    }
  }

  ${(props) =>
    props.size == "sm" &&
    css`
      width: 450px;
    `}

  ${(props) =>
    props.size == "md" &&
    css`
      width: 600px;
    `}

  ${(props) =>
    props.size == "lg" &&
    css`
      width: 95%;
      height: 85vh;
    `}
`;

export const TitleContainer = styled.div`
  height: 60px;
  border-bottom: 1px solid var(--grey-60);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 40px;
`;

export const TitleText = styled.p<TextProps>`
  font-size: 24px;
  color: var(--green);
  flex: 1;

  ${(props) =>
    props.color &&
    css`
      color: ${props.color};
    `}
`;

export const Content = styled.div`
  padding: 25px 40px;
`;

export const CloseIcon = styled.div`
  font-size: 2rem;
  color: var(--grey-150);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const LoadingContainer = styled.div<LoadingContainerProps>`
  position: absolute;
  inset: 0 0 0 0;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  filter: opacity(0);
  pointer-events: none;
  transition: 0.2s filter;

  ${(props) =>
    props.isLoading &&
    css`
      pointer-events: all;
      filter: opacity(1);
    `}
`;

export const Icon = styled.img`
  height: 30px;
  width: 90px;
`;
