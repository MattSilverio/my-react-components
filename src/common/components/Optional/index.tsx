import React from "react";
import { useRecoilValue } from "recoil";
import { dictionary } from "../../../lang";
import { languageState } from "../../../store/atoms";
import { Wrapper } from "./style";

export const Optional = () => {
  const language = useRecoilValue(languageState);
  return <Wrapper>- {dictionary[language].opcional}</Wrapper>;
};
