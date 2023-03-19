import React, { useState } from "react";
import {
  checkboxInputInitialState,
  ICheckboxInputState,
  ICheckboxInputStateUndefined,
} from "../../../interfaces/ICheckboxInputState";
import { IReactState } from "../../../interfaces/IReactState";
import { InputError } from "../InputError";
import { CheckboxInput, Wrapper, Text } from "./style";

interface TextInputProps {
  state?: IReactState<ICheckboxInputState | ICheckboxInputStateUndefined>;
  checked?: boolean;
  children: React.ReactNode;
  inactive?: boolean;
  blackLabel?: boolean;
  onAction?: () => void;
  showcase?: boolean;
  bold?: boolean;
}

export const Checkbox = ({
  state,
  inactive,
  children,
  blackLabel,
  checked,
  showcase,
  bold,
  onAction,
}: TextInputProps) => {
  const [value, setValue] = state ?? [checkboxInputInitialState, undefined];

  const hasInternalState = !!state;

  const handleChange = (_: any, isChecked: boolean) => {
    if (hasInternalState)
      setValue!({
        content: isChecked,
        error: "",
      });
  };

  const handleAction = () => {
    if (!inactive && onAction) onAction();
  };

  return (
    <Wrapper>
      <CheckboxInput
        disabled={inactive}
        onChange={hasInternalState ? handleChange : onAction}
        checked={hasInternalState ? value.content : checked}
        showcase={showcase}
      />
      <Text
        blackLabel={blackLabel}
        onClick={hasInternalState ? () => handleChange("", !value.content) : handleAction}
        showcase={showcase}
        bold={bold}
      >
        {children}
      </Text>
      <InputError error={value.error} />
    </Wrapper>
  );
};
