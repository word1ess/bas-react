import "./Education.scss";

import educationImg from "../../../img/advantages/2.png";
import plusImg from "../../../img/svgicons/plus.svg";
import linkImg from "../../../img/svgicons/link.svg";
import contentVideo from "./video/bg.webm";

import { Tooltip } from "react-tooltip";
import React from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import EducationSlide from "./EducationSlide/EducationSlide";
import CustomBtn from "../../Common/Btns/CustomBtn";

function Education() {
  function importAll(image) {
    return image.keys().map(image);
  }
  const slideImages = importAll(
    require.context("./images/for-slider/", false, /\.(png|jpe?g|svg)$/)
  );
  const educationSlides = [
    {
      title: "Статьи",
      body: [
        <Link
          to="https://browserautomation.io/ru/start/"
          className="btn-with-image"
        >
          БЫСТРЫЙ СТАРТ
          <img src={linkImg} alt="link" />
        </Link>,
      ],
      img: educationImg,
      btn: [
        <CustomBtn
          textForBtn="Быстрый старт"
          btnClass="btn-index"
          link="https://browserautomation.io/ru/start/"
        />,
      ],
    },
    {
      title: "Видеоуроки",

      body: [
        <Link
          to="https://www.youtube.com/@browserautomationstudio"
          className="btn-with-image"
        >
          Видео от пользователя
          <img src={linkImg} alt="link" />
        </Link>,
        <Link
          to="https://www.youtube.com/@olegkasaev1378"
          className="btn-with-image"
        >
          Видео от пользователя 2
          <img src={linkImg} alt="link" />
        </Link>,
      ],
      img: educationImg,
      btn: [
        <CustomBtn
          textForBtn="Официальный канал YouTube"
          btnClass="btn-index"
          link="https://www.youtube.com/@browserautomationstudio3109"
        />,
      ],
    },
    {
      title: "Контакты",
      subTitle: undefined,
      img: undefined,
      body: [
        <>
          <a
            data-tooltip-id="copy"
            data-tooltip-delay-hide={300}
            onClick={() => {
              navigator.clipboard.writeText("basmarketings@gmail.com");
            }}
            closeEvents={"mouseleave"}
          >
            BASMARKETINGS@GMAIL.COM
          </a>
          <Tooltip id="copy" content="Скопировано!" openOnClick />
        </>,
      ],
      btn: [
        <CustomBtn
          textForBtn="Задать вопрос"
          btnClass="btn-index"
          isScroll={[true, "support"]}
        />,
      ],
    },
  ];
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <article className="education block-dashed-top block-dashed-sides">
      <div className="container ">
        <div className="plus top left">
          <img src={plusImg} alt="plus" />
        </div>
        <div className="plus top right">
          <img src={plusImg} alt="plus" />
        </div>
        <div className="block-with-bg">
          <div class="corner-block top left"></div>
          <div class="corner-block top right"></div>
          <div class="corner-block bottom left"></div>
          <div class="corner-block bottom right"></div>

          <header className="block-header border-2 flex">
            <h3 className="text-gradient">Хотите стать профессионалом BAS?</h3>
            <h2>
              <span>
                <div className="corner top left"></div>
                <div className="corner bottom right"></div>
                <div className="line-border top"></div>
                <div className="line-border right"></div>
                <div className="line-border left"></div>
                <div className="line-border bottom"></div>
                Обучение
              </span>
            </h2>
            <div class="line">
              <svg
                width="430"
                height="56"
                viewBox="0 0 430 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 1H178.429C179.755 1 181.027 1.52678 181.964 2.46447L233.036 53.5355C233.973 54.4732 235.245 55 236.571 55H430"
                  stroke="url(#paint0_linear_549_3936)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_549_3936"
                    x1="246"
                    y1="55"
                    x2="426.333"
                    y2="29.2834"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.2" stop-color="#272C30" />
                    <stop offset="0.5" stop-color="#3050FB" />
                    <stop offset="0.8" stop-color="#41FFC2" />
                    <stop offset="1" stop-color="#2EDCF9" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </header>
          <main className="education__row">
            <Swiper
              className="swiper education__swiper"
              modules={[Navigation]}
              spaceBetween={24}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }}
            >
              <div className="swiper-button-prev" ref={prevRef}></div>
              <div className="swiper-button-next" ref={nextRef}></div>
              {educationSlides.map((slide, i) => {
                return (
                  <SwiperSlide>
                    <EducationSlide
                      title={slide.title}
                      subtitle={slide.subTitle}
                      body={slide.body}
                      img={slideImages[i]}
                      btn={slide.btn}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <div className="education__content-img">
              <video src={contentVideo} autoPlay muted loop></video>
              <div className="line">
                <svg
                  width="254"
                  height="72"
                  viewBox="0 0 254 72"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M254 1H123.167C121.208 1 119.43 2.14405 118.617 3.9267L89.387 68.0733C88.5746 69.856 86.7961 71 84.8371 71H-8.10623e-06"
                    stroke="url(#paint0_linear_549_4993)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_549_4993"
                      x1="254"
                      y1="1"
                      x2="0.695591"
                      y2="-1.43256"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#272C30" stop-opacity="0" />
                      <stop offset="0.22" stop-color="#272C30" />
                      <stop offset="0.676969" stop-color="#272C30" />
                      <stop offset="0.868761" stop-color="#315BF7" />
                      <stop offset="0.933334" stop-color="#41FFC2" />
                      <stop offset="1" stop-color="#2EDCF9" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </main>
        </div>
      </div>
    </article>
  );
}

export default Education;
