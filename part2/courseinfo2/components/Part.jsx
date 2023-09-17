
const Part = ({ name, exercises }) => {
  return (
    <li style={{ listStyle: "none" }}>
      <h3>{name} {exercises}</h3>
    </li>
  )
}

export default Part