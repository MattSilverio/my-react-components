import { IoAddSharp, IoCloseSharp, IoEyeOutline, IoTrashOutline } from "react-icons/io5";
import styled, { css } from "styled-components";

interface WrapperProps {
  isDisregarded: boolean;
  isReconsidered: boolean;
  isOmitted?: boolean;
}

interface IsOmittedGeneric {
  isOmitted?: boolean;
  isReconsidered: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  padding: 6px 12px;
  background-color: white;
  border: 1px solid var(--grey-40);
  border-left: 3px solid var(--green);
  align-items: center;

  &:hover {
    background-color: var(--grey-20);
    border: 1px solid var(--green);
    border-left: 3px solid var(--green);
  }

  ${(props) =>
    (props.isDisregarded || (props.isOmitted && !props.isReconsidered)) &&
    css`
      border: 1px solid var(--danger);
      border-left: 3px solid var(--danger);
      color: var(--danger);

      &:hover {
        background-color: var(--grey-20);
        border: 1px solid var(--danger);
        border-left: 3px solid var(--danger);
      }
    `}
`;

export const Title = styled.div<IsOmittedGeneric>`
  flex: 1;
  cursor: pointer;
  user-select: none;

  span {
    color: var(--danger);
    font-weight: bold;
    pointer-events: none;
  }

  ${(props) =>
    props.isOmitted &&
    css`
      color: ${props.isReconsidered ? "black" : "var(--danger)"};

      span {
        color: var(--green);
      }
    `}
`;

export const IconsContainer = styled.div`
  display: flex;
  gap: 5px;

  > * {
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    cursor: pointer;
  }
`;

export const DiscardIcon = styled(IoTrashOutline)`
  color: var(--danger);
`;

export const RecoverIcon = styled(IoAddSharp)`
  color: var(--green);
`;

export const ViewIcon = styled(IoEyeOutline)`
  color: var(--green);
`;
