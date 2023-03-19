import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { IAvailablePhaseNumber } from "../../../interfaces/IAvailablePhaseNumber";
import { ISurvey } from "../../../interfaces/ISurvey";
import { ISurveyResponse } from "../../../interfaces/ISurveyResponse";
import { dictionary } from "../../../lang";
import { languageState, modeState, selectedCommentQuestionState } from "../../../store/atoms";
import { SurveyShowcaseProvider } from "../../../store/SurveyShowcaseContext";
import { Button } from "../Button";
import { ShowcaseSideCommentPopup } from "../ShowcaseSideCommentPopup";
import { ShowcaseQuestion } from "../ShowcaseQuestion";
import { BtnContainer, Data, FormsContainer, Metadata, Strong } from "./style";

import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/site-users/web";
import { formatDate } from "../../../utils/formatDate";
import { ShimmerComponent } from "../Shimmer";

interface IMetadata {
  authorEmail: string;
  authorName?: string;
  createdAt: string;
}

interface SurveyShowcaseProps {
  survey: ISurvey;
  metadata?: IMetadata;
  responseNumber?: number;
  surveyResponse?: ISurveyResponse;
  isReviewStep?: boolean;
  backStep?: () => void;
  completeStep?: () => void;
}

export const SurveyShowcase = ({
  survey,
  metadata,
  responseNumber,
  surveyResponse,
  isReviewStep,
  backStep,
  completeStep,
}: SurveyShowcaseProps) => {
  const language = useRecoilValue(languageState);
  const mode = useRecoilValue(modeState);
  const selectedQuestion = useRecoilValue(selectedCommentQuestionState);
  const response = surveyResponse ?? { surveyId: 0, responsePhase: survey.fel as IAvailablePhaseNumber, questions: [] };
  const [userDisplayName, setUserDisplayName] = useState("");
  const [isLoaded, setIsLoaded] = useState(!!metadata?.authorName);

  const formatUserDisplayName = (displayName?: string) => displayName?.replace("_CONTR", "");

  const getUserDisplayName = async () => {
    const { data } = await sp.web.ensureUser(metadata!.authorEmail);

    setUserDisplayName(formatUserDisplayName(data.Title) as string);
    setIsLoaded(true);
  };

  useEffect(() => {
    if (!metadata?.authorName) getUserDisplayName();
  }, [metadata]);

  return (
    <SurveyShowcaseProvider survey={survey} surveyResponse={response}>
      {metadata && (
        <Metadata>
          <ShimmerComponent isLoaded={isLoaded} width={209} height={22}>
            <Data>
              <Strong>{dictionary[language].autor + ": "}</Strong>
              {formatUserDisplayName(metadata.authorName) ?? userDisplayName}
            </Data>
          </ShimmerComponent>
          <ShimmerComponent isLoaded={isLoaded} width={70} height={22}>
            <Data>
              <Strong>{dictionary[language].versao + ": "}</Strong>
              {responseNumber}
            </Data>
          </ShimmerComponent>
          <ShimmerComponent isLoaded={isLoaded} width={201} height={22}>
            <Data>
              <Strong>{dictionary[language].publicadoEm + ": "}</Strong>
              {formatDate(metadata.createdAt, language)}
            </Data>
          </ShimmerComponent>
        </Metadata>
      )}

      <FormsContainer>
        {survey.questions.map((question, index) => (
          <ShowcaseQuestion question={question} questionNumber={index + 1} />
        ))}
      </FormsContainer>

      {backStep && completeStep && (
        <BtnContainer>
          <Button type="Hero" onClick={backStep}>
            {dictionary[language].voltar}
          </Button>
          <Button type="Basic" onClick={completeStep}>
            {dictionary[language].finalizar}
          </Button>
        </BtnContainer>
      )}

      <ShowcaseSideCommentPopup
        show={(isReviewStep && !!selectedQuestion) || (mode == "viewSurvey" && !!selectedQuestion)}
      />
    </SurveyShowcaseProvider>
  );
};
