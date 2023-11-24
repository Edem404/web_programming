import React from "react";
import { useParams } from "react-router-dom";
import { dataCardCatalog } from "../catalog/catalog";
import { AboutCardWrapper, AboutCardSection, CardCharacteristics, AboutCardText, EndNav, GoBack, AddToCart, JustFlex } from "./aboutCard.styled";

const AboutCard = () => {
    const { id } = useParams();

    const card = dataCardCatalog[id]


    if (!card) {
        return <div>Card not found</div>;
    }

    const { title, description, image, category, price } = card;

    return (
        <AboutCardWrapper>
            <JustFlex>
                <img src={image} style={{ maxWidth: "30%" }} />
                <AboutCardSection>
                    <CardCharacteristics>
                        <li>Category: {category}</li>
                        <li>Price: {price}</li>
                    </CardCharacteristics>
                    <AboutCardText>
                        <h1>{title}</h1>
                        <p>{description}</p>
                    </AboutCardText>
                </AboutCardSection>
            </JustFlex>
            <EndNav>
                <GoBack href="/catalog">Go Back</GoBack>
                <AddToCart href="">Add To Cart</AddToCart>
            </EndNav>

        </AboutCardWrapper>
    );
};

export default AboutCard;