import React, { useState } from "react";
import styled from "styled-components";
import Header from "./Header";
import Deadman from "./DeadMan";
import Keyboard from "./Keyboard";
import DeadLetters from "./DeadLetters";
import Button from "./Button";
import TheWord from "./TheWord";
import GameOverModal from "./GameOverModal";

import { colors, contentWidth } from "./GlobalStyles";
import words from "../data/words.json";
import bodyParts from "../data/body-parts.json";

const initialGameState = { started: false, over: false, win: false };

const App = () => {
  const [game, setGame] = useState(initialGameState);
  const [word, setWord] = useState({ str: "", revealed: [] });
  const [usedLetters, setUsedLetters] = useState([]);
  const [wrongGuesses, setWrongGuesses] = useState([]);

  const showBodyPart = (part, color) => {
    document.querySelector(`.${part}`).style.stroke = color;
  };

  const getNewWord = () => {
    const newWord = words[Math.floor(Math.random() * words.length)];
    setWord({
      str: newWord,
      revealed: newWord.split("").map(() => ""),
    });
  };

  const handleEndGame = (win) => {
    // if revealed includes ""
    // you lose
    // else
    // you win
    console.log("game over");
    setGame({ ...game, over: true, win });
  };

  const handleGuess = (ltr) => {
    const ltrArray = word.str.split("");
    // add it to usedLetters
    setUsedLetters([...usedLetters, ltr]);
    // check if it's in the word
    if (ltrArray.includes(ltr)) {
      ltrArray.forEach((l, id) => {
        // if so, add to word.revealed
        if (l === ltr) {
          const newObj = { ...word };
          newObj.revealed[id] = ltr;
          setWord(newObj);
        }
      });
      if (word.revealed.filter((ltr) => ltr === "").length === 0) {
        handleEndGame(true);
      }
    } else {
      const newWrongGuesses = [...wrongGuesses];
      newWrongGuesses.push(ltr);
      console.log(newWrongGuesses);
      // show a bodypart
      if (newWrongGuesses.length <= bodyParts.length) {
        setWrongGuesses(newWrongGuesses);
        showBodyPart(bodyParts[newWrongGuesses.length - 1], colors.yellow);
      }
      if (newWrongGuesses.length === bodyParts.length) handleEndGame();
    }
  };

  const handleStart = () => {
    if (word.str.length < 1) getNewWord();
    setGame({ ...game, started: !game.started });
  };

  const handleReset = () => {
    getNewWord();
    setUsedLetters([]);
    setWrongGuesses([]);
    setGame({ ...initialGameState, started: true });
    // remove all body parts
    bodyParts.forEach((part) => showBodyPart(part, "transparent"));
  };

  return (
    <Wrapper>
      {game.over && (
        <GameOverModal word={word.str} game={game} handleReset={handleReset} />
      )}
      <Header />
      <Nav>
        <Button onClickFunc={handleStart}>
          {game.started ? "Pause" : word.str.length > 1 ? "Continue" : "Start"}
        </Button>
        <Button onClickFunc={handleReset} disabled={!game.started}>
          Reset
        </Button>
      </Nav>
      {game.started && (
        <>
          <Container>
            <Deadman />
            <RightColumn>
              <DeadLetters wrongGuesses={wrongGuesses} />
              <TheWord word={word} />
            </RightColumn>
          </Container>
          <Keyboard usedLetters={usedLetters} handleGuess={handleGuess} />
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${colors.blue};
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
  height: 100vh;
  padding: 0 0 64px 0;
`;
const Nav = styled.div`
  max-width: ${contentWidth};
  display: flex;
  height: 80px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  max-width: ${contentWidth};
  min-width: 320px;
  position: relative;
  padding: 20px 0;

  @media (min-width: 600px) {
    flex-direction: row;
  }
`;
const RightColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
`;

export default App;
