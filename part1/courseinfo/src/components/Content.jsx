import React from "react"
import Part from "./Part"

const Content = (props) => {
  return (
    <>
      {props.course.parts.map((part, index) => (
        <Part key={index} part={part.name} exercise={part.exercises} />
      ))}
    </>
  )
}

export default Content