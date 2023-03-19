import { IoArrowBackSharp } from "react-icons/io5";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 115px;
  width: 100%;
  background-color: var(--green);
  padding: 0px 35px;
  gap: 15px;
`;

export const Title = styled.p`
  color: white;
  font-size: 24px;
  font-family: "Caecilia";
  flex: 1;
  align-items: center;
  font-weight: lighter;
`;

export const BackIcon = styled(IoArrowBackSharp)`
  font-size: 1.5rem;
  color: var(--yellow);
  cursor: pointer;
`;
