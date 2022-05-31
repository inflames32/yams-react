import "../../styles/Homepage.scss";
import { useState, useEffect } from "react";

const Homepage = () => {
  const [dices, setDices] = useState([
    { id: 1, value: "", name: "dice1", keep: false },
    { id: 2, value: "", name: "dice2", keep: false },
    { id: 3, value: "", name: "dice3", keep: false },
    { id: 4, value: "", name: "dice4", keep: false },
    { id: 5, value: "", name: "dice5", keep: false },
  ]);
  const [dicesToKeep, setDiceToKeep] = useState([]);
  const [gameIsStart, setGameIsStart] = useState(false);
  const [counterOfThrow, setCounterOfThrow] = useState(2000);

  //fonction pour générer un nombre aléatroire entre 1 et 6
  const lancerLesDes = () => {
    // enléve  1 au coup possibles
    setCounterOfThrow(counterOfThrow - 1);
    if (counterOfThrow === 0) {
      let btnlancer = document.getElementsByClassName(".btn-lancer");
      btnlancer.setAttribute("disabled");
      console.log("vous n'avez plus de lancer disponibles");
      return;
    } else {
      // pour chaque des, lancez la fonction lancerDes
      const resultDice1 = Math.round(Math.random() * (6 - 1) + 1);
      const resultDice2 = Math.round(Math.random() * (6 - 1) + 1);
      const resultDice3 = Math.round(Math.random() * (6 - 1) + 1);
      const resultDice4 = Math.round(Math.random() * (6 - 1) + 1);
      const resultDice5 = Math.round(Math.random() * (6 - 1) + 1);
      setDices([
        { ...dices[0], id: 1, value: resultDice1 },
        { ...dices[1], id: 2, value: resultDice2 },
        { ...dices[2], id: 3, value: resultDice3 },
        { ...dices[3], id: 4, value: resultDice4 },
        { ...dices[4], id: 5, value: resultDice5 },
      ]);

      /* return resultDice1, resultDice2, resultDice3, resultDice4, resultDice5; */
    }
  };

  // selectionner le/les des à garder avant relance
  const handleDice = (e) => {
    const diceId = e.target.id;

    dices.forEach((dice) => {
      if (dice.keep === "false") {
        setDices(dice.keep === "true");
        setDiceToKeep([...dicesToKeep], diceId);
      }
    });

    dicesToKeep.push(diceId);
    console.log(dicesToKeep);
  };

  return (
    <div className="homepage">
      {gameIsStart && (
        <div className="dices-container">
          {dices.map((dice) => {
            return (
              <div
                id={dice.id}
                value={dice.value}
                name={dice.name}
                onClick={handleDice}
                /* className={"dice" + (dice.keep === false ? "" : " select")} */
                className="dice"
              >
                <img
                  id={dice.id}
                  className="dice-img"
                  src={dice.value ? `img/dices/${dice.value}.svg` : ""}
                />
              </div>
            );
          })}
        </div>
      )}

      {!gameIsStart && (
        <div className="btn-container">
          <button
            onClick={(e) => {
              setGameIsStart(true);
            }}
            className="btn-start"
          >
            Nouvelle partie!
          </button>
        </div>
      )}

      {counterOfThrow < 1 && (
        <div className="btn">
          <div>
            <span className="text_rethrow">
              RELANCE DISPONIBLE : {counterOfThrow}
            </span>
          </div>
          <button className="btn-end_of_turn">Fin du tour</button>
        </div>
      )}

      {counterOfThrow > 0 && (
        <div className="btn">
          {gameIsStart && (
            <div>
              <span className="text_rethrow">
                RELANCE
                {counterOfThrow > 1 ? "S" : ""} DISPONIBLE
                {counterOfThrow > 1 ? "S" : ""} : {counterOfThrow}
              </span>

              <button className="btn-lancer" onClick={lancerLesDes}>
                Relancer
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export const newDice = () => {
  return (
    <div id="1" className="dice">
      <span>
        <img className="dice-img" src={`img/dices/6.svg`} alt="" />
      </span>
    </div>
  );
};

export default Homepage;
