import React from "react";
import { SortWrapper, SortSelect } from "./sort.styled";

const optionList = [
    {
        optionContent: "None",
    },
    {
        optionContent: "Cheap",
    },
    {
        optionContent: "Expensive",
    },
];

const SortCategoryComponent = ({ onChange }) => {
    const handleSortChange = (event) => {
        onChange(event.target.value);
    };

    return (
        <SortWrapper>
            <SortSelect onChange={handleSortChange}>
                {optionList.map(({ optionContent }, idx) => (
                    <option key={idx} value={optionContent}>{optionContent}</option>
                ))}
            </SortSelect>
        </SortWrapper>
    );
};

export default SortCategoryComponent;