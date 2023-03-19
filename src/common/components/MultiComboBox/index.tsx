import React from "react";
import { InputError } from "../InputError";
import { IReactState } from "../../../interfaces/IReactState";
import { IDropdownOption } from "office-ui-fabric-react";
import { IMultiComboBoxState } from "../../../interfaces/IMultiComboBoxState";
import { ComboBoxInput, Title, Wrapper } from "./style";
import { IComboBox } from "@fluentui/react";

interface ComboBoxProps {
  title: string;
  state: IReactState<IMultiComboBoxState>;
  options: IDropdownOption[];
  placeholder?: string;
  disabled?: boolean;
}

export const MultiComboBox = ({ title, options, state, placeholder, disabled }: ComboBoxProps) => {
  const [value, setValue] = state;

  const handleChange = (event: React.FormEvent<IComboBox>, item: IDropdownOption | undefined) => {
    if (event.type === "blur") return;

    if (!item) {
      setValue({ content: [], error: "" });
      return;
    }

    if (item.selected) {
      setValue({
        content: [...value.content, +item.key],
        error: "",
      });
    } else {
      setValue({
        content: value.content.filter((v) => v !== +item.key),
        error: "",
      });
    }
  };

  return (
    <Wrapper disabled={disabled}>
      <Title>{title}</Title>

      <ComboBoxInput
        selectedKey={value.content}
        onChange={handleChange}
        options={options.sort((a, b) => a.text.localeCompare(b.text))}
        placeholder={placeholder}
        error={!!value.error}
        allowFreeform
        autoComplete="on"
        useComboBoxAsMenuWidth
        openOnKeyboardFocus
        calloutProps={{ directionalHintFixed: true }}
        multiSelect
      />
      <InputError error={value.error} />
    </Wrapper>
  );
};
