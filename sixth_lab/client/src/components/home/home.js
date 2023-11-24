import React, { useState, useEffect } from "react";
import axios from "axios";
import { HomeStyle, HeadingWrapper, HeadingContentWrapper } from "./home.styled";
import ViewButton from "./ViewButton/viewbutton";
import photo from "../icons/heading_desk.jpg";
import photo1 from "../icons/photo1.jpg";
import photo2 from "../icons/photo2.jpg";
import photo3 from "../icons/photo3.jpg";
import CardItem from "../card/item";
import { CardWrapper } from "../card/item.styled";
// import { dataCardCatalog } from "../catalog/catalog";

const header_description = {
    title: "Desk is POWER!",
    description: "Tables are versatile pieces of furniture that can serve multiple purposes in a home or workspace. They can be used as dining tables, workstations, or even decorative pieces." +
        "Whether used for a family meal, a business meeting, or simply as a focal point in a room, tables are a functional and aesthetically pleasing addition to any living or working space."
}

const Home = () => {
    const [visibleCardCount, setVisibleCardCount] = useState(3); // Початкова кількість видимих карток

    const handleViewMoreClick = () => {
        setVisibleCardCount(visibleCardCount + 3); // Збільшення кількості видимих карток при кожному кліку
    };

    const [dataCardCatalog, setDataCardCatalog] = useState([]);

    useEffect(() => {
        // Отримання даних з сервера при завантаженні компоненту
        axios.get('http://localhost:3001/read')
            .then(response => {
                setDataCardCatalog(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);



    return (
        <HomeStyle>
            <HeadingWrapper>
                <img src={photo} alt="wtf" className="headingPhoto" />
                <HeadingContentWrapper>
                    <h1>
                        {header_description.title}
                    </h1>
                    <p>
                        {header_description.description}
                    </p>
                </HeadingContentWrapper>
            </HeadingWrapper>
            <CardWrapper>
                {dataCardCatalog.slice(0, visibleCardCount).map(({ title, description, category }, idx) => (
                    <CardItem
                        key={idx}
                        title={title}
                        description={description}
                        imageSrc={photo2}
                        id={idx}
                    />
                ))}
            </CardWrapper>

            <ViewButton onClick={handleViewMoreClick} />
        </HomeStyle>
    );
}

export default Home;