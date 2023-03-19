import React from "react";
import { ReactNode } from "react";
import { IoArrowBackSharp } from "react-icons/io5";
import { BackIcon, Title, Wrapper } from "./style";

interface SectionTitleProps {
  icon?: ReactNode;
  title: string;
  children?: ReactNode;
  back?: () => void;
}

export const SectionTitle = ({ icon, title, children, back }: SectionTitleProps) => {
  return (
    <Wrapper>
      {back && <BackIcon onClick={back} />}
      {icon}
      <Title>{title}</Title>
      {children}
    </Wrapper>
  );
};
