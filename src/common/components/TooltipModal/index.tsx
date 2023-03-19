import React, { useState, useRef, forwardRef, useImperativeHandle } from "react";
import { useRecoilValue } from "recoil";
import { dictionary } from "../../../lang";
import { languageState } from "../../../store/atoms";
import { GenericPopup } from "../GenericPopup";
import { Line, Strong, Wrapper } from "./style";
import valelogo from "../../../common/assets/valelogo.png";

interface ITooltipModalProps {
  question: {
    index: number;
    text: string;
  };
  answer?: string;
  description: string;
}

export interface ImperativeTooltipModal {
  hide: () => void;
  show: () => void;
  isVisible: boolean;
}

const TooltipModal = ({ question, answer, description }: ITooltipModalProps, ref: React.MutableRefObject<any>) => {
  const language = useRecoilValue(languageState);
  const [isVisible, setIsVisible] = useState(false);
  const wrapperRef = useRef(null);

  const hide = () => setIsVisible(false);
  const show = () => setIsVisible(true);

  useImperativeHandle(ref, () => ({
    hide,
    show,
    isVisible,
  }));

  return (
    <Wrapper ref={wrapperRef}>
      <GenericPopup show={isVisible} logo={valelogo} title="Tooltip" onDismiss={hide} size="md">
        <Line>
          <Strong>{dictionary[language].pergunta + " " + question.index}: &nbsp;</Strong>
          {question.text}
        </Line>

        <Line hide={!answer}>
          <Strong>{dictionary[language].resposta}:</Strong>
          &nbsp;{answer}
        </Line>

        <Line>
          &nbsp;
          <div dangerouslySetInnerHTML={{ __html: description }} />
        </Line>
      </GenericPopup>
    </Wrapper>
  );
};

export default forwardRef(TooltipModal);
