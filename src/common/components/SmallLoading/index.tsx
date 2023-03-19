import React from "react";
import { CircleLoader } from "react-spinners";
import { Wrapper } from "./style";

export const SmallLoading = () => {
  return (
    <Wrapper>
      <CircleLoader color="var(--green)" size={25} />
    </Wrapper>
  );
};
