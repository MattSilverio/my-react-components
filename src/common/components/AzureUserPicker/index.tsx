import * as React from "react";
import { Optional } from "../Optional";
import { SPContext } from "../../../store/SPContext";
import { useContext } from "react";
import { dictionary } from "../../../lang";
import { IReactState } from "../../../interfaces/IReactState";
import { languageState } from "../../../store/atoms";
import { useRecoilValue } from "recoil";
import { IGraphUserResult } from "../../../interfaces/IGraphUserResult";
import { findUsersByEmailOrName } from "../../../services/userService";
import { Container, SubTitle, Error } from "./style";
import { IPersonaProps, NormalPeoplePicker } from "@fluentui/react";
import { IAzureUserItem, IAzureUserPickerState } from "../../../interfaces/IAzureUserPickerState";

interface AzureUserPersonaProps {
  azureId: string;
  secondaryText: string;
  text: string;
  imageUrl: string;
  showInitialsUntilImageLoads: boolean;
}

interface AzureUserPickerProps {
  title?: string;
  state: IReactState<IAzureUserPickerState>;
  optional?: boolean;
  personLimit?: number;
  placeholder?: string;
}

export const AzureUserPicker = ({ title, state, optional, personLimit = 50, placeholder }: AzureUserPickerProps) => {
  const [fieldPerson, setFieldPerson] = state;
  const context = useContext(SPContext);
  const language = useRecoilValue(languageState);

  const handleChange = (items: AzureUserPersonaProps[]) => {
    const parsedItems: IAzureUserItem[] = items.map((i) => ({
      azureId: i.azureId,
      secondaryText: i.secondaryText,
      text: i.text,
      imageUrl: `/_layouts/15/userphoto.aspx?size=S&username=${i.secondaryText}`,
      showInitialsUntilImageLoads: true,
    }));

    setFieldPerson({
      content: parsedItems,
      error: "",
    });
  };

  const onResolveSuggestions = async (
    query: string,
    currentPersonas: IPersonaProps[]
  ): Promise<AzureUserPersonaProps[]> => {
    const response = await findUsersByEmailOrName(query, context.msGraphClientFactory);
    const usersResult: IGraphUserResult[] = response.value;
    const usersFiltered = usersResult.filter((i) => !currentPersonas.find((p) => p.secondaryText === i.mail));

    const personas = usersFiltered.map((user) => ({
      azureId: user.id,
      secondaryText: user.mail,
      text: user.displayName,
      imageUrl: `/_layouts/15/userphoto.aspx?size=S&username=${user.mail}`,
      showInitialsUntilImageLoads: true,
    }));

    return personas;
  };

  return (
    <Container error={!!fieldPerson.error}>
      {title && (
        <SubTitle error={!!fieldPerson.error}>
          {title}
          {optional && <Optional />}
        </SubTitle>
      )}

      <NormalPeoplePicker
        resolveDelay={1000}
        onChange={handleChange}
        onResolveSuggestions={onResolveSuggestions}
        itemLimit={personLimit}
        selectedItems={fieldPerson.content}
        pickerSuggestionsProps={{
          noResultsFoundText: dictionary[language].semResultadosParaBuscar,
          loadingText: dictionary[language].carregando,
        }}
        inputProps={{
          placeholder: fieldPerson.content.length > 0 ? "" : placeholder,
        }}
      />
      {fieldPerson.error && <Error>{fieldPerson.error}</Error>}
    </Container>
  );
};
