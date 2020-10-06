import React from "react";
import styled from "styled-components";
import LetterKey from "./LetterKey";

import { colors, contentWidth } from "./GlobalStyles";

import letters from "../data/letters.json";

const Keyboard = ({ handleGuess, usedLetters }) => (
  <Wrapper>
    {letters.map((letter) => (
      <LetterKey
        key={letter}
        letter={letter}
        isDisabled={usedLetters.includes(letter)}
        handleGuess={handleGuess}
      />
    ))}
  </Wrapper>
);

const Wrapper = styled.div`
  background: ${colors.yellow};
  border-radius: 4px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 auto;
  padding: 20px 12px;
  max-width: ${contentWidth};
  min-width: 320px;
`;

export default Keyboard;
