import React from "react";
import { HomeStyle, HeadingWrapper, HeadingContentWrapper} from "./home.styled";
import ViewButton from "./ViewButton/viewbutton";
import photo from "../icons/heading_desk.jpg";
import photo1 from "../icons/photo1.jpg";
import photo2 from "../icons/photo2.jpg";
import photo3 from "../icons/photo3.jpg";
import CardItem from "../card/item";
import { CardWrapper } from "../card/item.styled";

const dataCard = [
    {
        title: "Computer Desk",
        description: "A computer desk is a specialized piece of furniture " +
                        "It is an essential piece of furniture for home offices, workstations, or any place where a computer is regularly used. ",
        image: photo1,
    },
    {
        title: "Coffee Table",
        description: "A coffee table is a low-sitting table typically placed in a living room or a seating area." +  
                    "It's designed to serve a variety of purposes",
        image: photo2,
    },
    {
        title: "Writing Desk",
        description: "A writing desk is a piece of furniture designed for reading, writing, or other similar activities." +  
        "It is often smaller and more compact than a traditional office desk",
        image: photo3,
    },
];

const header_description = {
    title: "Desk is POWER!",
    description: "Tables are versatile pieces of furniture that can serve multiple purposes in a home or workspace. They can be used as dining tables, workstations, or even decorative pieces." +
    "Whether used for a family meal, a business meeting, or simply as a focal point in a room, tables are a functional and aesthetically pleasing addition to any living or working space."
}

const Home = () => {
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
                {dataCard.map(({ title, description, image}, idx) => (
                    <CardItem
                        title={title}
                        description={description}
                        imageSrc={image}
                        id={idx}
                    />
                ))}
            </CardWrapper>
            
            <ViewButton/>
        </HomeStyle>
    );
}

export default Home;