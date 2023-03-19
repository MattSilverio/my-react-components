import React from "react";
import { Icon } from "@fluentui/react";
import { Container } from "./style";
import { useSetRecoilState } from "recoil";
import { commentPopupState, selectedCommentQuestionState } from "../../../store/atoms";
import { IQuestion, ISubQuestion } from "../../../interfaces/IQuestion";

interface ICommentButtonProps {
  children: React.ReactNode;
  question: IQuestion | ISubQuestion;
}

export const CommentButton = ({ children, question }: ICommentButtonProps) => {
  const setShow = useSetRecoilState(commentPopupState);
  const setSelectedQuestion = useSetRecoilState(selectedCommentQuestionState);

  const openPopup = () => {
    setSelectedQuestion(question);
    setShow(true);
  };

  return (
    <Container onClick={openPopup}>
      {children}
      <Icon iconName="Comment" />
    </Container>
  );
};
