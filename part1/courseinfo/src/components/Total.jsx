import React from "react"

const Total = (props) => {
  const totalExercises = props.course.parts.reduce((sum, part) => sum + part.exercises, 0);

  return (
    <>
      Number of exercises {totalExercises}
    </>
  )
}

export default Total