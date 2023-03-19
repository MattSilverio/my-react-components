import * as React from "react";
import { PeoplePicker as PeoplePickerInput } from "@pnp/spfx-controls-react/lib/PeoplePicker";
import { PrincipalType } from "@pnp/spfx-controls-react/lib/PeoplePicker";
import { Container } from "./style";
import { useContext } from "react";
import { SPContext } from "../../../store/SPContext";

interface PeoplePickerProps {
  persons: string[];
  disabled?: boolean;
}

export const ShowcasePeople = ({ persons, disabled }: PeoplePickerProps) => {
  const context = useContext(SPContext);

  return (
    <Container>
      <PeoplePickerInput
        context={context}
        showHiddenInUI={false}
        principalTypes={[PrincipalType.User]}
        resolveDelay={1000}
        personSelectionLimit={50}
        defaultSelectedUsers={persons}
        ensureUser
        disabled={disabled}
      />
    </Container>
  );
};
