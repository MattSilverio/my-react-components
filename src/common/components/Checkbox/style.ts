import { Checkbox } from "@fluentui/react";
import styled, { css } from "styled-components";

interface ShowcaseProps {
  showcase?: boolean;
}

interface TextProps extends ShowcaseProps {
  blackLabel?: boolean;
  bold?: boolean;
}

export const Wrapper = styled.div`
  margin: 3px 0px;
  flex: 1;
  display: flex;
  align-items: center;
`;

export const CheckboxInput = styled(Checkbox)<ShowcaseProps>`
  .ms-Checkbox-checkbox {
    margin: 2px 0px;
    border-radius: var(--border-radius);
  }

  ${(props) =>
    props.showcase &&
    css`
      pointer-events: none;
    `}
`;

export const Text = styled.span<TextProps>`
  font-size: 14px;
  color: var(--grey-150);
  margin-left: 9px;
  cursor: pointer;
  user-select: none;

  ${(props) =>
    props.bold &&
    css`
      color: var(--grey-100);
      font-weight: bold;
    `}

  ${(props) =>
    props.blackLabel &&
    css`
      color: black;
    `}

  ${(props) =>
    props.showcase &&
    css`
      cursor: default;
      user-select: auto;
    `}
`;
