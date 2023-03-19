import styled from "styled-components";

export const Title = styled.div`
  font-size: 16px;
  margin-bottom: 8px;
  color: var(--green);
`;

export const Content = styled.p`
  background-color: var(--green);
  width: fit-content;
  border-radius: var(--border-radius);
  padding: 2px 5px;
  color: white;
`;

export const Wrapper = styled.div``;

export const ListContainer = styled.div`
  display: flex;
  gap: 3px;
  flex-wrap: wrap;
`;

export const NoContent = styled.div`
  font-style: italic;
  color: var(--grey-100);
`;
