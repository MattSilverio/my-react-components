import styled, { css } from "styled-components";

interface ContainerProps {
  active?: boolean;
}

interface CardProps extends ContainerProps {
  size?: "small" | "medium" | "big";
}

interface LoadingContainerProps {
  isLoading?: boolean;
}

interface ContentProps {
  isLoading?: boolean;
  noPadding?: boolean;
}

export const Container = styled.div<ContainerProps>`
  position: fixed;
  height: calc(100vh - 48px);
  top: 48px;
  right: 0;
  width: 100vw;
  background-color: rgb(0 0 0 / 20%);
  opacity: 0;
  pointer-events: none;
  transition: 0.2s all ease-in-out;
  transition-delay: 0.2s;
  z-index: 50;
  cursor: default;

  ${(props) =>
    props.active &&
    css`
      opacity: 1;
      pointer-events: all;
      transition-delay: 0s;
    `}

  @media screen and (max-width: 1024px) {
    width: 100vw;
    height: calc(100vh - (48px * 2));
  }
`;

export const Card = styled.div<CardProps>`
  position: absolute;
  width: 700px;
  right: -700px;
  height: 100%;
  background-color: white;
  overflow-y: auto;
  overflow-x: hidden;
  transition: 0.2s all ease-in-out;
  box-shadow: 0 25.6px 57.6px 0 rgb(0 0 0 / 22%), 0 4.8px 14.4px 0 rgb(0 0 0 / 18%);
  max-width: 100vw;

  ${(props) =>
    props.size === "small" &&
    css`
      width: 500px;
      right: -500px;
    `}

  ${(props) =>
    props.size === "big" &&
    css`
      width: 900px;
      right: -900px;
    `}

  ${(props) =>
    props.active &&
    css`
      right: 0;
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

export const Content = styled.div<ContentProps>`
  padding: 25px 40px;
  display: flex;
  flex-direction: column;
  gap: 5px;

  ${(props) =>
    props.isLoading &&
    css`
      max-height: calc(100% - 80px);
      overflow: hidden;
    `}

  ${(props) =>
    props.noPadding &&
    css`
      padding: 0px;
    `}
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
  top: 0;
  left: 0;
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
