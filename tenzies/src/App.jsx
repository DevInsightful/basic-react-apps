import React from "react";
import "./App.css";
import Die from "./Die";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";
function App() {
  const { width, height } = useWindowSize();

  const genRandom = () => {
    var ArrOfrandom = new Array(10)
      .fill(0)
      .map(() => ({ value: Math.ceil(Math.random() * 6), isHold: false }));
    return ArrOfrandom;
  };
  const [dice, setDice] = React.useState(() => genRandom());
  const hanldeHold = (index) => {
    setDice((prev) =>
      prev.map((die, i) =>
        i === index ? { ...die, isHold: !die.isHold } : die
      )
    );
    
  };
  let checkWon = dice.every(
    (die) => die.value === dice[0].value && die.isHold === true
  );

  const [won, setWon] = React.useState(checkWon);
  // checkWon ? setWon(true):setWon(false)

  const Alldice = dice.map((die, id) => (
    <Die
      number={die.value}
      hanldeHold={() => hanldeHold(id)}
      isHold={die.isHold}
      key={id}
    />
  ));
  return won ? (
    <div>
      <button
        style={{
          height: "40px",
          border: "none",
          fontSize: "20px",
          backgroundColor: "#4830f7",
          color: "white",
          margin: "10px 0px",
          padding: "10px",
          borderRadius: "10px",
        }}
        onClick={() => {
          setDice(genRandom());
          setWon(false)
        }}
      >
        Start New Game
      </button>
      <Confetti width={width} height={height} />
    </div>
  ) : (
    <div>
      <div className="main">{Alldice}</div>
      <button
        style={{
          height: "40px",
          border: "none",
          fontSize: "20px",
          backgroundColor: "#4830f7",
          color: "white",
          margin: "10px 0px",
          padding: "10px",
          borderRadius: "10px",
        }}
        onClick={() => {
          if (!checkWon) {
            setDice((prev) =>
              prev.map((die) =>
                die.isHold
                  ? die
                  : { ...die, value: Math.ceil(Math.random() * 6) }
              )
            );
          } else {
            setWon(true);
          }
        }}
      >
        {checkWon ? "Play Again" : "Roll"}
      </button>
    </div>
  );
}

export default App;
