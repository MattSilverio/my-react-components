import React from "react";
import { ReactNode } from "react";
import { Content, Title, Top, Wrapper } from "./style";

interface WhiteBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  gap?: "No" | "Small" | "Medium" | "Big";
  title: string;
  children: ReactNode;
  color?: string;
  noPadding?: boolean;
  maxWidth?: number;
  menu?: ReactNode;
  centerContentVertically?: boolean;
}

export const WhiteBox = ({
  noPadding,
  title,
  children,
  gap,
  color,
  maxWidth,
  menu,
  centerContentVertically,
  ...rest
}: WhiteBoxProps) => {
  return (
    <Wrapper color={color} maxWidth={maxWidth}>
      <Top>
        <Title>{title}</Title>
        {menu}
      </Top>
      <Content gap={gap} noPadding={noPadding} centerContentVertically={centerContentVertically} {...rest}>
        {children}
      </Content>
    </Wrapper>
  );
};
