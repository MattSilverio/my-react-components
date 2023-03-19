import React, { ReactNode } from "react";
import { Desc, Icon, Wrapper } from "./style";

interface FlatButtonProps {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  icon?: ReactNode;
  small?: boolean;
  bold?: boolean;
}

export const FlatButton = ({ children, disabled, icon, bold, onClick }: FlatButtonProps) => {
  return (
    <Wrapper onClick={onClick} small bold={bold}>
      <Icon>{icon}</Icon>
      <Desc>{children}</Desc>
    </Wrapper>
  );
};
