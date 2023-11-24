import React from "react";
import { InputWrapper, InputFild } from "./searchFild.styled";

const SearchInput = ({ onChange }) => {
  return (
    <InputWrapper>
      <InputFild type="text" placeholder="Search..." onChange={onChange} />
    </InputWrapper>
  );
};

export default SearchInput;