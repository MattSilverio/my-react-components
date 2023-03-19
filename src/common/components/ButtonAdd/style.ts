import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  border: none;
  align-content: center;
  align-self: center;
  width: 14.5rem;
  font-size: 16px;
  margin-top: 1.5rem;
  background: none;
  color: var(--green);
  gap: 8px;
  transition: filter 0.2s;
  user-select: none;

  :hover {
    filter: brightness(0.7);
  }
`;
