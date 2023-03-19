import React from "react";
import {
  IoTrashOutline,
  IoPencilSharp,
  IoChevronForward,
  IoAddCircleOutline,
} from "react-icons/io5";
import { IconsContainer, Wrapper, Text } from "./style";

interface MiniCardProps {
  color?: string;
  onAdd?: () => void;
  onExpand?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
  children: React.ReactNode;
}

export const MiniCard = ({
  onExpand,
  color,
  onAdd,
  onEdit,
  onDelete,
  children,
}: MiniCardProps) => {
  const handleClick = (
    e: React.MouseEvent<SVGElement, MouseEvent>,
    action: () => void
  ) => {
    action();
    e.stopPropagation();
  };

  return (
    <Wrapper onExpand={onExpand} onClick={onExpand} color={color}>
      <Text>{children}</Text>
      <IconsContainer>
        {onAdd && (
          <IoAddCircleOutline
            color="var(--green)"
            onClick={(e) => handleClick(e, onAdd)}
          />
        )}

        {onEdit && (
          <IoPencilSharp
            color="var(--green)"
            onClick={(e) => handleClick(e, onEdit)}
          />
        )}

        {onDelete && (
          <IoTrashOutline
            color="var(--danger)"
            onClick={(e) => handleClick(e, onDelete)}
          />
        )}

        {onExpand && (
          <IoChevronForward
            color="var(--green)"
            onClick={(e) => handleClick(e, onExpand)}
          />
        )}
      </IconsContainer>
    </Wrapper>
  );
};
