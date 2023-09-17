import { v4 as uuidv4 } from 'uuid';
import Person from './Person';
import Button from './Button';

const Persons = ({ persons, handleClick }) => {

  return (
    <>
      {persons.map(person => (
        <div key={uuidv4()}>
          <Person
            name={person.name}
            number={person.number}
          />

          <Button label="Delete"
            handleClick={() => {
              if (window.confirm(`Are you sure of deleting ${person.name}?`)) {
                handleClick(person.id)
              }
            }
            }
          />
        </div>
      ))}
    </>
  )
}

export default Persons;