import React from "react";
import { useSelector } from "react-redux";
import {
    CartWrapper,
    DeskImage, Price, CartHeader,
    ItemInCart, DataButtonStyled, CartButton,
    AddAndSubtract, ItemName, DeskCount,
    TotalPrice,
} from "./cart.styled";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addOne, subtractOne } from "./actions";
import { useState, useEffect } from "react";
import { Button } from "antd";
import photo2 from "../icons/photo2.jpg";

const Cart = () => {

    const deskArray = useSelector((state) => state.deskList);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        let totalPrice = 0;
        deskArray.forEach((desk) => {
            totalPrice += Math.round(desk.price) * desk.count;
        });
        setTotalPrice(totalPrice);
    }, [deskArray]);

    const dispatch = useDispatch();

    const handleAdd = (name) => {
        dispatch(addOne(name));
    };

    const handleSubtract = (name) => {
        dispatch(subtractOne(name));
    };

    const filteredDesks = deskArray.filter((desk) => desk.count > 0);

    return (
        <div>
            <CartWrapper>
                <CartHeader>Shopping Cart</CartHeader>
                <div>
                    {filteredDesks.map((desk, index) => (
                        <div key={index}>
                            <ItemInCart>
                                <NavLink
                                    exact="true"
                                    to={`/catalog/${desk.id}`}
                                    style={{ textDecoration: "none", color: "black" }}
                                    onClick={(e) => {
                                        if (e.target.tagName === "BUTTON") {
                                            e.preventDefault();
                                        }
                                    }}
                                >
                                    <DeskImage src={photo2} />
                                </NavLink>
                                <ItemName>{desk.name}</ItemName>

                                <DataButtonStyled>
                                    <AddAndSubtract onClick={() => handleSubtract(desk.name)}>-</AddAndSubtract>
                                    <DeskCount>{desk.count}</DeskCount>
                                    <AddAndSubtract onClick={() => handleAdd(desk.name)}>+</AddAndSubtract>
                                    <Price>{desk.price * desk.count}$</Price>
                                </DataButtonStyled>
                            </ItemInCart>
                        </div>
                    ))}
                </div>
                {totalPrice <= 0 && (
                    <h1>
                        Go and buy something =)
                    </h1>
                )}
                <TotalPrice>Total price: {totalPrice}$</TotalPrice>
                <CartButton>
                    <Button size={"large"}  type="primary"
                        style={{ marginLeft: "170px", backgroundColor: "#722ed1", color: "#fff" }}>
                        <NavLink to="/catalog" >Back to catalog</NavLink>
                    </Button>
                    <Button size={"large"} type="primary"
                        style={{ marginRight: "150px", backgroundColor: "#722ed1", color: "#fff" }}>Continue</Button>
                </CartButton>
            </CartWrapper>
        </div>
    );
};

export default Cart 