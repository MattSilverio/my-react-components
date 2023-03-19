import React, { useState } from "react";
import { IoAddSharp, IoRemoveSharp } from "react-icons/io5";
import { useRecoilValue } from "recoil";
import { IGroupedDiscipline } from "../../../interfaces/IDeliverableSuggestion";
import { languageState } from "../../../store/atoms";
import { getName } from "../../../utils/getObjectValue";
import { SubjectGroup } from "../SubjectGroup";
import { SubjectsContainer, TitleContainer, TitleIcon, TitleText, Wrapper } from "./style";

interface DisciplineGroupProps {
  disciplineGroup: IGroupedDiscipline;
  isOmitted?: boolean;
}

export const DisciplineGroup = ({ disciplineGroup, isOmitted }: DisciplineGroupProps) => {
  const language = useRecoilValue(languageState);
  const [expanded, setExpanded] = useState(true);

  return (
    <Wrapper>
      <TitleContainer onClick={() => setExpanded((prevState) => !prevState)}>
        <TitleText>{getName(disciplineGroup, language)}</TitleText>
        <TitleIcon>{expanded ? <IoRemoveSharp /> : <IoAddSharp />}</TitleIcon>
      </TitleContainer>

      <SubjectsContainer expanded={expanded}>
        {disciplineGroup.subjects.map((subjectGroup) => (
          <SubjectGroup subjectGroup={subjectGroup} disciplineId={disciplineGroup.id} isOmitted={isOmitted} />
        ))}
      </SubjectsContainer>
    </Wrapper>
  );
};
