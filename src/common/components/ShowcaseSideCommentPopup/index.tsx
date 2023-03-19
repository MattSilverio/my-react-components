import { Icon } from "@fluentui/react";
import React, { useContext, useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { ISubQuestion } from "../../../interfaces/IQuestion";
import { IQuestionResponse, ISubQuestionResponse } from "../../../interfaces/ISurveyResponse";
import { dictionary } from "../../../lang";
import { languageState, selectedCommentQuestionState } from "../../../store/atoms";
import { SurveyShowcaseContext } from "../../../store/SurveyShowcaseContext";
import { formatDate } from "../../../utils/formatDate";
import { hasProperties } from "../../../utils/hasProperties";
import { Avatar, CommentHead, CommentWrapper, DateWrapper, Text, UserInfo } from "../SideCommentPopup/style";
import { SidePopup } from "../SidePopup";
import { CommentSection } from "./style";

interface IShowcaseSideCommentPopup {
  show: boolean;
}
export const ShowcaseSideCommentPopup = ({ show }: IShowcaseSideCommentPopup) => {
  const language = useRecoilValue(languageState);
  const [selectedQuestion, setSelectedQuestion] = useRecoilState(selectedCommentQuestionState);
  const { surveyResponse } = useContext(SurveyShowcaseContext);
  const [questionResponse, setQuestionResponse] = useState<IQuestionResponse | ISubQuestionResponse>(
    {} as IQuestionResponse
  );

  const _onDismiss = () => setSelectedQuestion(null);

  useEffect(() => {
    if (selectedQuestion) {
      const isSubQuestion = hasProperties(selectedQuestion as ISubQuestion, ["subQuestionAnswers"]);

      if (!isSubQuestion)
        setQuestionResponse(surveyResponse.questions.find((q) => q.questionId == selectedQuestion.id)!);
      else {
        const [surveyQuestion] = surveyResponse.questions.filter((q) =>
          q.subQuestions.find((sq) => sq.subQuestionId === selectedQuestion!.id)
        );
        const [surveySubQuestion] = surveyQuestion.subQuestions.filter(
          (sq) => sq.subQuestionId === selectedQuestion!.id
        );
        setQuestionResponse(surveySubQuestion);
      }
    }
  }, [selectedQuestion, surveyResponse]);

  return (
    <SidePopup active={show} title={dictionary[language].comentarios} size="small" onDismiss={_onDismiss}>
      <CommentSection>
        {questionResponse.comment &&
          questionResponse.comment.map((m) => (
            <CommentWrapper>
              <CommentHead>
                <UserInfo>
                  <Avatar src={m.profilePicture} />
                  {m.displayName}
                </UserInfo>
                <DateWrapper>
                  <Icon iconName="Calendar" />
                  {formatDate(m.date, language)}
                </DateWrapper>
              </CommentHead>
              <Text>{m.comment}</Text>
            </CommentWrapper>
          ))}
      </CommentSection>
    </SidePopup>
  );
};
