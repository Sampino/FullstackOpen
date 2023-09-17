import { useState, useEffect } from 'react'
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import axios from 'axios';
import numberService from './services/numbers'
import Notification from './components/Notification';

const App = () => {
  const [persons, setPersons] = useState([])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('');
  const [newSearch, setNewSearch] = useState('');
  const [confirmMessage, setConfirmMessage] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    numberService
      .getAll()
      .then(initialNumbers => {
        setPersons(initialNumbers)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  const handleNameChange = (ev) => {
    setNewName(ev.target.value);
  }

  const handleNumberChange = (ev) => {
    setNewNumber(ev.target.value);
  }

  const handleSearchResult = (ev) => {
    const searchQuery = ev.target.value;
    setNewSearch(searchQuery);
    const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(searchQuery.toLowerCase()));
    setPersons(filteredPersons);
  }

  //Create person
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the name and the number already exists in the persons array
    const checkPerson = persons.find((person) =>
      person.name.toLowerCase() === newName.toLowerCase() &&
      person.number.toLowerCase() === newNumber.toLowerCase());

    // Check if the name and already exists in the persons array and the number is different
    const checkNumber = persons.find((person) =>
      person.name.toLowerCase() === newName.toLowerCase() &&
      person.number.toLowerCase() !== newNumber.toLowerCase());

    if (checkPerson) {
      alert(`${newName} is already added to the phonebook`);
    } else if (checkNumber) {
      if (window.confirm(`${newName} is already added to the phonebook, 
            replce the old number with the new one?`)) {

        const newPerson = {
          ...checkNumber,
          number: newNumber
        }

        numberService
          .update(checkNumber.id, newPerson)
          .then(newPerson => {
            setPersons(persons.map((person) =>
              person.id === newPerson.id ? newPerson : person
            ));

            setConfirmMessage(
              `${checkNumber.name}'s number updated correctly`
            )
            setTimeout(() => {
              setConfirmMessage(null);
            }, 2000)
          })
          .catch(error => {
            setErrorMessage(
              `Information of ${checkNumber.name} has already removed from the server`
            )
            setTimeout(() => {
              setErrorMessage(null);
            }, 2000)
          })
      }

    } else {
      const newPerson = {
        name: newName,
        number: newNumber,
      };

      numberService
        .create(newPerson)
        .then((initialNumbers) => {
          setPersons(persons.concat(initialNumbers));
          setConfirmMessage(
            `Added ${newName}`
          )
          setTimeout(() => {
            setConfirmMessage(null);
          }, 2000)
        })
        .catch(error => {

        })
    }

    setNewName('');
    setNewNumber('');
  };

  const handleDeletion = (id) => {
    console.log("Delete button clicked", id)
    numberService
      .remove(id)
      .then(returnedNote => {
        setPersons(persons.filter(person => person.id !== id && returnedNote))
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification errorMessage={errorMessage} confirmMessage={confirmMessage} />
      <div>
        <Filter label="Filter shown with"
          value={newSearch}
          onChange={handleSearchResult} />
      </div>

      <h2>Add a new</h2>
      <PersonForm
        onSubmit={handleSubmit}
        newName={newName}
        onChangeName={handleNameChange}
        newNumber={newNumber}
        onChangeNumber={handleNumberChange} />

      <h2>Numbers</h2>
      <Persons
        persons={persons}
        filter={newSearch}
        handleClick={handleDeletion} />
    </div>
  )
}

export default App