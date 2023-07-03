import './index.scss';
import {useState} from "react";
import {questions} from "./questionsQuiz";
import Game from "./Game";
import Result from "./Result";

function App() {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);
  const question = questions[step]

  const onClickVariant = (index) => {
    if(questions[step].correct === index) {
      setCorrect(correct +1)
    }

    setStep(step + 1)
  }

  return (
    <div className="App">
      {step !== questions.length ? (
        <Game step={step} handleClick={onClickVariant} question={question}/>
        ) : (
          <Result correct={correct} questionResult={step}/>
        )
      }

    </div>
  );
}

export default App;
