import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  pointer-events: none;
  margin-top: 5px;

  .ms-BasePicker-text {
    border: none;
    background-color: transparent;
  }

  .ms-PickerItem-removeButton {
    display: none;
  }

  .ms-BasePicker-input {
    background-color: transparent;
  }
`;
