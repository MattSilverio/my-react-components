import React, { useRef } from "react";
import { useRecoilValue } from "recoil";
import { IAnswer } from "../../../interfaces/IAnswer";
import { IAvailableAnswerTypes } from "../../../interfaces/IAvailableAnswerTypes";
import { languageState } from "../../../store/atoms";
import { getText, getTooltip } from "../../../utils/getObjectValue";
import { Checkbox } from "../Checkbox";
import { ChoiceInput } from "../ChoiceInput";
import { Tooltip } from "../Tooltip";
import TooltipModal, { ImperativeTooltipModal } from "../TooltipModal";
import { Wrapper } from "./style";

interface ShowcaseAnswerProps {
  answer: IAnswer;
  type: IAvailableAnswerTypes;
  answersState: number[];
  question: [number, string];
}

export const ShowcaseAnswer = ({ answer, type, answersState, question }: ShowcaseAnswerProps) => {
  const [number, title] = question;
  const language = useRecoilValue(languageState);
  const tooltipModalRef = useRef<ImperativeTooltipModal>(null);
  const tooltip = getTooltip(answer, language);
  const handleTooltip = () => tooltipModalRef.current?.show();

  return (
    <Wrapper>
      {type === "SINGLE" && (
        <ChoiceInput blackLabel checked={answersState.includes(answer.id)} showcase>
          {getText(answer, language)}
        </ChoiceInput>
      )}

      {type === "MULTI" && (
        <Checkbox blackLabel checked={answersState.includes(answer.id)} showcase>
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
        description={getTooltip(answer, language)}
      />
    </Wrapper>
  );
};
