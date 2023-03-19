import { IDropdownOption } from "office-ui-fabric-react";
import React from "react";
import { IComboBoxState } from "../../../interfaces/IComboBoxState";
import { IReactState } from "../../../interfaces/IReactState";
import { InputError } from "../InputError";
import { ComboBoxInput, Title, Wrapper } from "./style";

interface ComboBoxProps {
  title?: string;
  state: IReactState<IComboBoxState>;
  options: IDropdownOption[];
  placeholder?: string;
  disabled?: boolean;
  disableFreeform?: boolean;
}

export const ComboBox = ({ title, options, state, placeholder, disabled, disableFreeform }: ComboBoxProps) => {
  const [value, setValue] = state;

  const handleChange = (_: any, item: IDropdownOption | undefined) => {
    setValue({
      content: item ?? { key: undefined, text: undefined },
      error: "",
    });
  };

  return (
    <Wrapper disabled={disabled}>
      {title && <Title>{title}</Title>}

      <ComboBoxInput
        selectedKey={value.content.key ? value.content.key : null}
        onChange={handleChange}
        options={options.sort((a, b) => a.text.localeCompare(b.text))}
        placeholder={placeholder}
        error={!!value.error}
        allowFreeform={!disableFreeform}
        autoComplete="on"
        useComboBoxAsMenuWidth
        openOnKeyboardFocus
        calloutProps={{ directionalHintFixed: true }}
      />
      <InputError error={value.error} />
    </Wrapper>
  );
};
