import React from "react";
import { Navigate,useNavigate } from "react-router-dom";
import styled from "styled-components";


const FormSignup = () => {

    const Navigate = useNavigate();

    return (
   <AddInputGroup>
   <div>
    <div>
        <Label>
            <Input
            placeholder="프로그람 아이디"
            name=""id
            type="text"/>
            <CkButton>중복임네까?</CkButton>
        </Label>
        </div>
        <div>
        <Label>
            <Input
            placeholder="프로그람 비밀번호"
            name="password"
            type="password"/>
        </Label>
        </div>
        <div>
        <Label>
            <Input
            placeholder="비밀번호 한번 더 확인해보라우"
            name="passwordConfirm"
            type="password"/>
        </Label>
        </div>
        <div>
        <Label>
            <Input
            placeholder="동무 별명 적으라"
            name="nikeName"
            type="text"/>
            <CkButton>중복임네까?</CkButton>
        </Label>
        </div>
        <div>
        <Label>
            <Input
            placeholder="성별검사"
            name="sex"
            type="text"/>
           

        </Label>
        </div>
        <div>
        <PhotoInput
            type='file' 
            accept='image/*' 
            name='profile_img' 
         />
        </div>
        <Button onClick={() => { Navigate("/choice") }}>다음단계</Button>
        </div>
        
        </AddInputGroup>
        
    )

}

export default FormSignup;

const Button = styled.button`
    outline: none;
    border-width: 1px;
    border-radius: 12px;
    border-style: solid;
    padding: 7px 17px;
    margin: 15px 15px 15px;
    border: none;
    background: #C30D23;
    font-size: 20px;
    font-family: 'Yeon Sung', cursive;
    color: rgb(255, 255, 255);
    &:hover {
    border: 3px solid #C30D23  ;
    background-color: #fff;
    color: #C30D23;
    }
  
`

const Input = styled.input `
  width: 70%;
  height: 40px;
  display: flex;
  border-radius: 100px;
  padding: 0 48px;
  margin : auto;
  font-size: 20px;
  font-family: 'Yeon Sung', cursive;
  align-items: center;
  border: 3px solid #ccc;
  &:hover {
    border: 3px solid #C30D23  ;
    background-color: #fff;
    color: #0465a6;
    }

`;


const Label = styled.label`
    position: relative;
    overflow: hidden;
    display: block;
    width: 100%;
    margin: 8px 0 8px 0;
    border: 1px solid transparent;
    color: transparent;
`;

const AddInputGroup = styled.div`
width:450px;
margin: 0 auto;
margin-top: 4rem;
border : 4px solid #eee;
border-radius: 12px;
padding:12px 24px 24px 24px;
background-size: 240px;

`;


const CkButton = styled.button`
    border:none;  
    position: absolute;
    display: inline-block;
    box-sizing: border-box;
    text-transform: uppercase;
    z-index: 10px;
    top:13px;
    right: 35px;
    cursor: pointer;
    background-color: #fff;
    &:hover {  
    background-color: #fff;
    color: #333;
    font-size: 15px;
    }
`;

const PhotoInput = styled.img`
width: 100px;
margin-top:3rem;
margin-bottom: 1rem;
height: 120px;
border-radius: 110px;
background-position: -1.5rem;
background-size: 150px;
background-repeat: no-repeat;
background-image:url("https://d2u3dcdbebyaiu.cloudfront.net/uploads/atch_img/309/59932b0eb046f9fa3e063b8875032edd_crop.jpeg");
`





