import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { IGroupedSubject } from "../../../interfaces/IDeliverableSuggestion";
import { languageState } from "../../../store/atoms";
import { getName } from "../../../utils/getObjectValue";
import { DeliverableGroup } from "../DeliverableGroup";
import { ExpandedIcon, DeliverablesContainer, TitleContainer, TitleIcon, TitleText, Wrapper } from "./style";

interface SubjectGroup {
  subjectGroup: IGroupedSubject;
  disciplineId: number;
  isOmitted?: boolean;
}

export const SubjectGroup = ({ subjectGroup, disciplineId, isOmitted }: SubjectGroup) => {
  const language = useRecoilValue(languageState);
  const [expanded, setExpanded] = useState(true);

  // TODO: Mover essa lógica para o backend
  if (subjectGroup.deliverables.length === 0) return <></>;

  return (
    <Wrapper>
      <TitleContainer onClick={() => setExpanded((prevState) => !prevState)}>
        <TitleText>{getName(subjectGroup, language)}</TitleText>
        <TitleIcon>
          <ExpandedIcon expanded={expanded} />
        </TitleIcon>
      </TitleContainer>

      <DeliverablesContainer expanded={expanded}>
        {subjectGroup.deliverables.map((deliverable) => (
          <DeliverableGroup
            deliverable={deliverable}
            key={deliverable.id}
            subjectId={subjectGroup.id}
            disciplineId={disciplineId}
            isOmitted={isOmitted}
          />
        ))}
      </DeliverablesContainer>
    </Wrapper>
  );
};
