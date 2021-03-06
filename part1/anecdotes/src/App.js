import React, { useState } from 'react'

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
];

const Button = ({onClick,text}) => (<button onClick={onClick}> {text} </button>)

const randomAnecdote = () => Math.floor(Math.random() * anecdotes.length);

const handlePoints = ({votes}) => {
  const copy = [...{votes}];
  console.log(randomAnecdote())
  copy[randomAnecdote()] +=1;
}

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));

  return (
    <>
      <p>{anecdotes[selected]}</p>
      <p>has {votes} votes</p>
      <Button onClick={() => setVotes(handlePoints())} text="vote" /> 
      <Button onClick={() => setSelected(randomAnecdote())} text="next anecdote" />
    </>
  )
}

export default App;
