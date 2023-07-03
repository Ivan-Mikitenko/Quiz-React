import {questions} from "./questionsQuiz";

function Game({question, handleClick, step}) {
  const percentage = Math.round(step / questions.length * 100)

  console.log()

  return <>
    <div className="progress">
      <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
    </div>
    <h1>{question.title}</h1>
    <ul>
      {question.variants.map((item, indexAnswer) =>(
        <li onClick={() => handleClick(indexAnswer)} key={indexAnswer}>{item}</li>
      ))}
    </ul>
  </>;
}

export default Game;