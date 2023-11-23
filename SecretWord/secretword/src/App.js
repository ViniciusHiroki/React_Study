//CSS
import './App.css';

//React
import { useCallback, useEffect, useState } from 'react';

//data
import { wordlist } from './data/words';

//components
import StartScreen from './components/StartScreen';
import Game from './components/Game';
import GameOver from './components/GameOver';

const stages = [
  {id: 1, name: "start"},
  {id: 1, name: "game"},
  {id: 3, name: "end"},
]

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordlist);

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [life, setLife] = useState(3);
  const [score, setScore] = useState(0);

  const pickWordAndCategory = () => {
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];
    const word = words[category][Math.floor(Math.random() * words[category].length)];
  
    return {word, category}
  }

  const startGame = () => {
    const { word, category } = pickWordAndCategory();

    let wordLetters = word.split("");
    wordLetters = wordLetters.map((l) => l.toLowerCase());

    setPickedWord(word);
    setPickedCategory(category);
    setLetters(wordLetters);
    setGuessedLetters([]);
    setWrongLetters([]);
    setGameStage(stages[1].name)
  }

  const verifyLetter = (letter) => {
    letter = letter.toLowerCase();

    if(letters.includes(letter)){
      setGuessedLetters((actualGuessedLetters) => 
        [...actualGuessedLetters, letter]
      )
    } else {
      if(wrongLetters.includes(letter)){
        return
      } else {
        setWrongLetters((actualWrongLetters) => 
          [...actualWrongLetters, letter]
        )
        setLife(life-1)
      }
    }

    //setGameStage(stages[2].name);
  }

  const clearLetterStates = () => {
    setGuessedLetters([]);
    setWrongLetters([]);
  }

  useEffect(() => {
    if(life==0){
      clearLetterStates();
      setGameStage(stages[2].name);
    }
  }, [life]);

  useEffect(() => {
    let win = true;
    if(guessedLetters.length > 0){
      letters.forEach(l => {
        let haveLetter = false
        guessedLetters.forEach(gl => {
          if(gl == l){
            haveLetter = true;
          }
        });
        if(!haveLetter){
          win = false
        }
      });
      if(win){
        setScore(score+1)
      }
    } else {
      win = false
    }

    if(win){
      startGame();
    }
  }, [guessedLetters]);

  const retry = () => {
    setScore(0);
    setLife(3);
    setGameStage(stages[0].name);
  }

  return (
    <div className="App">
      {gameStage === 'start' && <StartScreen startGame={startGame}/> }
      {gameStage === 'game' && (
        <Game 
          verifyLetter={verifyLetter} 
          pickedWord={pickedWord} 
          pickedCategory={pickedCategory}
          letters={letters}
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          life={life}
          score={score}
        />
      )}
      {gameStage === 'end' && <GameOver retry={retry} score={score}/> }
    </div>
  );
}

export default App;
