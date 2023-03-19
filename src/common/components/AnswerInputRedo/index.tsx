import React, { useRef } from "react";
import { useRecoilValue } from "recoil";
import { IAnswer } from "../../../interfaces/IAnswer";
import { IAvailableAnswerTypes } from "../../../interfaces/IAvailableAnswerTypes";
import { IQuestion, ISubQuestion } from "../../../interfaces/IQuestion";
import { ISurveyResponse } from "../../../interfaces/ISurveyResponse";
import { languageState } from "../../../store/atoms";
import { getText, getTooltip } from "../../../utils/getObjectValue";
import { setQuestionAnswer, setSubQuestionAnswer } from "../../../utils/surveyResponseOperations";
import { Checkbox } from "../Checkbox";
import { ChoiceInput } from "../ChoiceInput";
import { Tooltip } from "../Tooltip";
import TooltipModal, { ImperativeTooltipModal } from "../TooltipModal";
import { Wrapper } from "./style";

interface AnswerInputProps {
  answer: IAnswer;
  type: IAvailableAnswerTypes;
  answersState: number[];
  questionId: number;
  subQuestionId?: number;
  inactive?: boolean;
  question: [number, string];
  state: [ISurveyResponse, React.Dispatch<ISurveyResponse>];
  handleBlacklistCommentPopup: () => void;
}

export const AnswerInputRedo = ({
  answer,
  type,
  answersState,
  questionId,
  subQuestionId,
  inactive,
  question,
  state,
  handleBlacklistCommentPopup,
}: AnswerInputProps) => {
  const [number, title] = question;
  const language = useRecoilValue(languageState);
  const [surveyResponse, setSurveyResponse] = state;
  const tooltip = getTooltip(answer, language);
  const tooltipModalRef = useRef<ImperativeTooltipModal>(null);

  const handleTooltip = () => tooltipModalRef.current?.show();

  const handleAction = () => {
    const isSubQuestion = !!subQuestionId;

    if (isSubQuestion) {
      setSurveyResponse(
        setSubQuestionAnswer({
          survey: surveyResponse!,
          questionId: questionId,
          subQuestionAnswerId: answer.id,
          subQuestionId: subQuestionId,
          answerType: type,
          isExclusive: answer.exclusive,
        })
      );
    } else {
      setSurveyResponse(
        setQuestionAnswer({
          survey: surveyResponse!,
          questionId: questionId,
          answerId: answer.id,
          answerType: type,
          isExclusive: answer.exclusive,
        })
      );
    }

    handleBlacklistCommentPopup();
  };

  return (
    <Wrapper inactive={inactive}>
      {type === "SINGLE" && (
        <ChoiceInput blackLabel checked={answersState.includes(answer.id)} onAction={handleAction} inactive={inactive}>
          {getText(answer, language)}
        </ChoiceInput>
      )}
      {type === "MULTI" && (
        <Checkbox blackLabel checked={answersState.includes(answer.id)} onAction={handleAction} inactive={inactive}>
          {getText(answer, language)}
        </Checkbox>
      )}

      {tooltip && <Tooltip handleTooltip={handleTooltip} />}

      <TooltipModal
        ref={tooltipModalRef}
        question={{
          index: number,
          text: title,
        }}
        answer={getText(answer, language)}
        description={tooltip}
      />
    </Wrapper>
  );
};
