import React, { ReactNode } from "react";
import { Wrapper } from "./style";

export type ButtonIconTypes = "Hero" | "HeroActive" | "Danger";
interface ButtonIconProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  type?: ButtonIconTypes;
}

export const ButtonIcon = ({ type, children, ...rest }: ButtonIconProps) => {
  return (
    <Wrapper type={type} {...rest}>
      {children}
    </Wrapper>
  );
};
