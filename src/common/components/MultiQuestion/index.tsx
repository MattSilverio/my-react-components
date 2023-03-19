import React from "react";
import { ChoiceGroup, IChoiceGroupOption } from "office-ui-fabric-react";
import { Wrapper } from "./style";
import { IQuestion } from "../../../interfaces/IQuestion";

interface MultiQuestionProps {
  question: IQuestion;
  showcase?: boolean;
}

export const MultiQuestion = ({ question, showcase }: MultiQuestionProps) => {
  return (
    <Wrapper showcase={showcase}>
      <ChoiceGroup
        options={question.answers!.map(
          (answer) =>
            ({
              key: answer.id.toString(),
              text: answer.textPortuguese,
            } as IChoiceGroupOption)
        )}
        required={true}
      />
    </Wrapper>
  );
};
