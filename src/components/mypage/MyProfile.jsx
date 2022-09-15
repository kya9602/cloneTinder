import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import MyProfileUploader from "../MyProfileUpload";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Mypage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  let [userId, setUserId] = useState("")
  let [userimg, setUserImg] = useState("")
  let [usersex, setUserSex] = useState("")

  let sendData;
  const handleEffect = (handleSubmit) => {
      sendData = {
          img : userimg,
          sex : usersex
      }
      handleSubmit()
  }

  const handleSubmit = () => {
      let form_data = new FormData();
      form_data.append('img', sendData.img);
      form_data.append('sex', sendData.sex);
      fetch('http://13.209.68.188/api/profile/update/img' + userId + '/update/', {
          method : 'PATCH',
          headers: {
              Authorization : `JWT ${localStorage.getItem('token')}`,
          },
          body : form_data
      })
      .then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', JSON.stringify(response)));
  };


  return (
  <>
    
    <MyHeader>
    <BoldTitle> 프로필 수정 </BoldTitle>
       <SaveBtn onClick={()=>{ handleEffect(handleSubmit)
                               setUserImg("")
                               setUserSex("")}}>완료</SaveBtn>
    </MyHeader>
    <NavigationBar>
    <ColorTitle> 수정 </ColorTitle>
    </NavigationBar>
    <Body>
      <BoldTitle>프로필 사진</BoldTitle>
       <StContainer>
          <MyProfileUploader />
      </StContainer>
            <br/>
       <BoldTitle>성별</BoldTitle>
        <SDiv>
        {/* <select>
          <option>남자　　　　　　　　</option>
          <option>여자　　　　　　　　</option>
        </select> */}

        </SDiv> 
    </Body> 
  </>  
    )
}

export default Mypage;

const MyHeader = styled.div`
  background-color: #ffffff;
  height: 50px;
`;

const SaveBtn = styled.button`
  position: absolute;
  top: 20px;
  right: calc(50vw - 230px);
  width: 40px;
  height: 30px;
  @media screen and (max-width: 500px) {
    left: 20px;
  }
  color: white;
  font-weight: bold;
  background-color: #fd4f68;
  border: none;
  border-radius: 20px;
  cursor: pointer;
`;

const NavigationBar = styled.div`
  background-color: #ffffff;
  height: 50px;
`;

const StContainer = styled.div`
  width: 250px;
  height: 300px;
  margin: 0 auto;
  margin-bottom: 30px;
  border-width: 4px;
  border-style: dashed;
  border-color: #b0b0b0;
  background-color: #dad9d9;
  border-radius: 10px;
  cursor: pointer;
  /* padding:12px 24px 24px 24px; */
`;

const Body = styled.div`
  background-color: #f5f5f5;
  height: 83vh;
  padding-top: 30px;
`

const BoldTitle = styled.p`
  text-align: center;
  margin: 20px;
  font-weight: bold;
  font-size: 20px;
`;

const ColorTitle = styled.p`
  text-align: center;
  margin: 20px;
  font-weight: bold;
  font-size: 20px;
  color: #fd4f68;
`;

const SDiv = styled.div`
  width: 250px;
  height: 40px;
  margin: 0 auto;
  margin-bottom: 10px;
  border-radius: 10px;
  border-width: 4px;
  background-color: #dad9d9;
  cursor: pointer;
  /* padding:12px 24px 24px 24px; */
`;