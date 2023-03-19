import { Icon } from "@fluentui/react";
import React, { useEffect, useState } from "react";
import { TbTrash } from "react-icons/tb";
import { useRecoilState, useRecoilValue } from "recoil";
import { ISubQuestion } from "../../../interfaces/IQuestion";
import { IComment, ISurveyResponse } from "../../../interfaces/ISurveyResponse";
import { TextInputInitialState } from "../../../interfaces/ITextInputState";
import { dictionary } from "../../../lang";
import { currentUserState, languageState, selectedCommentQuestionState } from "../../../store/atoms";
import { formatDate } from "../../../utils/formatDate";
import { hasProperties } from "../../../utils/hasProperties";
import { Button } from "../Button";
import { SidePopup } from "../SidePopup";
import { TextInput } from "../TextInput";
import {
  Avatar,
  ButtonWrapper,
  CommentHead,
  CommentSection,
  CommentWrapper,
  DateWrapper,
  DeleteWrapper,
  Footer,
  LightText,
  Text,
  UserInfo,
  WithoutComments,
} from "./style";

interface ICommentPopupProps {
  state: [ISurveyResponse, React.Dispatch<ISurveyResponse>];
  show: boolean;
}

export const SideCommentPopup = ({ state, show }: ICommentPopupProps) => {
  const [surveyResponse, setSurveyResponse] = state;
  const language = useRecoilValue(languageState);
  const [comment, setComment] = useState(TextInputInitialState);
  const [comments, setComments] = useState<IComment[]>([]);
  const currentUser = useRecoilValue(currentUserState);
  const [selectedQuestion, setSelectedQuestion] = useRecoilState(selectedCommentQuestionState);

  const saveComment = () => {
    if (!comment.content) return setComment({ content: "", error: dictionary[language].campoObrigatorio });

    setComment(TextInputInitialState);
    setComments([
      ...comments,
      {
        comment: comment.content,
        date: new Date().toISOString(),
        email: currentUser.email,
        profilePicture: currentUser.profilePicture,
        displayName: currentUser.name,
      },
    ]);
  };

  //TODO: Deletar por ID, refatorar isso aqui
  const deleteComment = ({ comment }: IComment) => setComments(comments.filter((f) => f.comment !== comment));
  const _onDismiss = () => setSelectedQuestion(null);

  useEffect(() => {
    if (!!comments.length) {
      setSurveyResponse({
        ...surveyResponse,
        questions: surveyResponse.questions.map((q) => {
          if (q.questionId === selectedQuestion!.id) {
            return {
              ...q,
              comment: comments,
            };
          } else
            return {
              ...q,
              subQuestions: q.subQuestions.map((sq) => {
                if (sq.subQuestionId === selectedQuestion!.id)
                  return {
                    ...sq,
                    comment: comments,
                  };
                else return sq;
              }),
            };
        }),
      });
    }
  }, [comments]);

  useEffect(() => {
    if (selectedQuestion) {
      const isSubQuestion = hasProperties(selectedQuestion as ISubQuestion, ["subQuestionAnswers"]);

      if (!isSubQuestion) {
        const surveyQuestion = surveyResponse.questions.find((q) => q.questionId == selectedQuestion.id);
        const hasComment = surveyQuestion && !!surveyQuestion.comment?.length;

        setComments(hasComment ? surveyQuestion!.comment! : []);
      } else {
        const [surveyQuestion] = surveyResponse.questions.filter((q) =>
          q.subQuestions.find((sq) => sq.subQuestionId === selectedQuestion!.id)
        );
        const [surveySubQuestion] = surveyQuestion.subQuestions.filter(
          (sq) => sq.subQuestionId === selectedQuestion!.id
        );
        const hasComment = surveyQuestion && !!surveySubQuestion.comment?.length;

        setComments(hasComment ? surveySubQuestion.comment! : []);
      }
    }
    setComment(TextInputInitialState);
  }, [selectedQuestion]);

  return (
    <SidePopup size="small" title={dictionary[language].adicionarComentario} active={show} onDismiss={_onDismiss}>
      <CommentSection>
        <WithoutComments isVisible={!comments.length}>
          <LightText>{dictionary[language].semComentarios}</LightText>
        </WithoutComments>

        {comments.map((m) => (
          <CommentWrapper>
            <CommentHead>
              <UserInfo>
                <Avatar src={m.profilePicture} />
                {m.displayName}
                <DateWrapper>
                  <Icon iconName="Calendar" />
                  {formatDate(m.date, language)}
                </DateWrapper>
              </UserInfo>
              <DeleteWrapper onClick={() => deleteComment(m)}>
                <TbTrash />
                {dictionary[language].excluirComentario}
              </DeleteWrapper>
            </CommentHead>
            <Text>{m.comment}</Text>
          </CommentWrapper>
        ))}
      </CommentSection>

      <Footer>
        <TextInput textarea title={dictionary[language].comentario} state={[comment, setComment]} />
        <ButtonWrapper>
          <Button type="Basic" onClick={saveComment}>
            {dictionary[language].salvar}
          </Button>
        </ButtonWrapper>
      </Footer>
    </SidePopup>
  );
};
