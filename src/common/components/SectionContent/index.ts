import styled, { css } from "styled-components";

interface WhiteSectionContentProps {
  noPadding?: boolean;
}

interface SectionContentProps {
  white?: boolean;
}

export const SectionContent = styled.div<SectionContentProps>`
  margin-top: 40px;
  ${(props) =>
    props.white &&
    css`
      background-color: white;
    `}
`;

export const WhiteSectionContent = styled.div<WhiteSectionContentProps>`
  background-color: white;
  padding: 40px;

  ${(props) =>
    props.noPadding &&
    css`
      padding: 0px;
    `}
`;
