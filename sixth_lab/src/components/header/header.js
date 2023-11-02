import React from "react";
import { HeaderStyle, Nav, WrappTheIcon, DividingLine} from "./header.styled";
import { DesktopOutlined } from '@ant-design/icons';

const Header = () => (
    <HeaderStyle>
        <div className="logo">
            <WrappTheIcon>
                <DesktopOutlined style={{color: '#8b1ec4'}}/>
            </WrappTheIcon>
            
            <p>Desk Shop</p>
            <Nav>
                <ul>
                    <li className="currentPage"><a href="#">Home</a></li>
                    <li><a href="#">Catalog</a></li>
                    <li><a href="#">Cart</a></li>
                </ul>
            </Nav>
            
        </div>
        <DividingLine></DividingLine>
    </HeaderStyle>
);

export default Header;