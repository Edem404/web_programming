import styled from "styled-components";

export const AboutCardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const JustFlex = styled.div`
    margin-top: 40px;
    margin-left: 100px;
    width: 100%;
    justify-content: space-around;
    display: flex;
`;

export const AboutCardSection = styled.div`
    display: flex;
    flex-direction: column;
`;

export const CardCharacteristics = styled.ul`
    list-style: none;
    display: flex;
    margin: 0;
    margin-left: -40px;
    li{
        margin: 10px;
        border: solid 3px #8b1ec4;
        border-radius: 30px;
        height: 30.2px;
        width: 150px;
    }
`;

export const AboutCardText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    /* margin-left: 300px; */
    margin-top: 30px;
    h1 {
        margin-left: 10px;
        font-size: 50px;
    }

    p {
        margin-left: 15px;
        font-size: 18px;
        width: 550px;
        text-align: start;
    }
`;

export const EndNav = styled.nav`
    margin-top: 80px;
    display: flex;
`;
export const GoBack = styled.a`
    text-decoration: none;
    margin: 10px;
    margin-right: 100px;
    border: solid 3px #8b1ec4;
    border-radius: 30px;
    height: 40.2px;
    width: 200px;
    font-weight: 700;
    font-size: large;
    padding-top: 16px;
`;

export const AddToCart = styled.a`
    text-decoration: none;
    margin: 10px;
    margin-left: 100px;
    border: solid 3px #8b1ec4;
    background-color: #8b1ec4;
    color: white;
    border-radius: 30px;
    height: 40.2px;
    width: 200px;
    font-weight: 700;
    font-size: large;
    padding-top: 16px;
`;
