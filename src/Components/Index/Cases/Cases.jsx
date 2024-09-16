import CasesSlide from "./CasesSlide/CasesSlide";

import "./Cases.scss";
import "swiper/css";
import "swiper/css/navigation";

import React from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import casesImg from "../../../img/svgicons/tik-tok.svg";
import windowsBtn from "../../../img/svgicons/windows-black.svg";
import tiktokImg from "../../../img/svgicons/tik-tok-small.svg";
import cryptoImg from "../../../img/svgicons/crypto.svg";
import seoImg from "../../../img/svgicons/seo.svg";
import plusImg from "../../../img/svgicons/plus.svg";

function Cases() {
  const casesSlides = [
    {
      img: tiktokImg,
      type: "Соцсети",
      title: "Tiktok Менеджер",
      description:
        "Программа для маркетинговой активности в Tiktok. Создание учетных записей, заполнение профиля, загрузки видео, отправка комментариев, лайков и подписок.",
      link: "https://t.me/tiktok_farms",
      review:
        "Ранее работа с BAS была для меня как хобби, но после вынужденного переезда в ЕС, данный инструмент позволяет обеспечивать достаточный доход для комфортного проживания и путешествий.",
      authorimg: undefined,
      author: "Разработчик",
      slogan: "Автоматизируйте свою работу в любой социальной сети.",
    },
    {
      img: cryptoImg,
      type: "Криптовалюта",
      title: "NotCoin Автоматизация",
      description:
        "С Помощью BAS была реализована автоматическая добыча монет NotCoin для нескольких тысяч аккаунтов.",
      link: "https://t.me/bas_project",
      review:
        "Еще  2018 году сделал программу по Email маркетингу, с того времени было уже заработано больше 150к$ И все на бесплатном BAS. Софт в связке с модулями может практически все)",
      authorimg: undefined,
      author: "Разработчик",
      slogan:
        "Создавайте автоматизацию для любых криптовалютных проектов: торговля, airdrop и др.",
    },
    {
      img: seoImg,
      type: "SEO и Сайты",
      title: "X-GPTWriter",
      description:
        "Программа для автоматизации нейросетей, который позволяет создавать массово текстовые статьи для сайтов, генерировать описаний карточек товара для магазина.",
      link: "https://x-parser.ru/software/150-xgptwriter.html",
      review: undefined,
      authorimg: undefined,
      author: undefined,
      slogan: "Любая автоматизация в сфере создания и продвижения сайтов.",
    },
    {
      img: cryptoImg,
      type: "Криптовалюта",
      title: "NotCoin Автоматизация",
      description:
        "С Помощью BAS была реализована автоматическая добыча монет NotCoin для нескольких тысяч аккаунтов.",
      link: undefined,
      review:
        "Еще  2018 году сделал программу по Email маркетингу, с того времени было уже заработано больше 150к$ И все на бесплатном BAS. Софт в связке с модулями может практически все)",
      authorimg: undefined,
      author: "Разработчик",
      slogan:
        "Создавайте автоматизацию для любых криптовалютных проектов: торговля, airdrop и др.",
    },
  ];

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <article className="cases block-dashed-top block-dashed-sides">
      <div className="container">
        <div className="plus top left">
          <img src={plusImg} alt="plus" />
        </div>
        <div className="plus top right">
          <img src={plusImg} alt="plus" />
        </div>

        <main className="cases__row">
          <aside className="cases__aside">
            <div className="cases__arrows">
              <div
                className="swiper-button-prev cases__prev"
                ref={prevRef}
              ></div>
              <div
                className="swiper-button-next cases__next"
                ref={nextRef}
              ></div>
            </div>
            <img src={casesImg} alt="" />
            <label className="label">
              <Link
                class="btn-index "
                to="https://browserautomation.io/download/BrowserAutomationStudioInstallAllInOne.exe"
              >
                <div class="btn-index__border">
                  <div class="btn-index__text">
                    <img src={windowsBtn} alt="download" />
                    Скачать
                  </div>
                  <span class="white-space"></span>
                </div>
              </Link>
              <p className="label__text">Бесплатно</p>
            </label>
          </aside>
          <Swiper
            className="swiper"
            modules={[Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
          >
            {casesSlides.map((slide) => {
              return (
                <SwiperSlide>
                  <CasesSlide
                    img={slide.img}
                    type={slide.type}
                    title={slide.title}
                    description={slide.description}
                    link={slide.link}
                    review={slide.review}
                    authorimg={slide.authorimg}
                    author={slide.author}
                    slogan={slide.slogan}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </main>
      </div>
    </article>
  );
}

export default Cases;
