import React from "react";
import photo1 from "../icons/photo1.jpg";
import photo2 from "../icons/photo2.jpg";
import photo3 from "../icons/photo3.jpg";

import CardItem from "../card/item";
import { CardWrapper } from "../card/item.styled";
import ConfirmFilter from "../filterConfirm/filterConfirm";
import { CatalogStyle, FilterMenu } from "./catalog.styled";
import SearchInput from "../searchField/searchFild";
import SelectCategoryComponent from "../selectCategory/category";
import SortCategoryComponent from "../sortCategory/sort";
import DivideLine from "../DividingLine/dividing";

const dataCard = [
    {
        title: "Computer Desk",
        description: "Easy to use computer table, have a lot of space to place your gadgets" +
            " have an internal case for system block of computer",
        category: "Computer",
        image: photo1,
    },
    {
        title: "Coffee Table",
        description: "A very comfort coffee table with glass surface" +
            " designed by Tom Holland",
        category: "Coffee",
        image: photo2,
    },
    {
        title: "Writing Desk",
        description: "A writing desk with placment for lamp and other stationery " +
            "It is often smaller and more compact than a traditional office desk.",
        category: "Writing",
        image: photo3,
    },
    {
        title: "Computer Desk",
        description: "Easy to use computer table, have a lot of space to place your gadgets" +
            " have an internal case for system block of computer",
        category: "Computer",
        image: photo1,
    },
    {
        title: "Coffee Table",
        description: "A very comfort coffee table with glass surface" +
            " designed by Tom Holland",
        category: "Coffee",
        image: photo2,
    },
    {
        title: "Writing Desk",
        description: "A writing desk with placment for lamp and other stationery " +
            "It is often smaller and more compact than a traditional office desk.",
        category: "Writing",
        image: photo3,
    },
];

const Catalog = () => {
    return (
        <CatalogStyle>
            <FilterMenu>
                <SelectCategoryComponent />
                <SortCategoryComponent />
                <SearchInput />
                <ConfirmFilter />
            </FilterMenu>
            <DivideLine/>
            <CardWrapper>
                {dataCard.map(({ title, description, image, category }, idx) => (
                    <CardItem
                        title={title}
                        description={description}
                        imageSrc={image}
                        category={category}
                        showViewMore={true}
                        id={idx}
                    />
                ))}
            </CardWrapper>
        </CatalogStyle>
    );
};

export default Catalog