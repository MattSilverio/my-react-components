import React from "react";
import { Content, Title, Wrapper } from "./style";

interface ShowcaseProps {
  title: string;
  value?: string;
}

export const ShowcaseInline = ({ title, value }: ShowcaseProps) => {
  return (
    <Wrapper>
      <Title>{title}:</Title>
      <Content>{value}</Content>
    </Wrapper>
  );
};
