import React from "react";
import { IoAlertCircleOutline } from "react-icons/io5";
import { useRecoilValue } from "recoil";
import { languageState } from "../../../store/atoms";
import { dictionary } from "../../../lang";
import { Wrapper, Text, Icon } from "./style";

export const Error = () => {
  const language = useRecoilValue(languageState);

  return (
    <Wrapper>
      <Icon>
        <IoAlertCircleOutline />
      </Icon>
      <Text>{dictionary[language].erroAoCarregar}</Text>
    </Wrapper>
  );
};
