import styled from "styled-components";
import React from "react";
import { Navigate , useNavigate} from "react-router-dom";



const Choice = () => {
   
    return(

        <div>
            <StContainer>
           
            </StContainer>
            <Button onClick={() => { Navigate("/main") }}>고조 가보자우</Button>
        </div>
        
    )
}

export default Choice;


const StContainer = styled.div`
width:450px;
margin: 0 auto;
margin-top: 4rem;
border : 4px solid #eee;
border-radius: 12px;
padding:12px 24px 24px 24px;
background-size: 240px;

`;
const StHeadbtn = styled.button `
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
    
`;
const Button = styled.button`
    outline: none;
    border-width: 1px;
    border-radius: 12px;
    border-style: solid;
    padding: 7px 17px;
    margin: 15px 15px 15px;
    border: none;
    background: #ff87df;
    font-size: 24px;
    font-family: 'Yeon Sung', cursive;
    color: rgb(255, 255, 255);
    &:hover {
    border: 3px solid #ff87df  ;
    background-color: #fff;
    color: #C30D23;
    }
    
`




