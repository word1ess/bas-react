import "./Opportunities.scss";
import OpportunitiesItem from "./OpportunitiesItem/OpportunitiesItem";
import React from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";

import windowImg from "../../../img/svgicons/windows.svg";

function Opportunities({ title, supTitle, isBtn, items, images, isPremium }) {
  const [opportunitiesItems, setOpportunitiesItems] = React.useState(items);
  const [btnMoreStatus, setBtnMoreStatus] = React.useState(false);

  const btnMoreRef = useRef(null);
  const opportunitiesRowRef = useRef(null);
  function btnHandle(btnMoreRef) {
    const copyItems = opportunitiesItems.slice();
    const newArr = [
      {
        title: "Автоматическое решение капчи",
        p: `100% эмуляция человека. Поддерживается человекоподобное движения и клики мыши, перетаскивание элементов, прокрутка, выбор элементов из выпадающего списка, нативная эмуляция клавиатуры, сочетания клавиш и т.д.`,
      },
      {
        title: "Модуль получения SMS",
        p: `Без знаний программирования:
        АИ-помощник/Запись действий/Визуальный конструктор..`,
      },
      {
        title: "Модуль электронной почты",
        p: `Запуск до 300 браузеров одновременно для выполнения вашей задачи в зависимости от мощности вашего ПК.`,
      },
      {
        title: "Автоматизация расширений браузера",
        p: `100% эмуляция человека. Поддерживается человекоподобное движения и клики мыши, перетаскивание элементов, прокрутка, выбор элементов из выпадающего списка, нативная эмуляция клавиатуры, сочетания клавиш и т.д.`,
      },
      {
        title: "Автоматизация расширений браузера",
        p: `Без знаний программирования:
        АИ-помощник/Запись действий/Визуальный конструктор..`,
      },
      {
        title: "Базы данных",
        p: `Запуск до 300 браузеров одновременно для выполнения вашей задачи в зависимости от мощности вашего ПК.`,
      },
      {
        title: "Расширение функционала с помощью модулей",
        p: `Без знаний программирования:
        АИ-помощник/Запись действий/Визуальный конструктор..`,
        additionalClass: true,
      },
      {
        title: "Поддержка Javascript и Python",
        p: `Запуск до 300 браузеров одновременно для выполнения вашей задачи в зависимости от мощности вашего ПК.`,
        additionalClass: true,
      },
    ];
    if (!btnMoreStatus) {
      setOpportunitiesItems([...copyItems, ...newArr]);
      setBtnMoreStatus(true);
    } else {
      setBtnMoreStatus(false);
    }

    opportunitiesRowRef.current.classList.toggle("active");
  }
  return (
    <article className="opportunities block-with-substrate ">
      <div className="container">
        <div className="line">
          <svg
            width="262"
            height="37"
            viewBox="0 0 262 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 1H107.817C109.197 1 110.515 1.57009 111.46 2.57532L141.4 34.4247C142.345 35.4299 143.664 36 145.044 36H262"
              stroke="url(#paint0_linear_549_5061)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_549_5061"
                x1="149.888"
                y1="36"
                x2="260.021"
                y2="21.2357"
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
        <div className="line right">
          <svg
            width="262"
            height="37"
            viewBox="0 0 262 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 1H107.817C109.197 1 110.515 1.57009 111.46 2.57532L141.4 34.4247C142.345 35.4299 143.664 36 145.044 36H262"
              stroke="url(#paint0_linear_549_5061)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_549_5061"
                x1="149.888"
                y1="36"
                x2="260.021"
                y2="21.2357"
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
        <div className="line right bottom">
          <svg
            width="162"
            height="21"
            viewBox="0 0 162 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M162 1H95.9694C94.7024 1 93.4826 1.48101 92.5567 2.34581L75.0945 18.6542C74.1685 19.519 72.9488 20 71.6818 20H2.20537e-06"
              stroke="url(#paint0_linear_549_5063)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_549_5063"
                x1="138"
                y1="9.5"
                x2="1.57752"
                y2="-0.831078"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#272C30" stop-opacity="0" />
                <stop offset="0.526302" stop-color="#272C30" />
                <stop offset="0.719617" stop-color="#3050FB" />
                <stop offset="0.906808" stop-color="#41FFC2" />
                <stop offset="1" stop-color="#2EDCF9" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        {supTitle ? (
          <header className="block-header flex border-2 center">
            <h3 className="text-gradient">{supTitle}</h3>
            <h2>{title}</h2>
          </header>
        ) : (
          <header className="block-header center big">
            <h2>{title}</h2>
          </header>
        )}
        <main className="opportunities__row" ref={opportunitiesRowRef}>
          {opportunitiesItems.map((item, i) => {
            return (
              <OpportunitiesItem
                image={images[i]}
                title={item.title}
                text={item.p}
                additionalClass={item.additionalClass}
                decorationImgs={item.decorationImgs}
                isPremium
              />
            );
          })}
        </main>

        {isBtn &&
          (btnMoreStatus ? (
            <div className="button-container">
              <Link
                to="#"
                class="btn btn-with-image btn-gradient btn-with-border"
              >
                <img src={windowImg} alt="download" />
                Скачать
                <span class="white-space"></span>
                <span class="border"></span>
              </Link>
            </div>
          ) : (
            <div className="button-container">
              <button
                className="btn btn-gradient btn-with-border"
                onClick={() => {
                  btnHandle(btnMoreRef);
                }}
                ref={btnMoreRef}
              >
                Показать все
                <span className="border"></span>
                <span className="white-space"></span>
              </button>
            </div>
          ))}

        <div className="lines__fixes"></div>
      </div>
    </article>
  );
}

export default Opportunities;
