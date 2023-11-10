import React from "react";
import { SortWrapper, SortSelect } from "./sort.styled";

const optionList = [
    {
        optionContent: "None"
    },
    {
        optionContent: "Cheap"
    },
    {
        optionContent: "Expensive"
    },
];

const SortCategoryComponent = () => {
    return (
        <SortWrapper>
            <SortSelect>
                {optionList.map(({ optionContent }, idx) => (
                    <option>{optionContent}</option>
                ))}
            </SortSelect>      
        </SortWrapper>
    );
};

export default SortCategoryComponent