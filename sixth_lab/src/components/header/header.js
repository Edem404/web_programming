import React from "react";
import { HeaderStyle, Nav, WrappTheIcon, DividingLine} from "./header.styled";
import { DesktopOutlined } from '@ant-design/icons';
import { Link, useLocation } from "react-router-dom";

const Header = () => {
    const location = useLocation();
    return (<HeaderStyle>
        <div className="logo">
            <WrappTheIcon>
                <DesktopOutlined style={{color: '#8b1ec4'}}/>
            </WrappTheIcon>
            
            <p>Desk Shop</p>
            <Nav>
                <ul>
                <li><Link to="/" className={location.pathname === '/' ? 'homePage currentPage' : 'homePage'}>Home</Link></li>
                    <li><Link to="/catalog" className={location.pathname === '/catalog' ? 'currentPage' : ''}>Catalog</Link></li>
                    <li><Link to="/cart" className={location.pathname === '/cart' ? 'currentPage' : ''}>Cart</Link></li>
                </ul>
            </Nav>
            
        </div>
        <DividingLine></DividingLine>
    </HeaderStyle>);

    
};

export default Header;