import React from "react";
import { Async } from "office-ui-fabric-react";
import { SearchBox, Title, Wrapper } from "./style";

interface SearchBoxProps {
  title: string;
  onSearch: (v: string) => void;
  placeholder?: string;
  debounce?: number;
}

export const SearchInput = ({
  title,
  onSearch,
  debounce,
  placeholder,
}: SearchBoxProps) => {
  const async = new Async();

  return (
    <Wrapper>
      <Title>{title}</Title>
      <SearchBox
        placeholder={placeholder}
        onChange={async.debounce(
          (v: string) => onSearch(v),
          debounce ? debounce : 700
        )}
      />
    </Wrapper>
  );
};
