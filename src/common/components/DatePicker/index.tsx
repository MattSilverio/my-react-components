import * as React from "react";
import { Container, SubTitle, Error, DatePickerInput } from "./style";
import { IDatePickerState } from "../../../interfaces/IDatePickerState";
import { IReactState } from "../../../interfaces/IReactState";
import { Optional } from "../Optional";
import { DayOfWeek } from "@fluentui/react";
import { getDatePickerString } from "../../../utils/getDatePickerStrings";
import { languageState } from "../../../store/atoms";
import { useRecoilValue } from "recoil";

interface DatePickerProps {
  title: string;
  state: IReactState<IDatePickerState>;
  placeholder?: string;
  optional?: boolean;
  disabled?: boolean;
  minDate?: Date;
}

export const DatePicker = ({ title, state, placeholder, optional, disabled, minDate }: DatePickerProps) => {
  const [date, setDate] = state;

  const language = useRecoilValue(languageState);

  const locale = language === "Portuguese" ? "pt-BR" : "en-US";

  const handleChange = (dateChange: Date) => {
    setDate({ content: dateChange, error: "" });
  };

  return (
    <Container error={!!date.error}>
      <SubTitle error={!!date.error}>
        {title}
        {optional && <Optional />}
      </SubTitle>

      <DatePickerInput
        firstDayOfWeek={DayOfWeek.Monday}
        placeholder={placeholder}
        strings={getDatePickerString(language)}
        formatDate={(dateFormat: Date) => dateFormat.toLocaleDateString(locale)}
        value={date.content}
        onSelectDate={handleChange}
        disabled={disabled}
        minDate={minDate}
      />
      {date.error && <Error>{date.error}</Error>}
    </Container>
  );
};
