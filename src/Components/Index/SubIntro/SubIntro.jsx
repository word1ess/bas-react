import { Link } from "react-router-dom";
import plusImg from "../../../img/svgicons/plus.svg";
import windowsImg from "../../../img/svgicons/windows-black.svg";

import "./SubIntro.scss";

function SubIntro() {
  return (
    <>
      <article className="sub-intro block-dashed-top block-dashed-sides">
        <div className="container">
          <div className="plus top left">
            <img src={plusImg} alt="plus" />
          </div>
          <div className="plus top right">
            <img src={plusImg} alt="plus" />
          </div>
          <div className="sub-intro__row text-gradient">
            Автоматизация браузера без навыков программирования
          </div>
        </div>
      </article>
      <article className="sub-intro block-dashed-top block-dashed-sides">
        <div className="container">
          <div className="line left">
            <svg
              width="98"
              height="129"
              viewBox="0 0 98 129"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M98 128H18L1 111V0"
                stroke="url(#paint0_linear_549_4458)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_549_4458"
                  x1="0.999999"
                  y1="4.00001"
                  x2="101.326"
                  y2="125.248"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#272C30" stop-opacity="0">
                    <animate
                      attributeName="stop-color"
                      values="#272c3000; #272C30; #3050FB; #41FFC2; #2EDCF9; #272c3000;"
                      dur="4s"
                      repeatCount="indefinite"
                    />
                  </stop>
                  <stop offset="0.30398" stop-color="#272C30">
                    <animate
                      attributeName="stop-color"
                      values="#2EDCF9; #272c3000; #272C30; #3050FB; #41FFC2; #2EDCF9;"
                      dur="4s"
                      repeatCount="indefinite"
                    />
                  </stop>
                  <stop offset="0.5" stop-color="#3050FB">
                    <animate
                      attributeName="stop-color"
                      values="#41FFC2; #2EDCF9; #272c3000; #272C30; #3050FB; #41FFC2;"
                      dur="4s"
                      repeatCount="indefinite"
                    />
                  </stop>
                  <stop offset="0.8" stop-color="#41FFC2">
                    <animate
                      attributeName="stop-color"
                      values="#3050FB; #41FFC2; #2EDCF9; #272c3000; #272C30; #3050FB;"
                      dur="4s"
                      repeatCount="indefinite"
                    />
                  </stop>
                  <stop offset="1" stop-color="#2EDCF9">
                    <animate
                      attributeName="stop-color"
                      values="#272C30; #3050FB; #41FFC2; #2EDCF9; #272c3000; #272C30;"
                      dur="4s"
                      repeatCount="indefinite"
                    />
                  </stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="line center">
            <svg
              width="2"
              height="75"
              viewBox="0 0 2 75"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 75L1 3.28179e-06"
                stroke="url(#paint0_linear_549_4460)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_549_4460"
                  x1="0.468112"
                  y1="-2.33514e-06"
                  x2="0.888843"
                  y2="74.9978"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#272C30" stop-opacity="0">
                    <animate
                      attributeName="stop-color"
                      values="#272c3000; #272C30; #3050FB; #41FFC2; #2EDCF9; #272c3000;"
                      dur="4s"
                      repeatCount="indefinite"
                    />
                  </stop>
                  <stop offset="0.2" stop-color="#272C30">
                    <animate
                      attributeName="stop-color"
                      values="#2EDCF9; #272c3000; #272C30; #3050FB; #41FFC2; #2EDCF9;"
                      dur="4s"
                      repeatCount="indefinite"
                    />
                  </stop>
                  <stop offset="0.5" stop-color="#3050FB">
                    <animate
                      attributeName="stop-color"
                      values="#41FFC2; #2EDCF9; #272c3000; #272C30; #3050FB; #41FFC2;"
                      dur="4s"
                      repeatCount="indefinite"
                    />
                  </stop>
                  <stop offset="0.8" stop-color="#41FFC2">
                    <animate
                      attributeName="stop-color"
                      values="#3050FB; #41FFC2; #2EDCF9; #272c3000; #272C30; #3050FB;"
                      dur="4s"
                      repeatCount="indefinite"
                    />
                  </stop>
                  <stop offset="1" stop-color="#2EDCF9">
                    <animate
                      attributeName="stop-color"
                      values="#272C30; #3050FB; #41FFC2; #2EDCF9; #272c3000; #272C30;"
                      dur="4s"
                      repeatCount="indefinite"
                    />
                  </stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="line right">
            <svg
              width="55"
              height="99"
              viewBox="0 0 55 99"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 98H54V2.08616e-06"
                stroke="url(#paint0_linear_549_4459)"
              />

              <defs>
                <linearGradient
                  id="paint0_linear_549_4459"
                  x1="54"
                  y1="1.46031e-06"
                  x2="-2.89564"
                  y2="96.289"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#272C30" stop-opacity="0">
                    <animate
                      attributeName="stop-color"
                      values="#272c3000; #272C30; #3050FB; #41FFC2; #2EDCF9; #272c3000;"
                      dur="4s"
                      repeatCount="indefinite"
                    />
                  </stop>
                  <stop offset="0.2" stop-color="#272C30">
                    <animate
                      attributeName="stop-color"
                      values="#2EDCF9; #272c3000; #272C30; #3050FB; #41FFC2; #2EDCF9;"
                      dur="4s"
                      repeatCount="indefinite"
                    />
                  </stop>
                  <stop offset="0.5" stop-color="#3050FB">
                    <animate
                      attributeName="stop-color"
                      values="#41FFC2; #2EDCF9; #272c3000; #272C30; #3050FB; #41FFC2;"
                      dur="4s"
                      repeatCount="indefinite"
                    />
                  </stop>
                  <stop offset="0.8" stop-color="#41FFC2">
                    <animate
                      attributeName="stop-color"
                      values="#3050FB; #41FFC2; #2EDCF9; #272c3000; #272C30; #3050FB;"
                      dur="4s"
                      repeatCount="indefinite"
                    />
                  </stop>
                  <stop offset="1" stop-color="#2EDCF9">
                    <animate
                      attributeName="stop-color"
                      values="#272C30; #3050FB; #41FFC2; #2EDCF9; #272c3000; #272C30;"
                      dur="4s"
                      repeatCount="indefinite"
                    />
                  </stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="plus top left">
            <img src={plusImg} alt="plus" />
          </div>
          <div className="plus top right">
            <img src={plusImg} alt="plus" />
          </div>
          <label className="label">
            <Link to="#" className="btn btn-gradient btn-with-image">
              <img src={windowsImg} alt="windows" />
              Скачать
            </Link>
            <p className="label__text">Бесплатно</p>
          </label>
        </div>
      </article>
    </>
  );
}
export default SubIntro;
