import React, { useState } from "react";
import { Navigate,useNavigate } from "react-router-dom";
import styled from "styled-components";

import { Pagination,Autoplay, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const GoldCard = () => {
    let Navigate = useNavigate();

    return (
        <div>     <StContainer>
 <Box>
<StTitle>Tinder 골드 구매</StTitle> 

<ChoiceContainer>
     <SwiperBox>
     <Swiper
        // install Swiper modules
        modules={[Pagination,Autoplay,A11y]}
        spaceBetween={0}
        autoplay
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      ><StSwiper>
        <SwiperSlide ><Stimg src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcIClc6%2FbtrL85odete%2FN27dxptnif5sT6hoEZk6bk%2Fimg.png"/></SwiperSlide>
        <SwiperSlide ><Stimg src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FE8lQu%2FbtrMacNod2u%2FJpQDNRU8Cmmp2rhEltHhhK%2Fimg.png"/></SwiperSlide>
        <SwiperSlide><Stimg src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F3W5oo%2FbtrL7uhFl9q%2F3p8VfbScBtayqiTlUMjHP0%2Fimg.png"/></SwiperSlide>
        <SwiperSlide ><Stimg src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FZslb0%2FbtrL5deOqzw%2FsAPMoBLE5jod1SIcZHcob1%2Fimg.png"/></SwiperSlide>
      </StSwiper>
    
      </Swiper>
      </SwiperBox>
       
   
  
    <ChoiceButton_1/>
    <ChoiceButton_2/>
    <ChoiceButton_3/>
   </ChoiceContainer>

<Button onClick={() => { Navigate("/login") }}>계속하기</Button>

 </Box>


        </StContainer>

        </div>
    )
}

export default GoldCard;


const StContainer = styled.div`
position: absolute;
left: 38%;
width:450px;
height: 900px;
display: flex;
align-items: center;
justify-content: center;
margin: 15px auto;
border : 4px solid #eee;
border-radius: 12px;

`;


const StSwiper = styled.div`
width: 400px;
height: 110px;

`

const SwiperBox = styled.div`
    width: 400px;
    height: 160px;
    display: inline-block;
`

const Stimg = styled.img`
 margin-bottom: 80px;
 width: 100%;

`



const ChoiceContainer = styled.div`
    width: 400px;
    margin-top: 2rem;
    height: 122px;
    display: inline-block;
    border: 1px solid transparent;
`
const ChoiceButton_1 = styled.button`
   
    width: 132px;
    height: 130px;
    background:url("https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fdkzgho%2FbtrMaedl0OC%2FO7yTZwMt7IKaeCZPhsKMKK%2Fimg.png");
    background-color: #fff;
    display: inline-block;
    border:none;
    &:focus {
    background:url("https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbBuuKl%2FbtrMaIkXUxo%2FVKPAMCoKksNn1S6CLvWmkK%2Fimg.png");
    background-repeat: no-repeat;
    width: 132px;
    height: 130px;  
    
    }
   
`

const ChoiceButton_2 = styled.button`
   
    width: 132px;
    height: 130px;
    background:url("https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbs2UuC%2FbtrL7t39mzo%2FhkZwej5kU7nkt3Dn4Vw0x1%2Fimg.png");
    background-color: #fff;
    display: inline-block;
    border:none;
    &:focus {
    background:url("https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FPdIlW%2FbtrL8yjQb5O%2FkTzT0gbhE3NQckuyo4F2P1%2Fimg.png");
    background-repeat: no-repeat;
    width: 132px;
    height: 130px;  
    
    }
   
`
const ChoiceButton_3 = styled.button`
   
    width: 132px;
    height: 130px;
    background:url("https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbuLDMt%2FbtrL8xrGJ8f%2FnkbwzkzMQG43IJLLmnMZgK%2Fimg.png");
    background-color: #fff;
    display: inline-block;
    border:none;
    &:focus {
    background:url("https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbvVCdU%2FbtrL7tJPok7%2Fwp0nLklPW6k3iRfKbXIY70%2Fimg.png");
    background-repeat: no-repeat;
    width: 132px;
    height: 130px;  
    
    }
   
`


const Button = styled.button`
    width: 300px;
    height: 50px;
    display: inline-block;
    margin-top: 1.5rem;
    border-radius: 22px;
    border: 1px solid transparent;
    background: linear-gradient(to right, gold 0%, #ffac3f 100%);
    color: white;
    font-size: 20px;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: bold;
`





const Box = styled.div`
  width: 400px;
  height: 600px;
  margin: 0 auto;
  border-color: ivory;
  border-radius: 30px;
  cursor: pointer;
  box-shadow: 1px 1px 3px 3px rgba(112, 112, 130, 0.1);
`
const StTitle = styled.div`
 font-size: 28px;
 font-family: 'Noto Sans KR', sans-serif;
 font-weight: bold;
 margin-top: 3rem;
 color: #E1AB4B;
 letter-spacing: -1px;
`
