import { useEffect, useState } from "react";

export const useTransitionTab = (initialTab = 0) => {
  const [transitionStage, setTransitionStage] = useState("fadeIn");
  const [displayTab, setDisplayTab] = useState(initialTab);
  const [selectedTab, setSelectedTab] = useState(initialTab);

  const handleAnimationEnd = () => {
    if (transitionStage === "fadeOut") {
      setTransitionStage("fadeIn");
      setDisplayTab(selectedTab);
    }
  };

  useEffect(() => {
    if (selectedTab !== displayTab) setTransitionStage("fadeOut");
  }, [selectedTab]);

  return {
    selectedTab,
    setSelectedTab,
    handleAnimationEnd,
    transitionStage,
    displayTab,
  };
};
