import React from "react";
import { IoEyeOutline } from "react-icons/io5";
import { useRecoilValue } from "recoil";
import { dictionary } from "../../../lang";
import { languageState } from "../../../store/atoms";
import { Button } from "../Button";

interface DraftManagerEditModeProps {
  toggleEditMode: () => void;
}

export const DraftManagerEditMode = ({ toggleEditMode }: DraftManagerEditModeProps) => {
  const language = useRecoilValue(languageState);

  const handleDiscardDraft = () => {
    toggleEditMode();
  };

  return (
    <Button type="Hero" onClick={handleDiscardDraft} icon={<IoEyeOutline />}>
      {dictionary[language].voltarParaVisualizacao}
    </Button>
  );
};
