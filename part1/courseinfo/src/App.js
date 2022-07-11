import React from 'react';

//const Header = ({course}) => <h1>{course}</h1>
const Header = (props) => {
	return(
    <h1>{props.name}</h1>
	)
}

const Part = (props) => {
  return(
      <p>The part "{props.part.name}" has {props.part.exercises} exercices</p>
  )
}

const Content = (props) => {
  console.log(props);
  return(
    <>
      <Part part={props.parts[0]} />
      <Part part={props.parts[1]} />
      <Part part={props.parts[2]} />
    </>
  )
}

const Total = (props) => {
  let totalExercises = 
    props.parts[0].exercises 
    + props.parts[1].exercises 
    + props.parts[2].exercises;
  return (
    <>
      <p>The course has {totalExercises} exercises in total.</p>
    </>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
      name: 'Fundamentals of React',
      exercises: 10
      },
      {
      name: 'Using props to pass data',
      exercises: 7
      },
      {
      name: 'State of a component',
      exercises: 14
      }
    ]
  }

  return (
    <>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  )
}

export default App;