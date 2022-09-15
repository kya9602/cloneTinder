import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { SiTinder } from 'react-icons/si';
import { AiFillAppstore } from 'react-icons/ai';
import { AiFillStar } from 'react-icons/ai';
import { IoIosChatbubbles } from 'react-icons/io';
function Footer() {

  return (
    <FooterContainer>
        <MainContainer>
            <Link to="/" > <SiTinder /> </Link>
        </MainContainer>            
        <TourContainer>
            <Link to="/tour"> <AiFillAppstore /> </Link>
        </TourContainer>
        <LikeContainer>
            <Link to="/like"> <AiFillStar /> </Link>
        </LikeContainer>
        <ChatContainer>
            <Link to="/chat"> <IoIosChatbubbles /> </Link>
        </ChatContainer>      
    </FooterContainer>
  );
}

export default Footer;



const FooterContainer = styled.div`
  position: fixed;
  bottom:0vh;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  font-size: 37px;
  a:hover, a:active { text-decoration: none; }
  a { text-decoration: none; color: gray; }
  a:visited { text-decoration: none; }  
`
const MainContainer = styled.div `
a { color: ${window.location.pathname === '/' ? '#ec5e6f' : 'gray'}; }

`

const TourContainer = styled.div `
a { color: ${window.location.pathname === '/tour' ? '#ec5e6f' : 'gray'}; }
`

const LikeContainer = styled.div `
a { color: ${window.location.pathname === '/like' ? '#ec5e6f' : 'gray'}; }
`

const ChatContainer = styled.div `
a { color: ${window.location.pathname === '/chat' ? '#ec5e6f' : 'gray'}; }
`