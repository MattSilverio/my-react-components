import React from "react";
import { Wrapper } from "./styled";

interface InputErrorProps {
  error?: string;
}

export const InputError = ({ error }: InputErrorProps) => {
  return (
    <Wrapper error={error !== ""}>
      <p className="errorInput">{error}</p>
    </Wrapper>
  );
};
