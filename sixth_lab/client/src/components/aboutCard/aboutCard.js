import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  AboutCardWrapper,
  AboutCardSection,
  CardCharacteristics,
  AboutCardText,
  EndNav,
  GoBack,
  AddToCart,
  JustFlex,
} from "./aboutCard.styled";
import photo2 from "../icons/photo2.jpg";
import { getOne } from "../fetching";
const AboutCard = () => {
  const { id } = useParams();
  const [card, setCard] = useState(null);

  useEffect(() => {
    // axios.get(`http://localhost:3001/product/${id}`)
      getOne(id)
      .then(response => {
        setCard(response.data);
      })
      .catch(error => {
        console.error('Error fetching product details:', error);
      });
  }, [id]);

  if (!card) {
    return <div>Loading...</div>;
  }

  const { title, description, image, category, price } = card;

  return (
    <AboutCardWrapper>
      <JustFlex>
        <img src={photo2} style={{ maxWidth: "30%" }} alt={title} />
        <AboutCardSection>
          <CardCharacteristics>
            <li>Category: {category}</li>
            <li>Price: {price}$</li>
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