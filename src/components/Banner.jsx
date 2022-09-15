import React from "react";
import styled from "styled-components";

// 배너 카드넘김관련
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';
import "swiper/css/autoplay";

function Banner() {
  return (
    <>
      <All>
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          autoplay={{ delay: 4000 }}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <h3>🔥Tinder 플래티넘</h3>
            <p>Tinder를 업그레이드하고 클래스가 다른 경험을 누리세요</p>
            <BannerButton>자세히 알아보기</BannerButton>
          </SwiperSlide>
          <SwiperSlide>
            <h3>🟡99명 이상이 나를 LIKE 했어요</h3>
            <p>지금 TINDER 골드로 확인하세요</p>
            <BannerButton>내가 받은 LIKE 보기</BannerButton>
          </SwiperSlide>
          <SwiperSlide>
            <h3>🔥Tinder 플러스</h3>
            <p>LIKE 무제한, 패스포트 등의 다양한 기능을 이용해 보세요!</p>
            <BannerButton>TINDER 플러스 구매</BannerButton>
          </SwiperSlide>
          <SwiperSlide>
            <h3>🔥나의 Tinder 라이프 업그레이드</h3>
            <p>Tinder의 프리미엄 기능들을 이용해보세요!</p>
            <BannerButton>구독서비스 모두 보기</BannerButton>
          </SwiperSlide>
          <SwiperSlide>
            <h3>⚡부스트</h3>
            <p>30분 동안 현재 지역 사람들에게 가장 먼저 보여지는<br/>
            프로필이 되어 더 많은 매치가 이뤄질 수 있어요</p>
            <BannerButton>나의 부스트</BannerButton>
          </SwiperSlide>
        </Swiper>
      </All>
    </>
  );
}
export default Banner;

const All = styled.div`
  height: 100px;
  width: 550px;
  margin: auto;
`;

const BannerButton = styled.button`
  font-size: 15px;
  border-radius: 50px;
  margin: 15px auto;
  margin-top: 20px;
  font-weight: bold;
  border: none;
  padding: 18px;
  width: 15em;
  max-width: 70%;
  letter-spacing: 2px;
  background-color: white;
  color: #000000;
  box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.1);
  `;
