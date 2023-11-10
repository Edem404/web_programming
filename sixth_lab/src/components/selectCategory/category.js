import React from "react";
import { CategoryWrapper, SelectCategory } from "./category.styled";

const optionList = [
    {
        optionContent: "All"
    },
    {
        optionContent: "Coffee"
    },
    {
        optionContent: "Computer"
    },
    {
        optionContent: "Writing"
    },
    {
        optionContent: "Rozkladushka"
    },
]
const SelectCategoryComponent = () => {
    return (
        <CategoryWrapper>
            <SelectCategory>
            {optionList.map(({ optionContent }, idx) => (
                    <option>{optionContent}</option>
                ))}
            </SelectCategory>
        </CategoryWrapper>
    );
};

export default SelectCategoryComponent