import React, { useEffect, useState } from "react";
import { Card, Container, Content, LoadingContainer } from "./style";
import { ReactNode, useRef } from "react";
import { Loading } from "../Loading";
import { PopupTitle } from "../PopupTitle";
import { Transition } from "../Transition";

interface SidePopupProps {
  size?: "big" | "medium" | "small";
  title: string;
  color?: string;
  active: boolean;
  children: ReactNode;
  onDismiss: () => void;
  isLoading?: boolean;
  noPadding?: boolean;
}

export const SidePopup = ({
  size,
  title,
  color,
  active,
  children,
  isLoading,
  onDismiss,
  noPadding,
}: SidePopupProps) => {
  const ref = useRef(null);

  const [displayTitle, setDisplayTitle] = useState("");
  const [transitionStage, setTransistionStage] = useState("fadeIn");

  const handleAnimationEnd = () => {
    if (transitionStage === "fadeOut") {
      setTransistionStage("fadeIn");
      setDisplayTitle(title);
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (ref.current === e.target) {
      onDismiss();
    }
  };

  useEffect(() => {
    if (displayTitle === undefined) setDisplayTitle(title);
    if (title !== displayTitle) setTransistionStage("fadeOut");
  }, [title]);

  return (
    <Container active={active} onMouseDown={handleClick} ref={ref}>
      <Card active={active} size={size}>
        <PopupTitle color={color} onDismiss={onDismiss}>
          <Transition transitionStage={transitionStage} onAnimationEnd={handleAnimationEnd}>
            {displayTitle}
          </Transition>
        </PopupTitle>
        <Content isLoading={isLoading} noPadding={noPadding}>
          {children}
        </Content>
        <LoadingContainer isLoading={isLoading}>
          <Loading />
        </LoadingContainer>
      </Card>
    </Container>
  );
};
