import React from "react";
import { FooterStyle, DividingLine, UnderDividingLine, 
        FooterTextContent, FooterLogo, SocialIcons, SocialIconWrapper, BottomDividingLine, Conclusion } from "./footer.styled";
import { DesktopOutlined } from '@ant-design/icons';
import { YoutubeOutlined } from "@ant-design/icons";
import { FacebookOutlined } from "@ant-design/icons";
import { InstagramOutlined } from "@ant-design/icons";
import { TwitterOutlined } from "@ant-design/icons";

const Footer = () => {
    return (
        <FooterStyle>
            <DividingLine />
            <UnderDividingLine>
                <FooterTextContent>
                    <h4>
                        Our desk is always better then yours
                    </h4>
                    <p>
                        If you want to contact as use links in footer. Don't contact with us if you want to report us =)
                    </p>
                </FooterTextContent>
                <div className="logo">
                    <FooterLogo>
                        <DesktopOutlined style={{ color: '#8b1ec4' }} />
                    </FooterLogo>
                    <p>Desk Shop</p>
                </div>
                <SocialIcons>

                    <SocialIconWrapper href="#">
                        <YoutubeOutlined style={{color: "red"}}/>
                    </SocialIconWrapper>
                        
                    <SocialIconWrapper href="#">
                        <FacebookOutlined style={{color: "darkblue"}}/>
                    </SocialIconWrapper>
                        
                    <SocialIconWrapper href="#">
                        <InstagramOutlined style={{color: "#f5a7ff"}}/>
                    </SocialIconWrapper>
                        
                    <SocialIconWrapper href="#">
                        <TwitterOutlined style={{color: "lightblue"}}/>
                    </SocialIconWrapper>
    
                </SocialIcons>
            </UnderDividingLine>
            <BottomDividingLine/>
            <Conclusion>
                2023 IoT © Copyright all rights reserved, bla bla
            </Conclusion>
        </FooterStyle>
    );
}

export default Footer