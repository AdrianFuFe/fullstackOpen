import React, { useState } from 'react'

const Header = ({ title }) => <h2>{title}</h2>

const Button = ({handleClick, text}) =>  <button onClick={handleClick}> {text} </button>

const Statistics = ({good, neutral, bad}) => {

  const total = good + neutral + bad;
  const average = (good - bad) / total;
  const positive = good / total * 100;

  if (total === 0) return <p>No feedback given</p>

  return (
    <>
      <table>
          <tbody>
            <Statistic text="good : " value={good}/>
            <Statistic text="neutral : " value={neutral}/>
            <Statistic text="bad : " value={bad}/>
            <Statistic text="total : " value={total}/>
            <Statistic text="average : " value={average}/>
            <Statistic text="positive : " value={positive + ' %'}/>
          </tbody>
      </table>
    </>
  )
}

const Statistic = ({text, value}) => {
  return (
    <>
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);



  return (
    <>
      <Header title='give feedback'/>
      <Button handleClick={() => setGood(good +1)} text="good" />
      <Button handleClick={() => setNeutral(neutral +1)} text="neutral" />
      <Button handleClick={() => setBad(bad +1)} text="bad" />
      <Header title='statistics'/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </>
  )
}

export default App;
