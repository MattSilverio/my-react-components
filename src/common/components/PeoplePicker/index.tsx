import * as React from "react";
import { IPeoplePickerUserItem, PeoplePicker as PeoplePickerInput } from "@pnp/spfx-controls-react/lib/PeoplePicker";
import { PrincipalType } from "@pnp/spfx-controls-react/lib/PeoplePicker";
import { Container, SubTitle, Error } from "./style";
import { IPeoplePickerState } from "../../../interfaces/IPeoplePickerState";
import { IReactState } from "../../../interfaces/IReactState";
import { useContext } from "react";
import { SPContext } from "../../../store/SPContext";
import { Optional } from "../Optional";

interface PeoplePickerProps {
  title: string;
  state: IReactState<IPeoplePickerState>;
  placeholder?: string;
  optional?: boolean;
  personLimit?: number;
  disabled?: boolean;
}

export const PeoplePicker = ({
  title,
  state,
  placeholder,
  optional,
  personLimit = 50,
  disabled,
}: PeoplePickerProps) => {
  const [fieldPerson, setFieldPerson] = state;
  const context = useContext(SPContext);

  const handleChange = (items: IPeoplePickerUserItem[]) => {
    const cleanItems = items.filter((i) => !!i.id);

    setFieldPerson({
      people: cleanItems.map((i) => i.secondaryText),
      error: "",
    });
  };

  return (
    <Container error={!!fieldPerson.error}>
      <SubTitle error={!!fieldPerson.error}>
        {title}
        {optional && <Optional />}
      </SubTitle>

      <PeoplePickerInput
        context={context}
        showHiddenInUI={false}
        principalTypes={[PrincipalType.User]}
        resolveDelay={1000}
        personSelectionLimit={personLimit}
        defaultSelectedUsers={fieldPerson.people}
        onChange={handleChange}
        ensureUser
        placeholder={placeholder}
        disabled={disabled}
      />
      {fieldPerson.error && <Error>{fieldPerson.error}</Error>}
    </Container>
  );
};
