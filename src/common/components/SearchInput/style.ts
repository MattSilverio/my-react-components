import styled from "styled-components";
import { SearchBox as SearchBoxFabric } from "office-ui-fabric-react";

export const SearchBox = styled(SearchBoxFabric)`
  border-radius: var(--border-radius);
`;

export const Title = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 5px;
  color: var(--grey-100);
`;

export const Wrapper = styled.div`
  margin-top: 8px;
`;
