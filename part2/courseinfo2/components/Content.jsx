import { v4 as uuidv4 } from 'uuid';
import Part from './Part';

const Content = ({ contents }) => {
  const totalExercises = contents.reduce((acc, content) => acc + content.exercises, 0);

  return (
    <>
      <ul>
        {contents.map(content => (
          <Part key={uuidv4()} name={content.name} exercises={content.exercises} />
        ))}
      </ul>
      <h3>Total of {totalExercises} exercises</h3>
    </>
  )
}

export default Content