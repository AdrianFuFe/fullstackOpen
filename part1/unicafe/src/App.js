import React, { useState } from 'react'

const Header = ({ title }) => <h2>{title}</h2>

const Button = ({handleClick, text}) =>  <button onClick={handleClick}> {text} </button>

const Statistics = (props) => {
  if (props.total === 0) return <p>No feedback given</p>

  return (
    <>
      <ul>
        <li>good : {props.good}</li>
        <li>neutral : {props.neutral}</li>
        <li>bad : {props.bad}</li>
        <li>total : {props.total}</li>
        <li>average : {props.average}</li>
        <li>positive : {props.positive}</li>
      </ul>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = good + neutral + bad;
  const average = (good - bad) / total;
  const positive = good / total * 100;

  return (
    <>
      <Header title='give feedback'/>
      <Button handleClick={() => setGood(good +1)} text="good" />
      <Button handleClick={() => setNeutral(neutral +1)} text="neutral" />
      <Button handleClick={() => setBad(bad +1)} text="bad" />
      <Header title='statistics'/>
      <Statistics good={good} neutral={neutral} bad={bad} total={total} average={average} positive={positive}/>
    </>
  )
}

export default App;
