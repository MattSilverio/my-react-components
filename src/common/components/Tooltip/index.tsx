import React from "react";
import { Wrapper } from "./style";
import { TbQuestionMark } from "react-icons/tb";
import { DirectionalHint, TooltipHost } from "@fluentui/react";

interface ITooltipProps {
  handleTooltip?: () => void;
  text?: string;
  icon?: {
    element?: JSX.Element;
    size?: "sm" | "md" | "lg";
    border?: "green" | "white";
  };
}

export const Tooltip = ({ handleTooltip, icon, text}: ITooltipProps) => {
  return (
    <TooltipHost directionalHint={DirectionalHint.topCenter} content={text} onClick={handleTooltip}>
      <Wrapper onClick={handleTooltip} size={icon?.size} border={icon?.border}>
        {icon?.element ?? <TbQuestionMark />}
      </Wrapper>
    </TooltipHost>
  );
};
