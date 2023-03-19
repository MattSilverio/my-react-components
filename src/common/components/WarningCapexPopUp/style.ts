import styled from "styled-components";

interface ITextProps {
  bold?: boolean;
}

export const Text = styled.p<ITextProps>`
  font-size: 1rem;
  font-weight: ${(props) => props.bold && "bold"};
  margin-bottom: 5px;
`;

export const Strong = styled.span`
  font-weight: bold;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 0.7rem;
  gap: 15px;
`;
