import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { Button, Modal} from "antd";
import {
  AboutCardWrapper,
  AboutCardSection,
  CardCharacteristics,
  AboutCardText,
  EndNav,
  GoBack,
  AddToCart,
  JustFlex,
  InputCountWrapper,
  InputCount,
  ContinueModalText,
  ModalTitle,
  ModalLine,
} from "./aboutCard.styled";
import photo2 from "../icons/photo2.jpg";
import { getOne } from "../fetching";
const AboutCard = () => {
  const { id } = useParams();
  const [card, setCard] = useState(null);
  const dispatch = useDispatch();

  const [countInput, setCountInput] = useState('1')
  const [showModal, setShowModal] = useState(false);


  useEffect(() => {
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

  const { title, description, category, price } = card;

  const addDesk = () => {
    dispatch({
      type: "ADD_DESK",
      payLoad: {
        id: id,
        name: title,
        price: price,
        count: parseInt(countInput),
      },
    });
    showConfirmModal();
  };
  const handeInputCountChange = (event) => {
    setCountInput(event.target.value);
  };

  const showConfirmModal = () => {
    setShowModal(true);
  };

  const handleContinue = () => {
    setShowModal(false);
  };

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
          <InputCountWrapper>
            <InputCount type="text" value={countInput} onChange={handeInputCountChange}></InputCount>
          </InputCountWrapper>
        </AboutCardSection>
      </JustFlex>
      <EndNav>
        <GoBack href="/catalog">Go Back</GoBack>
        <AddToCart href="#" onClick={addDesk}>Add To Cart</AddToCart>
      </EndNav>
      <Modal
        onCancel={handleContinue}
        open={showModal}
        footer={''}
      >
        <ModalTitle>Cart</ModalTitle>
        <ModalLine></ModalLine>
        <ContinueModalText>{title} added to cart</ContinueModalText>
        <Button key="continue" onClick={handleContinue} type="primary" 
        style={{ marginTop: "10px", marginLeft: "160px", backgroundColor: "#722ed1", color: "#fff" }}
        >
          Continue shopping
        </Button>
      </Modal>
    </AboutCardWrapper>
  );
};

export default AboutCard;