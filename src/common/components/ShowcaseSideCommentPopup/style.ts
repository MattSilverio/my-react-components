import styled from "styled-components";

export const CommentSection = styled.div`
  width: 100%;
  height: calc(100vh - 70px - 50px);
  position: absolute;
  overflow-y: scroll;
  left: 0;
  top: 71px;

  &:last-child {
    border-bottom: none;
  }
`;
