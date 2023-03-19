import React from "react";
import { useRecoilValue } from "recoil";
import { dictionary } from "../../../lang";
import { languageState } from "../../../store/atoms";
import { Content, ListContainer, NoContent, Title, Wrapper } from "./style";

interface ShowcaseProps {
  title: string;
  value: string[];
}

export const ShowcaseList = ({ title, value }: ShowcaseProps) => {
  const language = useRecoilValue(languageState);

  return (
    <Wrapper>
      <Title>{title}</Title>
      <ListContainer>
        {value.map((v) => (
          <Content>{v}</Content>
        ))}
      </ListContainer>

      {value.length === 0 && <NoContent>{dictionary[language].semItensParaMostrar}</NoContent>}
    </Wrapper>
  );
};
