import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
import { useNavigate } from "react-router-dom";

export const dataCardCatalog = [
    {
        title: "Computer Desk",
        description: "Easy to use computer table, have a lot of space to place your gadgets" +
            " have an internal case for system block of computer",
        category: "Computer",
        image: photo1,
        price: 100,
    },
    {
        title: "Coffee Table",
        description: "A very comfort coffee table with glass surface" +
            " designed by Tom Holland",
        category: "Coffee",
        image: photo2,
        price: 102,
    },
    {
        title: "Writing Desk",
        description: "A writing desk with placment for lamp and other stationery " +
            "It is often smaller and more compact than a traditional office desk.",
        category: "Writing",
        image: photo3,
        price: 101,
    },
    {
        title: "Computer Desk",
        description: "Easy to use computer table, have a lot of space to place your gadgets" +
            " have an internal case for system block of computer",
        category: "Computer",
        image: photo1,
        price: 103,
    },
    {
        title: "Coffee Table",
        description: "A very comfort coffee table with glass surface" +
            " designed by Tom Holland",
        category: "Coffee",
        image: photo2,
        price: 105,
    },
    {
        title: "Writing Desk",
        description: "A writing desk with placment for lamp and other stationery " +
            "It is often smaller and more compact than a traditional office desk.",
        category: "Writing",
        image: photo3,
        price: 100,
    },
];
const Catalog = () => {
    const navigate = useNavigate()
    const [searchText, setSearchText] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [sortOption, setSortOption] = useState("None");


    const handleSearchInputChange = (event) => {
        setSearchText(event.target.value);
    };

    const handleCategoryChange = (selected) => {
        setSelectedCategory(selected);
    };

    const handleSortChange = (selected) => {
        setSortOption(selected);
    };

    const filteredData = dataCardCatalog
        .filter((item) =>
            item.title.toLowerCase().includes(searchText.toLowerCase()) &&
            (selectedCategory === "All" || item.category === selectedCategory)
        )
        .sort((a, b) => {
            if (sortOption === "Cheap") {
                return parseInt(a.price) - parseInt(b.price);
            } else if (sortOption === "Expensive") {
                return parseInt(b.price) - parseInt(a.price);
            } else {
                return 0;
            }
        });
    
    return (
        <CatalogStyle>
            <FilterMenu>
                <SelectCategoryComponent onChange={handleCategoryChange} />
                <SortCategoryComponent onChange={handleSortChange} />
                <SearchInput onChange={handleSearchInputChange} />
                <ConfirmFilter />
            </FilterMenu>
            <DivideLine />

            <CardWrapper>
                {filteredData.map(({ title, description, category, image, price, id }, idx, card) => (
                    <CardItem
                        title={title}
                        description={description}
                        imageSrc={image}
                        category={category}
                        price={price}
                        showViewMore={true}
                        id={idx}
                    />
                ))}
            </CardWrapper>
        </CatalogStyle>
    );
};

export default Catalog