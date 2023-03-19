import React from "react";
import { useRecoilValue } from "recoil";
import { IAvailableAnswerTypes } from "../../../interfaces/IAvailableAnswerTypes";
import { ISubQuestion } from "../../../interfaces/IQuestion";
import { dictionary } from "../../../lang";
import { languageState, surveyResponseState } from "../../../store/atoms";
import { getTitle, getTooltip } from "../../../utils/getObjectValue";
import { getSubQuestionState } from "../../../utils/surveyResponseOperations";
import { AnswerInput } from "../AnswerInput";
import { QuestionTitle } from "../QuestionTitle";
import { ErrorText, Wrapper } from "./style";

interface SubQuestionInputProps {
  subQuestion: ISubQuestion;
  parentOrder: number;
  questionId: number;
}

export const SubQuestionInput = ({ subQuestion, parentOrder, questionId }: SubQuestionInputProps) => {
  const language = useRecoilValue(languageState);
  const surveyResponse = useRecoilValue(surveyResponseState);
  const [answersState, isError] = getSubQuestionState({
    survey: surveyResponse!,
    questionId,
    subQuestionId: subQuestion.id,
  });
  const tooltip = getTooltip(subQuestion, language);
  const isCheckedExclusive = !!subQuestion.subQuestionAnswers.find(
    (sq) => sq.exclusive && answersState.includes(sq.id)
  );

  return (
    <Wrapper>
      <QuestionTitle order={subQuestion.order} parentOrder={parentOrder} tooltip={tooltip}>
        {getTitle(subQuestion, language)}
      </QuestionTitle>
      {isError && <ErrorText className="perguntaObrigatoria">{dictionary[language].perguntaObrigatoria}</ErrorText>}

      {subQuestion.subQuestionAnswers.map((subQuestionAnswer) => (
        <AnswerInput
          answer={subQuestionAnswer}
          type={subQuestion.questionType as IAvailableAnswerTypes}
          answersState={answersState}
          questionId={questionId}
          subQuestionId={subQuestion.id}
          inactive={!subQuestionAnswer.exclusive && isCheckedExclusive}
          question={[subQuestion.order, getTitle(subQuestion, language)]}
        />
      ))}
    </Wrapper>
  );
};
