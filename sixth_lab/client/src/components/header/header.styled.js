import styled from 'styled-components';

export const HeaderStyle = styled.div`
    background-color: #e1e1ee;
    display: flex;
    flex-wrap: wrap;
    .logo {
        display: flex;
        align-items: center;
        margin-top: -5px;
        p {
            color: #8b1ec4;
            font-size: 1.5rem;
            margin-left: -5px;
        }
      }
`;

export const WrappTheIcon = styled.div`
    display: flex;
    padding: 9px;
    > span {
        font-size: 23px;
        margin: 0 12px;
    }
`;

export const Nav = styled.nav`
    margin-left: 400px;

    .currentPage {
       border-bottom: solid 3px #f5a7ff;
    }

    ul {
        display: flex;
        list-style: none;
    }

    li {
        margin-left: 50px;
    }

    a {
        text-decoration: none;
        font-size: 20px;
        font-weight: 400;
        color: #8b1ec4;

    }
`;

export const DividingLine = styled.div`
    background-color: darkviolet;
    width: 100%;
    height: 4px;
`;
