import styled, { css } from "styled-components";

interface IWrapperProps {
  size?: "sm" | "md" | "lg";
  border?: "green" | "white";
}

export const Wrapper = styled.span<IWrapperProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 50%;
  font-size: 0.8rem;
  width: 20px;
  height: 20px;
  background-color: var(--green);
  border: 1px solid var(--green);
  color: white;
  margin-left: 1ch;

  ${(props) =>
    props.size == "sm" &&
    css`
      font-size: 0.7rem;
      padding-left: 2px;
    `
    ||

    props.border == "white" && 
    css`
      border: 1px solid var(--white);
    `
  }
`;
