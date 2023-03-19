import React from "react";
import { dictionary } from "../../../lang";
import { CircleLoader } from "react-spinners";
import { languageState } from "../../../store/atoms";
import { Wrapper, Text } from "./style";
import { useRecoilValue } from "recoil";

interface LoadingProps {
  customText?: string;
}

export const Loading = ({ customText }: LoadingProps) => {
  const language = useRecoilValue(languageState);

  return (
    <Wrapper>
      <CircleLoader color="var(--green)" />
      <Text>{customText ?? dictionary[language].carregando}...</Text>
    </Wrapper>
  );
};
