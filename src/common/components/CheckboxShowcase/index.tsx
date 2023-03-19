import React from "react";
import { Checkbox } from "../Checkbox";
import { Wrapper } from "./style";

interface CheckboxShowcaseProps {
  value: boolean;
  children: React.ReactNode;
}

export const CheckboxShowcase = ({
  value,
  children,
}: CheckboxShowcaseProps) => {
  return (
    <Wrapper>
      <Checkbox state={[{ content: value, error: "" }, () => {}]}>
        {children}
      </Checkbox>
    </Wrapper>
  );
};
