import styled, { css } from "styled-components";

interface SubjectsContainerProps {
  expanded: boolean;
}

export const Wrapper = styled.div`
  background-color: var(--grey-20);
  border-radius: var(--border-radius);
  border: 1px solid var(--grey-60);
  overflow: hidden;
`;

export const TitleContainer = styled.div`
  display: flex;
  user-select: none;
  cursor: pointer;
  padding: 16px 32px;
`;

export const TitleText = styled.div`
  font-family: "Caecilia";
  color: var(--green);
  flex: 1;
  font-size: 18px;
`;

export const TitleIcon = styled.div`
  width: 30px;
  font-weight: bold;
  font-size: 1.5rem;
  color: var(--green);
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const SubjectsContainer = styled.div<SubjectsContainerProps>`
  height: 0px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  ${(props) =>
    props.expanded &&
    css`
      height: auto;
      padding: 0px 32px 16px 32px;
    `}
`;
