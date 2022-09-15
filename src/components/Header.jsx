import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Header() {
  return (
    <HeaderContainer>
      <ImgContainer>
        <MyImg src="https://img.hankyung.com/photo/202108/BF.27314751.1.jpg"></MyImg>
      </ImgContainer>
      <LogoContainer>      
        <Logo alt="logo_tinder" src="logo_tinder.png"></Logo>          
      </LogoContainer>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  margin-top: 8px;  
`

const ImgContainer = styled.div`
  flex:1; 
`

const MyImg = styled.img`
    width: 50px;
    height: 50px; 
    border-radius: 70%;
    overflow: hidden;
    margin-left: 15px;
    justify-content: start;
`

const LogoContainer = styled.div` 
  flex:2;
  justify-content: center;
  margin-right: 65px;
`

const Logo = styled.img`
`
