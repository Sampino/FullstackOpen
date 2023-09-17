import { useState, useEffect } from 'react'
import './App.css'
import countriesService from './services/countries.js'
import Filter from './components/Filter'
import List from './components/List'
import Message from './components/Message'

function App() {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')
  const [showMessage, setShowMessage] = useState(false)
  const [filterList, setFilterList] = useState([])

  useEffect(() => {
    countriesService
      .getAll()
      .then(response => {
        setCountries(response)
      })
  }, [])

  const onChangeFilter = (ev) => {
    const newFilter = ev.target.value
    setFilter(newFilter)

    const renderedList = countries.filter(item =>
      item.name.common.toLowerCase().includes(newFilter.toLowerCase())
    )

    if (newFilter === '') {
      setShowMessage(false)
      return setFilterList([])
    }

    if (renderedList.length > 10) {
      setShowMessage(true)
    } else {
      setFilterList(() => renderedList)
      setShowMessage(false)
    }

  }

  return (
    <>
      <Filter
        label="Find countries"
        filter={filter}
        onChangeFilter={onChangeFilter}
      />
      {showMessage ? (
        <Message message="Too many matches, specify another filter please" />
      ) : (
        <List list={filterList} />
      )}
    </>
  );
}

export default App
