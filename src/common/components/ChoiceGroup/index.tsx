import React from "react";
import { IChoiceGroupOption } from "../../../interfaces/IChoiceGroupOption";
import { IChoiceGroupState } from "../../../interfaces/IChoiceGroupState";
import { IReactState } from "../../../interfaces/IReactState";
import { InputError } from "../InputError";
import { CardChoice, CardsContainer, ChoiceGroupInput, Title, Wrapper } from "./style";

interface ChoiceGroupProps {
  title: string;
  state: IReactState<IChoiceGroupState | undefined>;
  options: IChoiceGroupOption[];
  disabled?: boolean;
  cardMode?: boolean;
}

export const ChoiceGroup = ({ title, state, options, disabled, cardMode }: ChoiceGroupProps) => {
  const [value, setValue] = state;

  const handleChange = (_: any, option: IChoiceGroupOption | undefined) => {
    if (option)
      setValue({
        content: option,
        error: "",
      });
  };

  const handleSelect = (option: IChoiceGroupOption) => {
    setValue({
      content: option,
      error: "",
    });
  };

  return (
    <Wrapper disabled={disabled}>
      <Title>{title}</Title>
      {cardMode && (
        <CardsContainer>
          {options.map((option) => (
            <CardChoice selected={value?.content?.key === option.key} onClick={() => handleSelect(option)}>
              {option.text}
            </CardChoice>
          ))}
        </CardsContainer>
      )}

      {!cardMode && <ChoiceGroupInput selectedKey={value?.content?.key} options={options} onChange={handleChange} />}

      <InputError error={value?.error ?? ""} />
    </Wrapper>
  );
};
