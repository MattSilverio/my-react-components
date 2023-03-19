import { CommandButton, Icon } from "office-ui-fabric-react";
import React from "react";
import { useRecoilValue } from "recoil";
import { IAvailableOrdering } from "../../../interfaces/IAvailableOrdering";
import { IReactState } from "../../../interfaces/IReactState";
import { dictionary } from "../../../lang";
import { languageState } from "../../../store/atoms";
import { Divisor } from "../Divisor";
import { FlatButton } from "../FlatButton";
import { Wrapper } from "./style";

interface ContextMenuProps {
  isAscendingState: IReactState<boolean>;
  orderingState: IReactState<IAvailableOrdering>;
  exportData?: () => void;
}

export const ContextMenu = ({ isAscendingState, orderingState, exportData }: ContextMenuProps) => {
  const [isAscending, setIsAscending] = isAscendingState;
  const [ordering, setOrdering] = orderingState;
  const language = useRecoilValue(languageState);

  const toggleAscending = () => setIsAscending((prevState) => !prevState);

  const orderLabel = (() => {
    if (ordering === "CREATED") return dictionary[language].dataDeCriacao;

    if (ordering === "UPDATED") return dictionary[language].dataDeModificacao;

    if (ordering === "NAME") return dictionary[language].porNome;
  })();

  const handleChangeOrder = (order: IAvailableOrdering) => {
    if (order !== ordering) {
      setOrdering(order);
    }
  };

  return (
    <Wrapper>
      {exportData && (
        <>
          <FlatButton icon={<Icon iconName="ExcelLogo" />} onClick={exportData} small>
            {dictionary[language].baixarPlanilha}
          </FlatButton>

          <Divisor />
        </>
      )}

      <FlatButton small>
        <CommandButton
          disabled={false}
          checked={false}
          iconProps={{ iconName: "QueryList" }}
          text={orderLabel}
          menuProps={{
            shouldFocusOnMount: false,
            items: [
              {
                key: "SINGLE",
                text: dictionary[language].dataDeCriacao,
                iconProps: { iconName: "DateTime2" },
                onClick: () => handleChangeOrder("CREATED"),
              },
              {
                key: "MULTI",
                text: dictionary[language].dataDeModificacao,
                iconProps: { iconName: "DateTime2" },
                onClick: () => handleChangeOrder("UPDATED"),
              },
              {
                key: "GRID_SINGLE",
                text: dictionary[language].porNome,
                iconProps: { iconName: "HalfAlpha" },
                onClick: () => handleChangeOrder("NAME"),
              },
            ],
          }}
        />
      </FlatButton>

      <Divisor />

      <FlatButton
        icon={<Icon iconName={isAscending ? "GroupedAscending" : "GroupedDescending"} />}
        onClick={toggleAscending}
        small
      >
        {isAscending ? dictionary[language].ascendente : dictionary[language].descendente}
      </FlatButton>
    </Wrapper>
  );
};
