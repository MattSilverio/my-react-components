import React from "react";
import { Index, Name, Tab, Wrapper } from "./style";

interface TabSelectorProps {
  tabs: string[];
  selectedTab: number;
  goTo: (v: number) => void;
  disabled?: boolean;
  enabledTabs: number[];
}

export const SideTabSelector = ({ tabs, selectedTab, goTo, disabled, enabledTabs }: TabSelectorProps) => {
  return (
    <Wrapper disabled={disabled}>
      {tabs.map((tab, index) => (
        <Tab
          selected={selectedTab === index}
          onClick={() => goTo(index)}
          disabled={disabled}
          noAction={!enabledTabs.includes(index)}
        >
          <Index>{index + 1}</Index>
          <Name>{tab}</Name>
        </Tab>
      ))}
    </Wrapper>
  );
};
