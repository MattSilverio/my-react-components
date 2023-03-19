import React, { ReactNode } from "react";

import { AiOutlinePlusCircle } from "react-icons/ai";

import { Button } from "./style";

interface ButtonProps {
  title: string;
  onClick: () => void;
}

export const ButtonAdd = ({ title, ...rest }: ButtonProps) => {
  return (
    <Button {...rest}>
      <div>
        <AiOutlinePlusCircle size={24} fontWeight={100} />
      </div>
      <div>{title}</div>
    </Button>
  );
};
