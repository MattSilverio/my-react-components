import React from "react";
import { ReactNode } from "react";
import { Front, Icon, Wrapper } from "./style";
import { IAvailableButtonTypes } from "../../../interfaces/IAvailableButtonTypes";

interface ButtonProps {
  type: IAvailableButtonTypes;
  children: ReactNode;
  onClick: () => void;
  small?: boolean;
  micro?: boolean;
  disabled?: boolean;
  icon?: ReactNode;
  className?: string;
}

export const Button = ({ children, icon, ...rest }: ButtonProps) => {
  return (
    <Wrapper {...rest}>
      <Front {...rest} onClick={undefined}>
        {icon && <Icon>{icon}</Icon>}
        {children}
      </Front>
    </Wrapper>
  );
};
