import React, { useState } from "react";
import styled from "styled-components";

function TourCard() {
    //card DB
    const [card,setCard] = useState([
        {
          mode : '페스티벌 모드',
          imgUrl : 'https://fever-festival.com/_nuxt/img/bg.jpg?v=60'
        },
        {
            mode : 'MUSIC MODE',
          imgUrl : 'https://i.scdn.co/image/ab678e040000ed3a15b8bd60628173a13eb8d7ae'
        },
        {
            mode : '설레고 싶어',
            imgUrl : 'http://cdn.psychiatricnews.net/news/photo/202008/20929_14054_2923.jpg'
          },
          {
            mode : '오늘 만날래?',
            imgUrl : 'https://www.urbanbrush.net/web/wp-content/uploads/edd/2019/08/urbanbrush-20190815035708112738.png'
          }
    ]);

  return (
    <div>
        <div>둘러보기 탭에 오신것을 환영해요!</div>
        <div>지금 나의 무드에 맞는 카드를 골라 보세요</div>
    <TourMainDiv>            
        
    {card.map((person)=>{
        return (
        <TourCardContainer key={person.mode}>
        <Card style={{ backgroundImage: `url(${person.imgUrl})` }}>
        {person.mode}
        </Card>
        </TourCardContainer>
        )
    })}
    </TourMainDiv>
    </div>
  );
}

export default TourCard;
const TourMainDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const TourCardContainer = styled.div`
    padding-top: 20px;
    padding-left: 20px;
    padding-right: 20px;
    
`

const Card = styled.div`
    width: 200px;
    max-width: 85vw;
    height: 30vh;
    border-radius:20px;
    box-shadow: 0px 18px 53px 0px rgba(0, 0, 0, 0.3);
    background-size: cover;
    background-position: center;
    color:white;
    text-align:center;
`