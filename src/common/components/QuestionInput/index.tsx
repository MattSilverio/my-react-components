import React from "react";
import { useRecoilValue } from "recoil";
import { IAvailableAnswerTypes } from "../../../interfaces/IAvailableAnswerTypes";
import { IQuestion } from "../../../interfaces/IQuestion";
import { dictionary } from "../../../lang";
import { languageState, surveyResponseState } from "../../../store/atoms";
import { getTitle, getTooltip } from "../../../utils/getObjectValue";
import { isQuestionTypeSimple } from "../../../utils/isQuestionTypeSimple";
import { getQuestionState } from "../../../utils/surveyResponseOperations";
import { AnswerInput } from "../AnswerInput";
import { QuestionTitle } from "../QuestionTitle";
import { SubQuestionInput } from "../SubQuestionInput";
import { ErrorText, Wrapper } from "./style";

interface QuestionInputProps {
  question: IQuestion;
}

export const QuestionInput = ({ question }: QuestionInputProps) => {
  const language = useRecoilValue(languageState);
  const isGrid = !isQuestionTypeSimple(question);
  const surveyResponse = useRecoilValue(surveyResponseState);
  const [answersState, isError] = getQuestionState({ survey: surveyResponse!, questionId: question.id });
  const exclusiveChecked = question.answers.find((sq) => sq.exclusive && answersState.includes(sq.id));
  const isCheckedExclusive = !!exclusiveChecked;
  const tooltip = getTooltip(question, language);

  return (
    <Wrapper>
      <QuestionTitle order={question.order} tooltip={tooltip}>
        {getTitle(question, language)}
      </QuestionTitle>
      {isError && <ErrorText className="perguntaObrigatoria">{dictionary[language].perguntaObrigatoria}</ErrorText>}

      {!isGrid &&
        question.answers.map((answer) => (
          <AnswerInput
            answer={answer}
            type={question.questionType as IAvailableAnswerTypes}
            answersState={answersState}
            questionId={question.id}
            inactive={isCheckedExclusive && exclusiveChecked?.id !== answer.id}
            question={[question.order, getTitle(question, language)]}
          />
        ))}

      {isGrid &&
        question.subQuestions.map((subQuestion) => (
          <SubQuestionInput subQuestion={subQuestion} parentOrder={question.order} questionId={question.id} />
        ))}
    </Wrapper>
  );
};
