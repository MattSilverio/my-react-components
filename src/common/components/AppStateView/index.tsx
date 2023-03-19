import React, { useEffect } from "react";
import { Error } from "../Error";
import { Loading } from "../Loading";
import { Wrapper } from "./style";
import { ReactNode } from "react";
import { IAppState } from "../../../interfaces/IAppState";
import { useTransitionState } from "../../hooks/useTransitionState";
import { Transition } from "../Transition";

interface AppViewProps {
  children: ReactNode;
  status: IAppState;
}

export const AppStateView = ({ children, status }: AppViewProps) => {
  const { handleAnimationEnd, setAppStatus, transitionStage, displayStatus } = useTransitionState();

  useEffect(() => {
    setAppStatus(status);
  }, [status]);

  return (
    <Wrapper onAnimationEnd={handleAnimationEnd}>
      <Transition transitionStage={transitionStage}>
        {displayStatus === "loading" ? <Loading /> : displayStatus === "error" ? <Error /> : children}
      </Transition>
    </Wrapper>
  );
};
