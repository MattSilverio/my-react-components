import React, { useRef, useState } from "react";
import { DirectionalHint, TooltipHost } from "@fluentui/react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { DiscardIcon, IconsContainer, RecoverIcon, Title, ViewIcon, Wrapper } from "./style";
import { RemoveDeliverablePopup } from "../../../containers/CreateProject/components/RemoveDeliverablePopup";
import { IGroupedDeliverable } from "../../../interfaces/IDeliverableSuggestion";
import { dictionary } from "../../../lang";
import { languageState, deliverablesSuggestionState } from "../../../store/atoms";
import {
  reconsiderSuggestion,
  reconsiderOmitted,
  discardOmitted,
} from "../../../utils/deliverablesSuggestionsOperations";
import { getName } from "../../../utils/getObjectValue";
import { DeliverablePopup } from "../DeliverablePopup";

interface DeliverableGroupProps {
  deliverable: IGroupedDeliverable;
  subjectId: number;
  disciplineId: number;
  isOmitted?: boolean;
}

export const DeliverableGroup = ({ deliverable, subjectId, disciplineId, isOmitted }: DeliverableGroupProps) => {
  const language = useRecoilValue(languageState);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [showViewPopup, setShowViewPopup] = useState(false);
  const setDeliverableSuggestions = useSetRecoilState(deliverablesSuggestionState);
  const isDisregarded = !!(deliverable.modified && !isOmitted);
  const isReconsidered = !!(deliverable.modified && isOmitted);

  const ref = useRef(null);

  const handleDiscardSuggestion = () => {
    setShowDeletePopup(true);
  };

  const handleRecoverSuggestion = () => {
    setDeliverableSuggestions((prevState) =>
      reconsiderSuggestion({
        deliverableId: deliverable!.id,
        subjectId,
        disciplineId,
        result: prevState!,
      })
    );
  };

  const handleRecoverOmitted = () => {
    setDeliverableSuggestions((prevState) =>
      reconsiderOmitted({
        deliverableId: deliverable!.id,
        subjectId,
        disciplineId,
        result: prevState!,
      })
    );
  };

  const handleDiscardOmitted = () => {
    setDeliverableSuggestions((prevState) =>
      discardOmitted({
        deliverableId: deliverable!.id,
        subjectId,
        disciplineId,
        result: prevState!,
      })
    );
  };

  const handleView = () => {
    setShowViewPopup(true);
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (ref.current === e.target) {
      setShowViewPopup(true);
    }
  };

  return (
    <Wrapper isDisregarded={isDisregarded} isOmitted={isOmitted} isReconsidered={isReconsidered}>
      <Title onClick={handleClick} ref={ref} isOmitted={isOmitted} isReconsidered={isReconsidered}>
        {getName(deliverable, language)}
        {isDisregarded && <span>{" - " + dictionary[language].descartadoPeloUsuario}</span>}
        {isReconsidered && <span>{" - " + dictionary[language].reconsideradoPeloUsuario}</span>}
      </Title>

      <IconsContainer>
        <TooltipHost directionalHint={DirectionalHint.topCenter} content={dictionary[language].visualizarEntregavel}>
          <ViewIcon onClick={handleView} />
        </TooltipHost>

        {!isOmitted && (
          <>
            {isDisregarded && (
              <TooltipHost
                directionalHint={DirectionalHint.topCenter}
                content={dictionary[language].reconsiderarEntregavel}
              >
                <RecoverIcon onClick={handleRecoverSuggestion} />
              </TooltipHost>
            )}

            {!isDisregarded && (
              <TooltipHost
                directionalHint={DirectionalHint.topCenter}
                content={dictionary[language].desconsiderarEntregavel}
              >
                <DiscardIcon onClick={handleDiscardSuggestion} />
              </TooltipHost>
            )}
          </>
        )}

        {isOmitted && (
          <>
            {!isReconsidered && (
              <TooltipHost
                directionalHint={DirectionalHint.topCenter}
                content={dictionary[language].reconsiderarEntregavel}
              >
                <RecoverIcon onClick={handleDiscardOmitted} />
              </TooltipHost>
            )}

            {isReconsidered && (
              <TooltipHost
                directionalHint={DirectionalHint.topCenter}
                content={dictionary[language].desconsiderarEntregavel}
              >
                <DiscardIcon onClick={handleRecoverOmitted} />
              </TooltipHost>
            )}
          </>
        )}
      </IconsContainer>

      <RemoveDeliverablePopup
        deliverable={deliverable}
        show={showDeletePopup}
        onDismiss={() => setShowDeletePopup(false)}
        disciplineId={disciplineId}
        subjectId={subjectId}
      />

      <DeliverablePopup deliverable={deliverable} show={showViewPopup} onDismiss={() => setShowViewPopup(false)} />
    </Wrapper>
  );
};
