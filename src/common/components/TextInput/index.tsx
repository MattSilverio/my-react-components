import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { IReactState } from "../../../interfaces/IReactState";
import { ITextInputState } from "../../../interfaces/ITextInputState";
import { languageState } from "../../../store/atoms";
import { IRegexTypes, regexHandling } from "../../../utils/regex";
import { InputError } from "../InputError";
import { Optional } from "../Optional";
import { InputLimit, TextField, Title, Wrapper } from "./style";

interface TextInputProps {
  title: string;
  state: IReactState<ITextInputState>;
  placeholder?: string;
  textarea?: boolean;
  customLimit?: number;
  onBlur?: () => void;
  optional?: boolean;
  mask?: IRegexTypes;
  disabled?: boolean;
}

export const TextInput = ({
  title,
  state,
  placeholder,
  textarea,
  customLimit,
  onBlur,
  optional,
  mask,
  disabled,
}: TextInputProps) => {
  const limit = (() => {
    if (customLimit) return customLimit;
    if (textarea) return 7000;
    return 255;
  })();

  const [value, setValue] = state;
  const [leftCharacters, setLeftCharacters] = useState(limit);
  const language = useRecoilValue(languageState);

  const handleChange = (_: any, v: string) => {
    setLeftCharacters(limit - v.length);

    if (mask) {
      const result = regexHandling[mask](v, language);

      setValue({
        content: v,
        error: !result.isValid && !!v.length ? result.message : "",
      });
    } else {
      setValue({
        content: v,
        error: "",
      });
    }
  };

  return (
    <Wrapper>
      <Title>
        {title}
        {optional && <Optional />}
      </Title>
      <TextField
        value={value.content}
        onChange={handleChange}
        placeholder={placeholder}
        error={value.error.length !== 0}
        multiline={textarea}
        autoAdjustHeight={textarea}
        maxLength={limit}
        onBlur={onBlur}
        disabled={disabled}
      />
      <InputLimit display={leftCharacters < 50}>{leftCharacters}</InputLimit>
      <InputError error={value.error} />
    </Wrapper>
  );
};
