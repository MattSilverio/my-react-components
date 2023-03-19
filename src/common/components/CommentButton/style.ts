import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  margin-left: auto;
  color: var(--green);
  background-color: #fff;
  border: none;

  i {
    padding: 6px;
    border: 1px solid var(--green);
    border-radius: 50%;
  }
`;
