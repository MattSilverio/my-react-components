import React from "react";
import { TbMoodSad } from "react-icons/tb";
import { useRecoilValue } from "recoil";
import { languageState } from "../../../store/atoms";
import { dictionary } from "../../../lang";
import { Wrapper, Text, Icon } from "./style";

export const ProjectNotFound = () => {
  const language = useRecoilValue(languageState);

  return (
    <Wrapper>
      <Icon>
        <TbMoodSad />
      </Icon>
      <Text>{dictionary[language].erro_PROJECT_NOT_FOUND}</Text>
    </Wrapper>
  );
};
