import React, { ReactNode } from "react";
import { Choice, Wrapper, Text } from "./style";

interface ChoiceInputProps {
  children: ReactNode;
  blackLabel?: boolean;
  checked: boolean;
  onAction?: () => void;
  inactive?: boolean;
  showcase?: boolean;
}

export const ChoiceInput = ({ children, blackLabel, checked, onAction, inactive, showcase }: ChoiceInputProps) => {
  return (
    <Wrapper>
      <Choice
        options={[{ key: "this", text: "" }]}
        selectedKey={checked ? "this" : null}
        onChange={onAction}
        disabled={inactive}
        showcase={showcase}
      />

      <Text blackLabel={blackLabel} onClick={onAction} showcase={showcase}>
        {children}
      </Text>
    </Wrapper>
  );
};
