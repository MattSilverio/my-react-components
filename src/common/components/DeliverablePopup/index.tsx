import React from "react";
import { useRecoilValue } from "recoil";
import { ReferenceDocumentsShowcase } from "../../../containers/AdminDeliverable/components/ReferenceDocumentsShowcase";
import { IGroupedDeliverable } from "../../../interfaces/IDeliverableSuggestion";
import { dictionary } from "../../../lang";
import { languageState } from "../../../store/atoms";
import { getName, getDescription } from "../../../utils/getObjectValue";
import { GreyWrapper } from "../GreyWrapper";
import { Showcase } from "../Showcase";
import { SidePopup } from "../SidePopup";
import { SubTitle } from "./style";

interface DeliverablePopupProps {
  show: boolean;
  onDismiss: () => void;
  deliverable: IGroupedDeliverable;
}

export const DeliverablePopup = ({ show, onDismiss, deliverable }: DeliverablePopupProps) => {
  const language = useRecoilValue(languageState);
  const isDiscarded = !!deliverable.justificative;

  return (
    <SidePopup active={show} onDismiss={onDismiss} title={dictionary[language].visualizacaoDeEntrega} size="medium">
      <>
        <GreyWrapper>
          <Showcase value={getName(deliverable, language)} title={dictionary[language].nomeDaEntrega} />
        </GreyWrapper>

        {(!!deliverable.descriptionPortuguese || !!deliverable.descriptionEnglish) && (
          <GreyWrapper>
            <Showcase value={getDescription(deliverable, language)} title={dictionary[language].descricaoDaEntrega} />
          </GreyWrapper>
        )}

        <GreyWrapper>
          <SubTitle>{dictionary[language].documentosReferencia}</SubTitle>
          <ReferenceDocumentsShowcase documents={deliverable.documents} />
        </GreyWrapper>

        {!!isDiscarded && (
          <GreyWrapper>
            <Showcase value={deliverable.justificative} title={dictionary[language].justificativaDoDescarte} />
          </GreyWrapper>
        )}
      </>
    </SidePopup>
  );
};
