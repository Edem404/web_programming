import styled from 'styled-components';

export const FooterStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const DividingLine = styled.div`
    background-color: darkviolet;
    width: 100%;
    height: 4px;
    margin-top: 100px;
`;

export const UnderDividingLine = styled.div`
    width: 93%;
    margin: 0 auto;
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
    
    .logo {
        display: flex;
        align-items: center;
        /* margin-left: 20%; */
        p {
            color: #8b1ec4;
            font-size: 1.8rem;
            margin-left: -5px;
        }
      }
`;

export const FooterTextContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    h4 {
        margin: 0;
    }
    p {
        width: 300px;
        text-align: start;
    }
`;

export const FooterLogo = styled.div`
    display: flex;
    padding: 9px;
    > span {
        font-size: 36px;
        margin: 0 12px;
    }
`;

export const SocialIcons = styled.div`
    margin-top: 40px;
    display: flex;
    height: 46px;
`;

export const SocialIconWrapper = styled.a`
    display: flex;
    /* padding: 9px; */
    margin: 7px;
    > span {
        font-size: 35px;
        margin: 0 4px;
    }
`;

export const BottomDividingLine = styled.div`
    background-color: darkviolet;
    width: 93%;
    height: 4px;
    margin-top: 40px;
`;

export const Conclusion = styled.div`
    margin-top: 20px;
`;