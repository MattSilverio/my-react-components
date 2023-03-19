import React from "react";
import { InputError } from "../InputError";
import { IReactState } from "../../../interfaces/IReactState";
import { NumberFormatValues } from "react-number-format";
import { NumberField, Title, Wrapper } from "./style";
import { INumberInputState } from "../../../interfaces/NumberInputState";

interface NumberInputProps {
  title?: string;
  state: IReactState<INumberInputState>;
  disableDecimal?: boolean;
  disableNegative?: boolean;
  max?: number;
}

export const NumberInput = ({ title, state, disableDecimal, disableNegative = true, max }: NumberInputProps) => {
  const [value, setValue] = state;

  const handleChange = (values: NumberFormatValues) => {
    setValue({
      content: +values.value,
      error: "",
    });
  };

  const isAllowed = ({ floatValue, formattedValue }: NumberFormatValues) => {
    if (!floatValue) return formattedValue === "";
    if (!max) return true;

    return floatValue <= max;
  };

  return (
    <Wrapper>
      {title && <Title>{title}</Title>}
      <NumberField
        thousandSeparator="."
        decimalSeparator=","
        fixedDecimalScale={true}
        allowNegative={disableNegative}
        onValueChange={handleChange}
        allowEmptyFormatting={false}
        decimalScale={disableDecimal ? 0 : 2}
        maxLength={16}
        value={value.content}
        error={!!value.error}
        isAllowed={isAllowed}
      />
      <InputError error={value.error} />
    </Wrapper>
  );
};
