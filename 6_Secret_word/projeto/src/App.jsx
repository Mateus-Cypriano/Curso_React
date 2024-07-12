// CSS
import './App.css'

//componentes
import StartScreen from './components/StartScreen'
import Game from './components/Game';
import GameOver from './components/GameOver';

// React
import {useCallback, useEffect, useState} from "react";

// data
import {wordsList} from './data/words';

const stages = [
  {id: 1, name: 'start'},
  {id: 2, name: 'game'},
  {id: 3, name: 'end'},
];

const guessesQty = 3;
const myScore = 0;

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(guessesQty);
  const [score, setScore] = useState(myScore);

  const pickWordAndCategory = useCallback(() => {
    // escolhe uma categoria aleatoria
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];
    
    
    // escolhe uma palavra aleatoria
    const word = words[category][Math.floor(Math.random() * words[category].length)];
    

    return {word, category}; 
  }, [words]);

  // start game
  const startGame = useCallback(() => {
    //clear all letters
    clearLetterStates();
    
    // pick word and pick category
    const {word, category} = pickWordAndCategory();

    // create an array of letters
    let wordLetters = word.split("");
    wordLetters = wordLetters.map((l) => l.toLowerCase());

    // fill states
    setPickedWord(word);
    setPickedCategory(category);
    setLetters(wordLetters);

    setGameStage(stages[1].name);
  }, [pickWordAndCategory]);
  

  // processa a letra do input
  const verifyLetter = (letter) => {
    const normalizedLetter = letter.toLowerCase()

    // checa se a letra já foi utilizada
    if(guessedLetters.includes(normalizedLetter) ||
     wrongLetters.includes(normalizedLetter)
    ) {
      return;
    }

    // coloca uma letra advinhada ou remove uma das tentativas.
    if(letters.includes(normalizedLetter)) {
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        normalizedLetter
      ])
    } else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        normalizedLetter,
      ]);

      setGuesses((actualGuesses) => actualGuesses - 1);
    }

    
  };

  const clearLetterStates = () => {
    setGuessedLetters([]);
    setWrongLetters([]);
  };

  // checa as tentativas
  useEffect(() => {
  if (guesses <= 0) {
    // reset all states
    clearLetterStates()

      setGameStage(stages[2].name);
    }

  }, [guesses]);

  // checa a win condition
  useEffect(() => {

    const uniqueLetters = [...new Set(letters)]

    //win condition
    if(guessedLetters.length === uniqueLetters.length) {
      //add score
      setScore((actualScore) => (actualScore += 100));

      // reinicia o jogo com uma nova palavra
      startGame();
    }

  }, [guessedLetters, letters, startGame])

  // restart do jogo
  const retry = () => {
    setScore(0);
    setGuesses(guessesQty);
    setGameStage(stages[0].name);
  }

  return (
    <>
    {gameStage === 'start' && <StartScreen startGame={startGame}/>}
    {gameStage === 'game' && <Game 
    verifyLetter={verifyLetter} 
    pickedWord={pickedWord}
    pickedCategory={pickedCategory}
    letters={letters}
    guessedLetters={guessedLetters}
    wrongLetters={wrongLetters}
    guesses={guesses}
    score={score}
    />
    }
    {gameStage === 'end' && <GameOver retry={retry} score={score}/>}
     
    </>
  )
}

export default App
