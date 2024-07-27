import { useRef } from "react";
import { Link } from "react-router-dom";
function ScrambleLink({ linkText }) {
  function getRandomCharacter() {
    const randomIndex = Math.floor(Math.random() * allowedCharacters.length);
    return allowedCharacters[randomIndex];
  }
  function createEventHandler() {
    // 🏃‍♂️ Private variable: Keep track of the event in progress
    let isInProgress = false;

    // 👇 Event handler implementation
    return function handleHoverEvent(e) {
      if (isInProgress) {
        return;
      }

      const text = e.target.innerHTML;
      const randomizedText = text.split("").map(getRandomCharacter).join("");
      for (let i = 0; i < text.length; i++) {
        isInProgress = true;

        setTimeout(() => {
          const nextIndex = i + 1;
          e.target.innerHTML = `${text.substring(
            0,
            nextIndex
          )}${randomizedText.substring(nextIndex)}`;

          if (nextIndex === text.length) {
            isInProgress = false;
          }
        }, i * 40);
      }
    };
  }

  let allowedCharacters = [
    "а",

    "б",

    "в",

    "г",

    "д",

    "е",

    "ё",

    "ж",

    "з",

    "и",

    "й",

    "к",

    "л",

    "м",

    "н",

    "о",
    "п",

    "р",

    "с",

    "т",

    "у",

    "ф",

    "х",

    "ц",

    "ч",

    "ш",

    "щ",

    "ъ",

    "ы",
    "ь",

    "э",

    "ю",

    "я",
  ];

  const linkCrambleRef = useRef(null);
  const eventHandler = createEventHandler();
  const eventHandlerReverse = createEventHandler();
  return (
    <Link
      to="#"
      ref={linkCrambleRef}
      onMouseOver={eventHandler}
      onMouseLeave={eventHandler}
    >
      {linkText}
    </Link>
  );
}

export default ScrambleLink;
