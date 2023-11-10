import React from "react";
import { InputWrapper, InputFild } from "./searchFild.styled";
const SearchInput = () => {
    return (
        <InputWrapper>
            <InputFild  type="text" placeholder="Search..."></InputFild>
        </InputWrapper>
    );
};

export default SearchInput