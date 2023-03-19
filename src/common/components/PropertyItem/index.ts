import styled, { css } from "styled-components";

interface PropertyItemProps {
  selected?: boolean;
}

export const PropertyItem = styled.div<PropertyItemProps>`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0px 10px;
  color: var(--grey-150);
  transition: 0.2s background-color;
  will-change: background-color;
  user-select: none;

  &:hover {
    cursor: pointer;
    background-color: var(--grey-60);
  }

  ${(props) =>
    props.selected &&
    css`
      background-color: var(--green);
      color: white;

      &:hover {
        cursor: pointer;
        background-color: var(--light-green);
      }
    `}
`;
