import styled, { css } from "styled-components";

interface WrapperProps {
  onExpand?: () => void;
  color?: string;
}

export const Wrapper = styled.div<WrapperProps>`
  background-color: var(--grey-20);
  display: flex;
  padding: 15px 25px;
  border-radius: var(--border-radius);
  align-items: center;
  box-shadow: none;
  transition: 0.2s border;
  border: 1px solid var(--grey-60);
  will-change: border;
  cursor: default;
  margin: 4px 0px;

  &:hover {
    border: 1px solid var(--grey-80);
  }

  ${(props) =>
    props.onExpand &&
    css`
      user-select: none;
      cursor: pointer;
      &:hover {
        border: 1px solid var(--green);
      }

      &:active {
        border: 1px solid var(--dark-green);
      }
    `}

  ${(props) =>
    props.color === "white" &&
    css`
      background-color: white;
    `}
`;

export const Text = styled.p`
  flex: 1;
  font-size: 14px;
  color: var(--grey-150);
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const IconsContainer = styled.div`
  display: flex;
  gap: 10px;

  > * {
    font-size: 1.2rem;
    cursor: pointer;
  }
`;
