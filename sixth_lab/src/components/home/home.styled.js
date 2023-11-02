import styled from "styled-components";

export const HomeStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
`;

export const HeadingWrapper = styled.div`
    display: flex;
    margin-left: 150px;
    .headingPhoto {
        width: 350px;
        height: 350px;
    }
`;

export const HeadingContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    margin-left: 300px;
    margin-top: 30px;
    h1 {
        margin-left: 10px;
        font-size: 50px;
    }

    p {
        font-size: 18px;
        width: 550px;
        text-align: start;
    }
`;

export const CardWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
`;

export const ViewWrapper = styled.div`
    margin-top: 70px;
    width: 200px;
    a {
        border: solid 4px #8b1ec4;
        font-size: 28px;
        background-color: #e1e1ee;
        border-radius: 50px;
        padding: 8px;
        padding-right: 25px;
        padding-left: 25px;
        text-decoration: none;
        color: #8b1ec4;
    }
`;