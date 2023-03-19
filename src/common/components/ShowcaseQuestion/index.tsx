import React, { useContext } from "react";
import { useRecoilValue } from "recoil";
import { IAvailableAnswerTypes } from "../../../interfaces/IAvailableAnswerTypes";
import { IQuestion } from "../../../interfaces/IQuestion";
import { dictionary } from "../../../lang";
import { languageState } from "../../../store/atoms";
import { SurveyShowcaseContext } from "../../../store/SurveyShowcaseContext";
import { getTitle, getTooltip } from "../../../utils/getObjectValue";
import { isQuestionTypeSimple } from "../../../utils/isQuestionTypeSimple";
import { getQuestionState } from "../../../utils/surveyResponseOperations";
import { CommentButton } from "../CommentButton";
import { QuestionTitle } from "../QuestionTitle";
import { ShowcaseAnswer } from "../ShowcaseAnswer";
import { ShowcaseSubQuestion } from "../ShowcaseSubQuestion";
import { Wrapper } from "./style";

interface ShowcaseQuestionProps {
  question: IQuestion;
  questionNumber: number;
}

export const ShowcaseQuestion = ({ question, questionNumber }: ShowcaseQuestionProps) => {
  const language = useRecoilValue(languageState);
  const isGrid = !isQuestionTypeSimple(question);
  const { surveyResponse } = useContext(SurveyShowcaseContext);
  const [answersState] = getQuestionState({ survey: surveyResponse, questionId: question.id });
  const questionResponse = surveyResponse.questions.find((q) => q.questionId == question.id);
  const tooltip = getTooltip(question, language);
  const noComments = !questionResponse?.comment?.length;

  return (
    <Wrapper>
      {!noComments && <CommentButton question={question}>{dictionary[language].verComentarios}</CommentButton>}

      <QuestionTitle order={questionNumber} tooltip={tooltip}>
        {getTitle(question, language)}
      </QuestionTitle>

      {!isGrid &&
        question.answers.map((answer) => (
          <ShowcaseAnswer
            question={[questionNumber, getTitle(question, language)]}
            answer={answer}
            type={question.questionType as IAvailableAnswerTypes}
            answersState={answersState}
          />
        ))}

      {isGrid &&
        question.subQuestions.map((subQuestion) => (
          <ShowcaseSubQuestion
            subQuestion={subQuestion}
            parentOrder={questionNumber}
            questionId={question.id}
            questionResponse={questionResponse}
          />
        ))}
    </Wrapper>
  );
};
