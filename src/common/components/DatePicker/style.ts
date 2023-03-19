import styled, { css } from "styled-components";
import { DatePicker } from "@fluentui/react";

interface ContainerProps {
  error?: boolean;
}

interface SubTitleProps {
  error?: boolean;
}

export const DatePickerInput = styled(DatePicker)``;

export const Container = styled.div<ContainerProps>`
  flex: 1;

  .ms-TextField-fieldGroup {
    border-radius: var(--border-radius);

    span {
      color: var(--grey-100);
    }
  }

  .ms-TextField-fieldGroup::after {
    border: 1px solid var(--green);
    border-radius: var(--border-radius);
  }
`;

export const SubTitle = styled.p<SubTitleProps>`
  font-size: 16px;
  color: var(--green);
  margin-bottom: 4px;
`;

export const Error = styled.p`
  color: var(--danger);
  margin-top: 2px;
  margin-left: 5px;
  font-size: 0.8rem;
`;
