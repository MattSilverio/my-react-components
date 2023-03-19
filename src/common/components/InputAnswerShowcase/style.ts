import styled from "styled-components";

export const Wrapper = styled.span``;

export const SingleInput = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  border: 1px solid var(--green);
`;

export const MultiInput = styled(SingleInput)`
  border-radius: 2px;
`;
