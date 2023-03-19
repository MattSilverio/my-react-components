import React, { useEffect, useState } from "react";
import { ReactNode } from "react";
import { SmallLoading } from "../SmallLoading";
import { Transition } from "../Transition";
import { Wrapper } from "./style";

interface GreyWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  loading?: boolean;
  border?: boolean;
  noMargin?: boolean;
}

export const GreyWrapper = ({ children, loading, border, noMargin }: GreyWrapperProps) => {
  const [displayState, setDisplayState] = useState(false);
  const [transitionStage, setTransistionStage] = useState("fadeIn");

  const handleAnimationEnd = () => {
    if (transitionStage === "fadeOut") {
      setTransistionStage("fadeIn");
      setDisplayState(loading!);
    }
  };

  useEffect(() => {
    if (loading !== displayState) setTransistionStage("fadeOut");
  }, [loading]);

  return (
    <Wrapper border={border} noMargin={noMargin}>
      <Transition transitionStage={transitionStage} onAnimationEnd={handleAnimationEnd}>
        {children}
        {displayState && <SmallLoading />}
      </Transition>
    </Wrapper>
  );
};
