import React from "react";
import { useRecoilValue } from "recoil";
import { dictionary } from "../../../lang";
import { languageState } from "../../../store/atoms";
import { Button } from "../Button";
import { GenericPopup } from "../GenericPopup";
import { ButtonsContainer } from "./style";

interface IWarningCapexPopUp {
  show: boolean;
  onDismiss: () => void;
  onNext: () => void;
  children: React.ReactNode;
}

export const WarningCapexPopUp = ({ show, children, onDismiss, onNext }: IWarningCapexPopUp) => {
  const language = useRecoilValue(languageState);

  return (
    <GenericPopup
      isLoading={false}
      title={dictionary[language].edicaoCapex}
      color="var(--danger)"
      onDismiss={onDismiss}
      show={show}
      size="md"
    >
      {children}
      <ButtonsContainer>
        <Button type="DangerWhite" onClick={onDismiss}>
          {dictionary[language].cancelar}
        </Button>
        <Button type="Danger" onClick={onNext}>
          {dictionary[language].continuar}
        </Button>
      </ButtonsContainer>
    </GenericPopup>
  );
};
