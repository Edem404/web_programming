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
import LoaderWrapper from '../loading/loading';
import { getDesks } from '../fetching';


const Catalog = () => {
    const navigate = useNavigate()
    const [searchText, setSearchText] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [sortOption, setSortOption] = useState("None");
    
    const [dataCardCatalogFromDb, setDataCardCatalog] = useState([]);
    const [showLoading, setShowLoading] = useState(true);

    // useEffect(() => {
    //     setShowLoading(true);
    //     axios.get('http://localhost:3001/read')
    //         .then(response => {
    //             setShowLoading(false);
    //             setDataCardCatalog(response.data);
    //         })
    //         .catch(error => {
    //             console.error('Error fetching data:', error);
    //         });
    // }, []);


    const handleSearchInputChange = (event) => {
        setSearchText(event.target.value);
    };

    const handleCategoryChange = (selected) => {
        setSelectedCategory(selected);
    };

    const handleSortChange = (selected) => {
        setSortOption(selected);
    };

    // const filteredData = dataCardCatalogFromDb
    //     .filter((item) =>
    //         item.title.toLowerCase().includes(searchText.toLowerCase()) &&
    //         (selectedCategory === "All" || item.category === selectedCategory)
    //     )
    //     .sort((a, b) => {
    //         if (sortOption === "Cheap") {
    //             return parseInt(a.price) - parseInt(b.price);
    //         } else if (sortOption === "Expensive") {
    //             return parseInt(b.price) - parseInt(a.price);
    //         } else {
    //             return 0;
    //         }
    //     });
    useEffect(() => {
        setShowLoading(true);
        // axios.get('http://localhost:3001/read', {
        //     params: {
        //         searchQuery: searchText,
        //         selectedCategory: selectedCategory,
        //         sortOrder: sortOption
        //     }
        // })
        getDesks(searchText, selectedCategory, sortOption)
        .then(response => {
            setShowLoading(false);
            setDataCardCatalog(response.data.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    }, [searchText, selectedCategory, sortOption]);

    const filteredData = dataCardCatalogFromDb 
    return (
        <CatalogStyle>
            <FilterMenu>
                <SelectCategoryComponent onChange={handleCategoryChange} />
                <SortCategoryComponent onChange={handleSortChange} />
                <SearchInput onChange={handleSearchInputChange} />
                <ConfirmFilter />
            </FilterMenu>
            <DivideLine />
            
                {showLoading ? ( <LoaderWrapper/>) : (
                    <CardWrapper>
                        {filteredData.map(({ title, description, category, image, price, id }, idx, card) => (
                        <CardItem
                            title={title}
                            description={description}
                            // imageSrc={require(`../icons/photo${id % 3 + 1}.jpg`)}
                            imageSrc={photo2}
                            category={category}
                            price={price}
                            showViewMore={true}
                            id={id}
                        />
                    ))}
                    </CardWrapper>
                ) 
                }
                
            
        </CatalogStyle>
    );
};

export default Catalog