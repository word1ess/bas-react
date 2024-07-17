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
        }, i * 70);
      }
    };
  }

  let allowedCharacters = ["X", "$", "Y", "#", "?", "*", "0", "1", "+"];

  const linkCrambleRef = useRef(null);
  const eventHandler = createEventHandler();

  return (
    <Link to="#" ref={linkCrambleRef} onMouseOver={eventHandler}>
      {linkText}
    </Link>
  );
}

export default ScrambleLink;
