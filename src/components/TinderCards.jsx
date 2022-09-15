import React, { useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";
import TinderCard from "react-tinder-card";
import './TinderCards.css';
import { AiFillHeart } from 'react-icons/ai';
import { IoClose } from 'react-icons/io5';
import { useDispatch, useSelector } from "react-redux";
import { __getMembers } from "../redux/modules/member";

function TinderCards() {
    //서버 유저 DB
    const dispatch = useDispatch();
    const Mysex = "여자"
    const data = useSelector((state)=> state.member.data);
    console.log(data)
    
    const [user,setUser] = useState([

    ]);
    

    //유저DB
    /*   const [user,setUser] = useState([
        {
          nickname : '스티브 잡스',
          imgUrl : 'http://ojsfile.ohmynews.com/AT_T_IMG/2018/0921/A0002474317_T.jpg'
        },
        {
          nickname : '일론 머스크',
          imgUrl : 'https://image.zdnet.co.kr/2021/05/17/67d111635189bfb75ec6cccb731e561e.jpg'
        }
    ]); */
    
   
      

    useEffect(()=>{
      dispatch(__getMembers());
      
  },[dispatch])



    const [currentIndex, setCurrentIndex] = useState(data.length-1)

    //어느 방향으로 swip 했는지 기록
    const [lastDirection, setLastDirection] = useState()
    //console.log(lastDirection)

    const currentIndexRef = useRef(currentIndex)
    //console.log('currentIndex '+currentIndex)
    

    


 const childRefs = useMemo(
        () =>
          Array(data.length)
            .fill(0)
            .map((i) => React.createRef()),
        []
      )
  console.log(childRefs)

    const updateCurrentIndex = (val) => {
      setCurrentIndex(val)
      currentIndexRef.current = val
    }  

    //돌아가는 기능
    const canGoBack = currentIndex < data.length - 1

    // 인덱스 >= 0
    const canSwipe = currentIndex >= 0
    

    const swiped = (direction, nameToDelete, index) => {
        setLastDirection(direction)
        updateCurrentIndex(index - 1)
      }

    const outOfFrame = (nickname, idx) => {
        console.log(`${nickname} 인덱스는 (${idx}) left the screen!`, currentIndexRef.current)
        // handle the case in which go back is pressed before card goes outOfFrame
        currentIndexRef.current >= idx && childRefs[idx].current.restoreCard()
        // TODO: when quickly swipe and restore multiple times the same card,
        // it happens multiple outOfFrame events are queued and the card disappear
        // during latest swipes. Only the last outOfFrame event should be considered valid
    }

    const swipe = async (dir) => {
        if (canSwipe && currentIndex < data.length) {
          await childRefs[currentIndex].current.swipe(dir) // Swipe the card!
        }
      }

    useEffect(()=>{        
        /* database.
        collection('people').
        onSnapshot((snapshot)=>(
            setUser(snapshot.docs.map(doc=>doc.data()))
        )) */
        //will run ONCE when the component load, and never agane
    },[]);

    //setUser([...user,'son','min'])

  return (
    <>
    <TinderCards_cardContainer>
      {data.map((person, index)=>{       
        //Mysex가 남자면 여자만 출력하도록
        if(Mysex==="남자")
        if(person.sex==="여자"){
          return(
            <TinderCard
        className="swipe"
        ref={childRefs[index]}
        key={person.nickname}
       
        preventSwipe={['up','down']}        
        onSwipe={(dir) => swiped(dir, person.nickname, index)}
        onCardLeftScreen={() => outOfFrame(person.nickname, index)}

        >
            <Card 
            style={{ backgroundImage: `url(${person.imgUrl})` }}
            className="card">
                <CardName>{person.nickname}</CardName>

            </Card>
        </TinderCard>
          )
        }
        // Mysex가 여자면 남자만 출력하도록...
        if(Mysex==="여자"){
          if(person.sex==="남자"){
            return(
              <TinderCard
          className="swipe"
          ref={childRefs[index]}
          key={person.nickname}
         
          preventSwipe={['up','down']}        
          onSwipe={(dir) => swiped(dir, person.nickname, index)}
          onCardLeftScreen={() => outOfFrame(person.nickname, index)}
  
          >
              <Card 
              style={{ backgroundImage: `url(${person.imgUrl})` }}
              className="card">
                  <CardName>{person.nickname}</CardName>
  
              </Card>
          </TinderCard>
            )
          }
        }

      })}
      <SwipeButtonsContainer>
        <SwipeButtons__left onClick={() => swipe('left')}><IoClose /></SwipeButtons__left>
        <SwipeButtons__right onClick={() => swipe('right')}><AiFillHeart /></SwipeButtons__right>
    </SwipeButtonsContainer>
    </TinderCards_cardContainer>
    </>
  );
}

export default TinderCards;

const Card = styled.div`
    position : relative;
    width: 600px;
    padding: 20px;
    max-width: 85vw;
    height: 50vh;
    border-radius:20px;
    background-size: cover;
    background-position: center;
    box-shadow: 0px 18px 53px 0px rgba(0, 0, 0, 0.3);
`
const CardName = styled.h3`
  
`


const TinderCards_cardContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 5vh;

`

//버튼set
const SwipeButtonsContainer = styled.div`
  position: fixed;
  bottom:15vh;
  width: 95%;
  display: flex;
  justify-content: space-evenly;  
`



const SwipeButtons__left = styled.button`
background-color: white;
border-color: #ec5e6f;
box-shadow: 0px 10px 53px 0px rgba(0,0,0,0.3) !important;
border-radius: 70%;
font-size: 37px;
height: 44px;
color: #ec5e6f;
`


const SwipeButtons__right = styled.button`
background-color: white;
box-shadow: 0px 10px 53px 0px rgba(0, 0, 0, 0.3) !important;
border-radius: 70%;
border-color: #76e2b3;
font-size: 37px;
height: 44px;
color: #76e2b3;
`