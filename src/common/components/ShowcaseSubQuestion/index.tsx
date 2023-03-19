import React, { useContext } from "react";
import { useRecoilValue } from "recoil";
import { IAvailableAnswerTypes } from "../../../interfaces/IAvailableAnswerTypes";
import { ISubQuestion } from "../../../interfaces/IQuestion";
import { IQuestionResponse } from "../../../interfaces/ISurveyResponse";
import { dictionary } from "../../../lang";
import { languageState } from "../../../store/atoms";
import { SurveyShowcaseContext } from "../../../store/SurveyShowcaseContext";
import { getTitle, getTooltip } from "../../../utils/getObjectValue";
import { getSubQuestionState } from "../../../utils/surveyResponseOperations";
import { CommentButton } from "../CommentButton";
import { QuestionTitle } from "../QuestionTitle";
import { ShowcaseAnswer } from "../ShowcaseAnswer";
import { ErrorText, Wrapper } from "./style";

interface ShowcaseSubQuestionProps {
  subQuestion: ISubQuestion;
  parentOrder: number;
  questionId: number;
  questionResponse: IQuestionResponse | undefined;
}

export const ShowcaseSubQuestion = ({
  subQuestion,
  parentOrder,
  questionId,
  questionResponse,
}: ShowcaseSubQuestionProps) => {
  const language = useRecoilValue(languageState);
  const { surveyResponse } = useContext(SurveyShowcaseContext);
  const [answersState, isError] = getSubQuestionState({
    survey: surveyResponse,
    questionId,
    subQuestionId: subQuestion.id,
  });

  const tooltip = getTooltip(subQuestion, language);
  const noComment = !questionResponse?.subQuestions.find((sq) => sq.subQuestionId == subQuestion.id)?.comment?.length;

  return (
    <Wrapper>
      {!noComment && <CommentButton question={subQuestion}>{dictionary[language].verComentarios}</CommentButton>}

      <QuestionTitle order={subQuestion.order} parentOrder={parentOrder} tooltip={tooltip}>
        {getTitle(subQuestion, language)}
      </QuestionTitle>
      {isError && <ErrorText>{dictionary[language].perguntaObrigatoria}</ErrorText>}

      {subQuestion.subQuestionAnswers.map((subQuestionAnswer) => (
        <ShowcaseAnswer
          answer={subQuestionAnswer}
          type={subQuestion.questionType as IAvailableAnswerTypes}
          answersState={answersState}
          question={[questionId, getTitle(subQuestion, language)]}
        />
      ))}
    </Wrapper>
  );
};
