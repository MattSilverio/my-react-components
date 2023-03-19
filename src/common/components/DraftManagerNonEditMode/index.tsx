import React from "react";
import { IoTrashOutline } from "react-icons/io5";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { useRecoilValue } from "recoil";
import { dictionary } from "../../../lang";
import { languageState, roleState } from "../../../store/atoms";
import { useSurveyDraftStatus } from "../../../services/hooks/useSurveyDraftStatus";
import { queryClient } from "../../../services/queryClient";
import { forceDeleteDraft, openSurveyDraft } from "../../../services/surveyService";
import { getErrorMessage } from "../../../utils/getErrorMessage";
import { getDraftStatus } from "../../../utils/getObjectValue";
import { EditIcon } from "../../icons/Edit";
import { Button } from "../Button";
import { Fetching } from "../Fetching";
import { DataWrapper, TextDraft } from "./style";
import { DirectionalHint, TooltipHost } from "@fluentui/react";

interface DraftManagerNonEditModeProps {
  toggleEditMode: () => Promise<void>;
  isLoading?: boolean;
  disabled?: boolean;
}

export const DraftManagerNonEditMode = ({ toggleEditMode, isLoading, disabled }: DraftManagerNonEditModeProps) => {
  const { data } = useSurveyDraftStatus();

  const language = useRecoilValue(languageState);
  const role = useRecoilValue(roleState);

  const openEditMutation = useMutation(async () => await openSurveyDraft(), {
    onSuccess: async () => {
      queryClient.invalidateQueries("surveyDraft");
      queryClient.invalidateQueries("surveyDraftStatus");
      await toggleEditMode();
      toast.success(dictionary[language].questionarioAbertoParaEdicao);
    },
    onError: (err) => {
      console.error(err);
      toast.error(getErrorMessage(err, language));
      queryClient.invalidateQueries("surveyDraftStatus");
    },
  });

  const forceDeleteDraftMutation = useMutation(async () => await forceDeleteDraft(), {
    onSuccess: async () => {
      queryClient.invalidateQueries("surveyDraftStatus");
      toast.success(dictionary[language].questionarioDescartado);
    },
    onError: (err) => {
      console.error(err);
      toast.error(getErrorMessage(err, language));
    },
  });

  const handleOpenEdit = async () => {
    await openEditMutation.mutateAsync();
  };

  const handleForceDeleteDraft = async () => {
    await forceDeleteDraftMutation.mutateAsync();
  };

  return (
    <>
      {(forceDeleteDraftMutation.isLoading || openEditMutation.isLoading) && !isLoading && <Fetching />}

      {data && (
        <DataWrapper>
          {<TextDraft>{getDraftStatus(data, language)}</TextDraft>}

          {data === "NO_DRAFT" && (
            <Button type="Hero" onClick={handleOpenEdit} icon={<EditIcon />} disabled={disabled}>
              {dictionary[language].editarQuestionario}
            </Button>
          )}

          {data === "OPEN_DRAFT" && (
            <Button type="Hero" onClick={toggleEditMode} icon={<EditIcon />} disabled={disabled}>
              {dictionary[language].abrirRascunho}
            </Button>
          )}

          {data === "OPEN_DRAFT_BY_ANOTHER_AUTHOR" && role === "Admin" && (
            <Button
              type="Danger"
              onClick={handleForceDeleteDraft}
              icon={<IoTrashOutline />}
              disabled={forceDeleteDraftMutation.isLoading}
            >
              {dictionary[language].excluirRascunhoDeOutroUsuario}
            </Button>
          )}

          {data === "OPEN_DRAFT_BY_ANOTHER_AUTHOR" && role !== "Admin" && (
            <TooltipHost
              directionalHint={DirectionalHint.topCenter}
              content={dictionary[language].somenteAdministradoresPodemRemover}
            >
              <Button type="Danger" onClick={() => {}} icon={<IoTrashOutline />} disabled>
                {dictionary[language].excluirRascunhoDeOutroUsuario}
              </Button>
            </TooltipHost>
          )}
        </DataWrapper>
      )}
    </>
  );
};
