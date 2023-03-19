import React from "react";
import { BrasilIcon } from "../../icons/Brasil";
import { EUAIcon } from "../../icons/EUA";
import { Content, FlagIcon, JustifiedContent, Title, Wrapper } from "./style";

interface ShowcaseProps {
  title?: string;
  value?: string;
  valueEn?: string;
  black?: boolean;
}

export const Showcase = ({ title, value, valueEn, black }: ShowcaseProps) => {
  return (
    <Wrapper>
      {title && <Title>{title}</Title>}
      <Content black={black}>
        {valueEn && (
          <FlagIcon>
            <BrasilIcon />
          </FlagIcon>
        )}
        <JustifiedContent>{value}</JustifiedContent>
      </Content>

      {valueEn && (
        <>
          <Content black={black}>
            <FlagIcon>
              <EUAIcon />
            </FlagIcon>
            <JustifiedContent>{valueEn}</JustifiedContent>
          </Content>
        </>
      )}
    </Wrapper>
  );
};
