import { IComboBox, SelectableOptionMenuItemType } from "@fluentui/react";
import { IDropdownOption } from "@fluentui/react";
import React from "react";
import { useRecoilValue } from "recoil";
import { IComboBoxMultiState } from "../../../interfaces/IComboBoxMultiState";
import { IReactState } from "../../../interfaces/IReactState";
import { dictionary } from "../../../lang";
import { languageState } from "../../../store/atoms";
import { InputError } from "../InputError";
import { ComboBoxInput, Title, Wrapper } from "./style";

interface ComboBoxMultiProps {
  title: string;
  state: IReactState<IComboBoxMultiState>;
  options: IDropdownOption[];
  placeholder?: string;
  disabled?: boolean;
}

export const ComboBoxMulti = ({ title, options, state, placeholder, disabled }: ComboBoxMultiProps) => {
  const [value, setValue] = state;

  const language = useRecoilValue(languageState);

  const allOption = {
    key: "selectAll",
    text: dictionary[language].selecionarTodos,
    itemType: SelectableOptionMenuItemType.SelectAll,
  };

  const handleChange = (event: React.FormEvent<IComboBox>, item: IDropdownOption | undefined) => {
    if (event.type === "blur") return;

    if (!item) setValue({ error: "", content: [] });

    if (item) {
      if (item.key === "selectAll") {
        if (item.selected) {
          setValue({
            error: "",
            content: [allOption, ...options],
          });
        }

        if (!item.selected) {
          setValue({
            error: "",
            content: [],
          });
        }
        return;
      }

      const currentValue = value.content as IDropdownOption[];
      if (item.selected) {
        setValue({
          error: "",
          content: [...currentValue, item],
        });
      }

      if (!item.selected) {
        setValue({
          error: "",
          content: currentValue.filter((i) => i.key !== item.key),
        });
      }
    }
  };

  const selectedKeys = (value.content as IDropdownOption[]).map((v) => v.key as string);

  return (
    <Wrapper disabled={disabled}>
      <Title>{title}</Title>

      <ComboBoxInput
        selectedKey={selectedKeys}
        onChange={handleChange}
        options={[allOption, ...options.sort((a, b) => a.text.localeCompare(b.text))]}
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
