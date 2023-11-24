import React from "react";
import { CategoryWrapper, SelectCategory } from "./category.styled";

const optionList = [
    {
        optionContent: "All",
    },
    {
        optionContent: "Coffee",
    },
    {
        optionContent: "Computer",
    },
    {
        optionContent: "Writing",
    },
    {
        optionContent: "Rozkladushka",
    },
];

const SelectCategoryComponent = ({ onChange }) => {
    const handleCategoryChange = (event) => {
        onChange(event.target.value);
    };

    return (
        <CategoryWrapper>
            <SelectCategory onChange={handleCategoryChange}>
                {optionList.map(({ optionContent }, idx) => (
                    <option key={idx}>{optionContent}</option>
                ))}
            </SelectCategory>
        </CategoryWrapper>
    );
};

export default SelectCategoryComponent;