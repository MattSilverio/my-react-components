import React from "react";
import { IAvailableAnswerTypes } from "../../../interfaces/IAvailableAnswerTypes";
import { MultiInput, SingleInput, Wrapper } from "./style";

interface InputTypeProps {
  type: IAvailableAnswerTypes;
}

export const InputAnswerShowcase = ({ type }: InputTypeProps) => {
  return (
    <Wrapper>
      {type === "SINGLE" && <SingleInput />}

      {type === "MULTI" && <MultiInput />}
    </Wrapper>
  );
};
