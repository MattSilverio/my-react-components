import React, { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { IAvailableAnswerTypes } from "../../../interfaces/IAvailableAnswerTypes";
import { IQuestion, ISubQuestion } from "../../../interfaces/IQuestion";
import { ISurveyResponse } from "../../../interfaces/ISurveyResponse";
import { dictionary } from "../../../lang";
import { languageState, modeState, selectedCommentQuestionState } from "../../../store/atoms";
import { getTitle, getTooltip } from "../../../utils/getObjectValue";
import { isQuestionTypeSimple } from "../../../utils/isQuestionTypeSimple";
import { getQuestionState } from "../../../utils/surveyResponseOperations";
import { AnswerInputRedo } from "../AnswerInputRedo";
import { CommentButton } from "../CommentButton";
import { QuestionTitle } from "../QuestionTitle";
import { SubQuestionInputRedo } from "../SubQuestionInputRedo";
import { Wrapper } from "./style";

interface ShowcaseQuestionProps {
  question: IQuestion;
  questionNumber: number;
  state: [ISurveyResponse, React.Dispatch<ISurveyResponse>];
}

export const RedoQuestion = ({ question, questionNumber, state }: ShowcaseQuestionProps) => {
  const [survey, setSurvey] = state;
  const [blackList, setBlackList] = useState<number[]>([]);
  const mode = useRecoilValue(modeState);
  const language = useRecoilValue(languageState);
  const setSelectedQuestion = useSetRecoilState(selectedCommentQuestionState);
  const isGrid = !isQuestionTypeSimple(question);
  const [answersState] = getQuestionState({ survey: survey!, questionId: question.id });
  const tooltip = getTooltip(question, language);

  const handleBlacklistCommentPopup = (q: IQuestion | ISubQuestion) => {
    if (blackList.includes(q.id)) return false;

    setBlackList([...blackList, q.id]);
    setSelectedQuestion(q);
  };

  return (
    <Wrapper>
      {mode == "checkSurvey" && (
        <CommentButton question={question}>{dictionary[language].adicionarComentario}</CommentButton>
      )}

      <QuestionTitle order={questionNumber} tooltip={tooltip}>
        {getTitle(question, language)}
      </QuestionTitle>

      {!isGrid &&
        question.answers.map((answer) => (
          <AnswerInputRedo
            question={[questionNumber, getTitle(question, language)]}
            answer={answer}
            type={question.questionType as IAvailableAnswerTypes}
            answersState={answersState}
            questionId={question.id}
            state={[survey, setSurvey]}
            handleBlacklistCommentPopup={() => handleBlacklistCommentPopup(question)}
          />
        ))}

      {isGrid &&
        question.subQuestions.map((subQuestion) => (
          <SubQuestionInputRedo
            subQuestion={subQuestion}
            parentOrder={questionNumber}
            questionId={question.id}
            state={[survey, setSurvey]}
            handleBlacklistCommentPopup={() => handleBlacklistCommentPopup(subQuestion)}
          />
        ))}
    </Wrapper>
  );
};
