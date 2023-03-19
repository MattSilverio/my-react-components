import { ChoiceGroup as ChoiceGroupFabric } from "office-ui-fabric-react";
import styled, { css } from "styled-components";

interface DropdownInputProps {
  error?: boolean;
}

interface WrapperProps {
  disabled?: boolean;
}

interface CardChoiceProps {
  selected?: boolean;
}

export const ChoiceGroupInput = styled(ChoiceGroupFabric)``;

export const Title = styled.div`
  font-size: 16px;
  margin-bottom: 8px;
  color: var(--green);
`;

export const Wrapper = styled.div<WrapperProps>`
  position: relative;
  flex: 1;

  ${(props) =>
    props.disabled &&
    css`
      pointer-events: none;
      opacity: 0.6;
    `}
`;

export const CardsContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

export const CardChoice = styled.div<CardChoiceProps>`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 15px;
  border: 1px solid var(--grey-20);
  border-radius: var(--border-radius);
  font-size: 1.2rem;
  font-weight: bold;
  background-color: var(--grey-40);
  color: var(--grey-150);
  user-select: none;

  ${(props) =>
    props.selected &&
    css`
      border: 1px solid var(--green);
      background-color: var(--green);
      color: white;
    `}
`;
