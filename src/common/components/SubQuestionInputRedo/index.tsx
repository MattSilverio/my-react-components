import React from "react";
import { useRecoilValue } from "recoil";
import { IAvailableAnswerTypes } from "../../../interfaces/IAvailableAnswerTypes";
import { ISubQuestion } from "../../../interfaces/IQuestion";
import { ISurveyResponse } from "../../../interfaces/ISurveyResponse";
import { dictionary } from "../../../lang";
import { languageState, modeState } from "../../../store/atoms";
import { getTitle, getTooltip } from "../../../utils/getObjectValue";
import { getSubQuestionState } from "../../../utils/surveyResponseOperations";
import { AnswerInputRedo } from "../AnswerInputRedo";
import { CommentButton } from "../CommentButton";
import { QuestionTitle } from "../QuestionTitle";
import { ErrorText, Wrapper } from "./style";

interface SubQuestionInputRedoProps {
  subQuestion: ISubQuestion;
  parentOrder: number;
  questionId: number;
  state: [ISurveyResponse, React.Dispatch<ISurveyResponse>];
  handleBlacklistCommentPopup: (subQuestion: ISubQuestion) => void;
}

export const SubQuestionInputRedo = ({
  subQuestion,
  parentOrder,
  questionId,
  state,
  handleBlacklistCommentPopup,
}: SubQuestionInputRedoProps) => {
  const [surveyResponse, setSurveyResponse] = state;
  const language = useRecoilValue(languageState);
  const mode = useRecoilValue(modeState);

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
      {mode == "checkSurvey" && (
        <CommentButton question={subQuestion}>{dictionary[language].adicionarComentario}</CommentButton>
      )}

      <QuestionTitle order={subQuestion.order} parentOrder={parentOrder} tooltip={tooltip}>
        {getTitle(subQuestion, language)}
      </QuestionTitle>
      {isError && <ErrorText>{dictionary[language].perguntaObrigatoria}</ErrorText>}

      {subQuestion.subQuestionAnswers.map((subQuestionAnswer) => (
        <AnswerInputRedo
          answer={subQuestionAnswer}
          type={subQuestion.questionType as IAvailableAnswerTypes}
          answersState={answersState}
          questionId={questionId}
          subQuestionId={subQuestion.id}
          inactive={!subQuestionAnswer.exclusive && isCheckedExclusive}
          question={[subQuestion.order, getTitle(subQuestion, language)]}
          state={[surveyResponse, setSurveyResponse]}
          handleBlacklistCommentPopup={() => handleBlacklistCommentPopup(subQuestion)}
        />
      ))}
    </Wrapper>
  );
};
