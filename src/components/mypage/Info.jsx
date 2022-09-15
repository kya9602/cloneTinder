import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";


import Banner from "../Banner";



const Info = () => {
  const navigate = useNavigate();
   
  return (
  <>
    <MyHeader>
       <GoBackBtn onClick={() => {navigate(-1);}}> ← </GoBackBtn>
    </MyHeader>
    <Body>
    <Container>
       <StContainer>
            <MypfImg alt="MyPf" src="https://img.hankyung.com/photo/202108/BF.27314751.1.jpg"
            onClick={() => {navigate("/img");}}/>
      </StContainer>
      <h2>nickName, 나이</h2>
      <br/>
        <ProfileButton onClick={() => {navigate("/img")}}>  {/* 네비게이션수정해주기 */}
            ✏️
        </ProfileButton>
        <p>프로필 수정</p>
    
        <Footer>
            <Banner/>
        </Footer>
        
    </Container>
    </Body>  
  </>  
    )
}

export default Info;

const MyHeader = styled.div`
  background-color: #ffffff;
  height: 50px;
  margin-bottom: 15px;
`;

const Body = styled.div`
  background-color: #f5f5f5;
  height: 80vh;
  
`
const Container = styled.div`
  background-color: #ffffff;
  height: 28em;
  border-radius: 0% 0% 40% 40%;
`

const GoBackBtn = styled.button`
  position: absolute;
  top: 20px;
  left: calc(50vw - 230px);
  width: 30px;
  height: 30px;
  font-weight: bold;
  @media screen and (max-width: 500px) {
    left: 20px;
  }
  color: white;
  background-color: #fd4f68;
  border: none;
  border-radius: 20px;
  cursor: pointer;
`;

const MypfImg = styled.img`
  width: 190px;
  height: 190px;
  margin: 0 auto;
  border: none;
  border-radius: 100px;
  cursor: pointer;
  padding-top: 5px;
`;

const StContainer = styled.div`
  width: 200px;
  height: 200px;
  margin: 0 auto;
  border : 8px solid #eee;
  border-radius: 100px;
  cursor: pointer;
`;

const ProfileButton = styled.button`
  border-radius: 50px;
  margin: 15px auto;
  margin-top: 3px;
  border: none;
  padding: 18px;
  width: 4em;
  height: 4em;
  letter-spacing: 2px;
  background-color: white;
  box-shadow: 1px 1px 3px 3px rgba(112, 112, 112, 0.1);
  `;

const Footer = styled.div`
  background-color: #f5f5f5;
  position: absolute; 
  bottom: 0;
  left: 0;
  height: 220px;
  width: 100%;
  cursor: pointer;
  `
