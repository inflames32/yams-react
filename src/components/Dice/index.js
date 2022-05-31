import { useState } from "react";
import "../../styles/Dice.scss";

const Dice = ({ faceNumber }) => {
  const [selectedDice, setSelectedDice] = useState([]);

  const numberOnFace = (faceNumber) => {
    if (faceNumber === 1) {
      return "one";
    }
    if (faceNumber === 2) {
      return "two";
    }
    if (faceNumber === 3) {
      return "three";
    }
    if (faceNumber === 4) {
      return "four";
    }
    if (faceNumber === 5) {
      return "five";
    }
    if (faceNumber === 6) {
      return "six";
    }
  };
  const handleDice = (e) => {
    console.log(e.target.id);

    setSelectedDice(...selectedDice, e.target.id);
    console.log("je selectionne le dés " + e.target.id);
    console.log(selectedDice);
  };

  return (
    <div>
      //des 1
      <div id="1" className="dice" onClick={handleDice}>
        <span>
          <img
            className="dice-img"
            src={`img/dices/dice-six-faces-${numberOnFace}.svg`}
            alt=""
          />
        </span>
      </div>
      //des 2
      <div id="2" className="dice" onClick={handleDice}>
        <span>
          <img
            className="dice-img"
            src={`img/dices/dice-six-faces-${numberOnFace}.svg`}
            alt=""
          />
        </span>
      </div>
      //des 3
      <div id="2" className="dice" onClick={handleDice}>
        <span>
          <img
            className="dice-img"
            src={`img/dices/dice-six-faces-${numberOnFace}.svg`}
            alt=""
          />
        </span>
      </div>
      // des 4
      <div id="2" className="dice" onClick={handleDice}>
        <span>
          <img
            className="dice-img"
            src={`img/dices/dice-six-faces-${numberOnFace}.svg`}
            alt=""
          />
        </span>
      </div>
      //des 5
      <div id="2" className="dice" onClick={handleDice}>
        <span>
          <img
            className="dice-img"
            src={`img/dices/dice-six-faces-${numberOnFace}.svg`}
            alt=""
          />
        </span>
      </div>
    </div>
  );
};
export default Dice;
