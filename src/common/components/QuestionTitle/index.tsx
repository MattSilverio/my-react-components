import React, { useRef } from "react";
import { Tooltip } from "../Tooltip";
import TooltipModal, { ImperativeTooltipModal } from "../TooltipModal";
import { Order, Title, Wrapper } from "./style";

interface QuestionTitleProps {
  children: string;
  order: number;
  parentOrder?: number;
  tooltip: string;
}

export const QuestionTitle = ({ children, order, parentOrder, tooltip }: QuestionTitleProps) => {
  const tooltipModalRef = useRef<ImperativeTooltipModal>(null);
  const handleTooltip = () => tooltipModalRef.current?.show();

  return (
    <Wrapper>
      <Order isChild={!!parentOrder}>{parentOrder ? parentOrder + "." + order : order}.</Order>
      <Title isChild={!!parentOrder}>
        {children}
        {!!tooltip && <Tooltip handleTooltip={handleTooltip} />}
      </Title>
      <TooltipModal
        ref={tooltipModalRef}
        question={{
          index: order,
          text: children,
        }}
        description={tooltip}
      />
    </Wrapper>
  );
};
