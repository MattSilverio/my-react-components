import React from "react";
import { ITag } from "office-ui-fabric-react";
import { dictionary } from "../../../lang";
import { InputError } from "../InputError";
import { languageState } from "../../../store/atoms";
import { useRecoilValue } from "recoil";
import { TagPickerInput, Title, Wrapper } from "./style";

interface TextInputProps {
  title: string;
  items: ITag[];
  error?: string;
  itemLimit: number;
  selectedItems: ITag[];
  placeholder?: string;
  onChange: (items?: ITag[]) => void;
  disabled?: boolean;
  showcase?: boolean;
}

export const TagPicker = ({
  title,
  error,
  items,
  onChange,
  disabled,
  itemLimit,
  placeholder,
  selectedItems,
  showcase,
}: TextInputProps) => {
  const language = useRecoilValue(languageState);

  const onResolveSuggestions = (filter: string, _: any): ITag[] => {
    return items
      .filter((i) => !selectedItems.find((s) => s.key === i.key))
      .filter((item) => item.name.toUpperCase().includes(filter.toUpperCase()));
  };

  return (
    <Wrapper disabled={disabled} showcase={showcase}>
      <Title>{title}</Title>
      <TagPickerInput
        onResolveSuggestions={onResolveSuggestions}
        pickerSuggestionsProps={{
          noResultsFoundText: dictionary[language].semResultadosParaBuscar,
        }}
        selectedItems={selectedItems}
        itemLimit={itemLimit}
        resolveDelay={700}
        inputProps={{
          placeholder: showcase && selectedItems.length > 0 ? "" : placeholder,
        }}
        onChange={onChange}
        error={(error && error.length !== 0) as boolean}
        showcase={showcase}
      />
      <InputError error={error} />
    </Wrapper>
  );
};
