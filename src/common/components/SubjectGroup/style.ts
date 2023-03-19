import { IoChevronDownSharp } from "react-icons/io5";
import styled, { css } from "styled-components";

interface ExpandedIconProps {
  expanded: boolean;
}

interface DeliverablesContainerProps {
  expanded: boolean;
}

export const Wrapper = styled.div`
  background-color: var(--green);
  overflow: hidden;
`;

export const TitleContainer = styled.div`
  display: flex;
  user-select: none;
  cursor: pointer;
  padding: 16px 24px;
  align-items: center;
`;

export const TitleText = styled.div`
  font-family: "Caecilia";
  color: white;
  flex: 1;
  font-size: 16px;
`;

export const TitleIcon = styled.div`
  width: 30px;
  font-weight: bold;
`;

export const ExpandedIcon = styled(IoChevronDownSharp)<ExpandedIconProps>`
  font-size: 1.2rem;
  color: white;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  will-change: transform;
  transition: 0.3s transform;

  ${(props) =>
    !props.expanded &&
    css`
      transform: rotate(180deg);
    `}
`;

export const DeliverablesContainer = styled.div<DeliverablesContainerProps>`
  height: 0px;
  overflow: hidden;
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  border: 1px solid var(--green);

  ${(props) =>
    props.expanded &&
    css`
      height: auto;
      padding: 0.3rem;
    `}
`;
