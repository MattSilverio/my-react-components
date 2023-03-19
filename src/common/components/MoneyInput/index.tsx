import React from "react";
import { InputError } from "../InputError";
import { IReactState } from "../../../interfaces/IReactState";
import { IMoneyInputState } from "../../../interfaces/IMoneyInputState";
import { NumberFormatValues } from "react-number-format";
import { MoneyField, Title, Wrapper } from "./style";

interface MoneyInputProps {
  title: string;
  state: IReactState<IMoneyInputState>;
}

export const MoneyInput = ({ title, state }: MoneyInputProps) => {
  const [value, setValue] = state;

  const handleChange = (values: NumberFormatValues) => {
    setValue({
      content: +values.value,
      error: "",
    });
  };

  return (
    <Wrapper>
      <Title>{title}</Title>
      <MoneyField
        thousandSeparator="."
        decimalSeparator=","
        prefix="US$ "
        fixedDecimalScale={true}
        decimalScale={2}
        onValueChange={handleChange}
        value={value.content}
        error={!!value.error}
      />
      <InputError error={value.error} />
    </Wrapper>
  );
};
