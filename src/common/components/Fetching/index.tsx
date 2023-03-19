import React from "react";
import { BounceLoader } from "react-spinners";
import { Wrapper } from "./style";

export const Fetching = () => {
  return (
    <Wrapper>
      <BounceLoader color="white" size={20} />
    </Wrapper>
  );
};
