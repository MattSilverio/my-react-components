import React from "react";
import { useRecoilValue } from "recoil";
import { IAvailableProperty } from "../../../interfaces/IAvailableProperty";
import { IReactState } from "../../../interfaces/IReactState";
import { languageState } from "../../../store/atoms";
import { getProperty } from "../../../utils/getObjectValue";
import { PropertyItem } from "../PropertyItem";
import { WhiteBox } from "../WhiteBox";

interface PropertySelectorProps {
  state: IReactState<string | undefined>;
  enableUndefined?: boolean;
  title: string;
  options: IAvailableProperty[];
}

export const OptionSelector = ({ state, enableUndefined, title, options }: PropertySelectorProps) => {
  const [selected, setSelected] = state;

  const language = useRecoilValue(languageState);

  const handleClick = (property: string) => {
    if (property === selected && enableUndefined) setSelected(undefined);
    else setSelected(property);
  };

  return (
    <WhiteBox noPadding title={title} color="grey" gap="No">
      {options.map((option) => (
        <PropertyItem selected={selected === option} onClick={() => handleClick(option)}>
          {getProperty(option, language)}
        </PropertyItem>
      ))}
    </WhiteBox>
  );
};
