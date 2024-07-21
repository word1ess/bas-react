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
    "А",
    "а",
    "Б",
    "б",
    "В",
    "в",
    "Г",
    "г",
    "Д",
    "д",
    "Е",
    "е",
    "Ё",
    "ё",
    "Ж",
    "ж",
    "З",
    "з",
    "И",
    "и",
    "Й",
    "й",
    "К",
    "к",
    "Л",
    "л",
    "М",
    "м",
    "Н",
    "н",
    "О",
    "о",
    "П",
    "п",
    "Р",
    "р",
    "С",
    "с",
    "Т",
    "т",
    "У",
    "у",
    "Ф",
    "ф",
    "Х",
    "х",
    "Ц",
    "ц",
    "Ч",
    "ч",
    "Ш",
    "ш",
    "Щ",
    "щ",
    "Ъ",
    "ъ",
    "Ы",
    "ы",
    "Ь",
    "ь",
    "Э",
    "э",
    "Ю",
    "ю",
    "Я",
    "я",
  ];

  const linkCrambleRef = useRef(null);
  const eventHandler = createEventHandler();

  return (
    <Link to="#" ref={linkCrambleRef} onMouseOver={eventHandler}>
      {linkText}
    </Link>
  );
}

export default ScrambleLink;
