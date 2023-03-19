import * as React from "react";
import { Icon } from "@fluentui/react";
import { FlatButton } from "../FlatButton";
import { Field } from "./style";

interface IProps<T> {
  placeholder: string;
  state: [T[], (v: T[]) => void];
  keyof: keyof T;
}

export const SimpleFilter = <T,>({ state, placeholder, keyof }: IProps<T>) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [items, setItems] = state;

  const handleFilter = (event: React.ChangeEvent<HTMLInputElement>) =>
    setItems(
      items.filter((f) => (f[keyof] as unknown as string).toLowerCase().includes(event.target.value.toLowerCase()))
    );

  if (isVisible) {
    return <Field isVisible={isVisible} placeholder={placeholder} onChange={handleFilter} />;
  } else
    return (
      <FlatButton icon={<Icon iconName="Search" />} onClick={() => setIsVisible(true)} small>
        {placeholder}
      </FlatButton>
    );
};
