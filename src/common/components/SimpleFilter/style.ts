import styled, { css } from 'styled-components';

interface IFieldProps {
  isVisible: boolean;
}

export const Field = styled.input<IFieldProps>`
  outline: none;
  border: 1px solid var(--grey-150);
  border-radius: var(--border-radius);
  padding: 4px;
  margin-right: 8px;
  width: 1px;
  transition: width 2.2s ease-out;
  -webkit-transition: width 2.2s ease-out;
  -moz-transition: width 2.2s ease-out;

  &::placeholder {
    font-size: 0.7rem;
    padding: 4px;
  }

  ${props => props.isVisible &&
    css`
    width: 166px;  
  `}
`;