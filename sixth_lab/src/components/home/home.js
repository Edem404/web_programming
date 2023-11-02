import React from "react";
import { HomeStyle, HeadingWrapper, HeadingContentWrapper, CardWrapper, ViewWrapper} from "./home.styled";
import photo from "../icons/heading_desk.jpg";
import photo1 from "../icons/photo1.jpg";
import photo2 from "../icons/photo2.jpg";
import photo3 from "../icons/photo3.jpg";

import { Card } from "antd";


const { Meta } = Card;

const CardItem = ({ title='No title', description, imageSrc,}) => (
    <Card
        style={{ width: 300, borderRadius: "20px", marginRight: "60px", marginLeft: "60px" }}
        cover={
            <img style={{ borderRadius: "20px", height: "261px" }} alt="example" src={imageSrc} />
        }
    >
        <Meta title={title} description={description} />
    </Card>
);

const dataCard = [
    {
        title: "Computer Desk",
        description: "A computer desk is a specialized piece of furniture designed to provide a suitable and organized workspace for computer use. " +
                        "It is an essential piece of furniture for home offices, workstations, or any place where a computer is regularly used. ",
        image: photo1,
    },
    {
        title: "Coffee Table",
        description: "A coffee table is a low-sitting table typically placed in a living room or a seating area." +  
                    "It's designed to serve a variety of purposes and is often located in the center of the room, within easy reach of sofas and chairs. ",
        image: photo2,
    },
    {
        title: "Writing Desk",
        description: "A writing desk is a piece of furniture designed for reading, writing, or other similar activities." +  
        "It is often smaller and more compact than a traditional office desk, and it is primarily intended to provide a dedicated space for writing and working on paper-based tasks.",
        image: photo3,
    },
];

const Home = () => {
    return (
        <HomeStyle>
            <HeadingWrapper>
                <img src={photo} alt="wtf" className="headingPhoto" />
                <HeadingContentWrapper>
                    <h1>
                        Desk is POWER!
                    </h1>
                    <p>
                        Tables are versatile pieces of furniture that can serve multiple purposes in a home or workspace. They can be used as dining tables, workstations, or even decorative pieces.
                        Whether used for a family meal, a business meeting, or simply as a focal point in a room, tables are a functional and aesthetically pleasing addition to any living or working space.
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
            
            <ViewWrapper>
                <a href="#">View More</a>
            </ViewWrapper>
        </HomeStyle>
    );
}

export default Home;