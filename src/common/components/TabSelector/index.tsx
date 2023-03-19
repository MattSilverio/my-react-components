import React from "react";
import { SelectedBg, Tab, Wrapper } from "./style";

interface TabSelectorProps {
  tabs: string[];
  selectedState: [number, (v: number) => void];
  disabled?: boolean;
  tabSize?: number;
  backgroundColor?: string;
  grey?: boolean;
}

export const TabSelector = ({
  tabs,
  selectedState,
  disabled,
  tabSize = 225,
  backgroundColor,
  grey,
}: TabSelectorProps) => {
  const [selected, setSelected] = selectedState;

  return (
    <Wrapper disabled={disabled} backgroundColor={backgroundColor}>
      {tabs.map((tab, index) => (
        <Tab selected={selected === index} onClick={() => setSelected(index)} disabled={disabled} tabSize={tabSize}>
          {tab}
        </Tab>
      ))}

      <SelectedBg position={selected} tabSize={tabSize} grey={grey} />
    </Wrapper>
  );
};
