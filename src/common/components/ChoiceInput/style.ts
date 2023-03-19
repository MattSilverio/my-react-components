import styled, { css } from "styled-components";
import { ChoiceGroup } from "@fluentui/react/lib/ChoiceGroup";

interface ShowcaseProps {
  showcase?: boolean;
}

interface TextProps extends ShowcaseProps {
  blackLabel?: boolean;
}

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 2px 0px;
`;

export const Choice = styled(ChoiceGroup)<ShowcaseProps>`
  .ms-ChoiceField {
    margin: 0px;

    span {
      width: 24px;
      padding: 0px;
    }

    ${(props) =>
      props.showcase &&
      css`
        pointer-events: none;
      `}
  }
`;

export const Text = styled.span<TextProps>`
  font-size: 14px;
  color: var(--grey-150);
  margin-left: 3px;
  cursor: pointer;
  user-select: none;
  display: inline-flex;
  align-items: center;
  min-height: 26px;

  ${(props) =>
    props.blackLabel &&
    css`
      color: black;
    `}

  ${(props) =>
    props.showcase &&
    css`
      user-select: auto;
      cursor: default;
    `}
`;
