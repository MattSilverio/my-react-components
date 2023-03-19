import styled, { css } from "styled-components";

export const Wrapper = styled.div``;

interface IWithoutCommentsProps {
  isVisible: boolean;
}

export const WithoutComments = styled.div<IWithoutCommentsProps>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-self: center;

  ${(props) =>
    !props.isVisible &&
    css`
      display: none;
    `}
`;

export const CommentSection = styled.div`
  width: 100%;
  height: calc(100vh - 267px - 50px);
  position: absolute;
  overflow-y: scroll;
  left: 0;
  top: 71px;

  &:last-child {
    border-bottom: none;
  }
`;

export const LightText = styled.span`
  color: var(--grey-60);
  font-weight: bold;
  font-size: 1.3rem;
  font-family: "Caecilia", sans-serif;
  align-self: center;
`;

export const CommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
  border-bottom: 1px solid var(--grey-60);
`;

export const CommentHead = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 0.5rem;

  ${(props) =>
    !props.src &&
    css`
      background-color: var(--grey-60);
    `}
`;

export const DateWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 11px;
  margin-left: 12px;

  i {
    margin-right: 0.3rem;
  }
`;

export const DeleteWrapper = styled.div`
  color: var(--danger);
  display: flex;
  align-items: center;
  font-size: 12px;
  line-height: 1;
  cursor: pointer;

  svg {
    margin-right: 4px;
  }
`;

export const Text = styled.p`
  margin: 0.4rem 0;
`;

export const Strong = styled.span`
  font-weight: 600;
`;

export const Footer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 0;
  bottom: 20px;
  padding: 1rem 2rem;
  border-top: 1px solid var(--grey-60);
`;

export const ButtonWrapper = styled.div`
  width: 15%;
  margin-top: 0.8rem;
  align-self: flex-end;
`;
