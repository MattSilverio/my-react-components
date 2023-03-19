import { useEffect, useState } from "react";
import { IAppState } from "../../interfaces/IAppState";

export const useTransitionState = () => {
  const [appStatus, setAppStatus] = useState<IAppState>("loading");
  const [displayStatus, setDisplayStatus] = useState<IAppState>("loading");
  const [transitionStage, setTransistionStage] = useState("fadeIn");

  const handleAnimationEnd = () => {
    if (transitionStage === "fadeOut") {
      setTransistionStage("fadeIn");
      setDisplayStatus(appStatus);
    }
  };

  useEffect(() => {
    if (appStatus !== displayStatus) setTransistionStage("fadeOut");
  }, [appStatus]);

  return {
    setAppStatus,
    handleAnimationEnd,
    transitionStage,
    displayStatus,
  };
};
