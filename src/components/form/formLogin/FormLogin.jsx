import React, { useEffect } from "react";
import styled from "styled-components";
import { Navigate, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { useState, useEffect } from "react";


const Formlogin = () => {
    // let result = useSelector((state)=>state.login)
    let Navigate = useNavigate();
    // let dispatch = useDispatch();
    // let initialState = {
    //     id:"",
    //     password:""
    // }
    // let [member,setMember] = useState(initialState);

    // const onChangeHandler = (event) => {
    //     const {name,value} = event.target;
    //     setMember({...member,[name]:value});
    // };
    // const onSubmit = () => {
    //     dispatch(__login(member));
    // }

    // useEffect(()=> {
    //     if(result.data.success) {
    //         Navigate('/main');
    //     }
    // })
    return (
<div>
    <StForm>
    <div>
        
            <Input
            placeholder="동무 아이디 입력하라우"
            // onChange={onChangeHandler}
            name="id"
            // value={member.id}
            type="text"/>

        
        
    </div>
    <div>

            <Input
            placeholder="동무 비밀번호 입력하라우"
            // onChange={onChangeHandler}
            name="password"
            // value={member.password}
            type="password"/>

    </div>
    <div>
        <Button onClick={()=>{Navigate("/main")}}>들어가라우</Button>
        <SignButton onClick={()=>{Navigate("/signup")}}>회원가입</SignButton>
        
    </div>
    </StForm>
  
</div>

    )
};

export default Formlogin;

const Input = styled.input `
  width: 250px;
  height: 60px;
  border: none;
  overflow: hidden;
  display: flex;
  border-radius: 100px;
  padding: 0 48px;
  justify-content: center;
  margin : auto;
  font-size: 20px;
  font-family: 'Yeon Sung', cursive;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 20px;
  border: 5px solid #C30D23;
  &:hover {
    border: 3px solid #ffa1ac  ;
    background-color: #fff;
    color: #0465a6;
    }

`;



const StForm = styled.div`
width:450px;
height: auto;
margin: 0 auto;
margin-top: 4rem;
border-width: 2px;
border : 4px solid #eee;
border-radius: 12px;
padding:12px 24px 24px 24px;
background-size: 240px;
`

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
  
`

const SignButton = styled.button`
    outline: none;
    border-width: 1px;
    border-radius: 12px;
    border-style: solid;
    padding: 7px 17px;
    margin: 15px 15px 15px;
    border: none;
    font-size: 20px;
    font-family: 'Yeon Sung', cursive;
    color: rgb(255, 255, 255);
    border: 3px solid #C30D23  ;
    background-color: #fff;
    color: #C30D23;
    
    
`
