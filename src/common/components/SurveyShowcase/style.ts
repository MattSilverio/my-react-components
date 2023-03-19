import styled, { css } from "styled-components";

export const FormsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 32px 60px;
`;

export const Text = styled.span`
  align-self: flex-end;

  p {
    display: inline;
    margin-left: 10px;
    font-size: 16px;
    font-weight: 700;
    color: var(--green);
  }
`;

export const BtnContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 0 60px 2rem;
  gap: 10px;
`;

export const Metadata = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  padding: 2rem 4rem 0 0;
`;

export const Data = styled.p`
  font-size: 1.05rem;
`;

export const Strong = styled.span`
  color: var(--green);
  font-weight: bold;
`;
