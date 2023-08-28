import { useState } from 'react'
import Button from './components/Button';
import Heading from './components/Heading';

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const anecdotesLength = anecdotes.length;
  const [selected, setSelected] = useState(0)
  const [anecdote, setAnecdote] = useState(anecdotes[selected])
  const [votes, setVotes] = useState(new Array(anecdotesLength).fill(0))

  const handleGeneration = () => {
    const randomIndex = Math.floor(Math.random() * anecdotesLength)
    setSelected(randomIndex);
    setAnecdote(anecdotes[randomIndex])
  }
  const handleVote = () => {
    const newVotes = [...votes]
    newVotes[selected] += 1
    setVotes(newVotes)
  }
  const indexMaxVotes = votes.indexOf(Math.max(...votes))

  return (
    <div>
      <Heading title="Anecdote of th day" />
      {anecdote} <br />
      <p>has {votes[selected]} votes</p> <br />
      <Button text="vote" handleClick={handleVote} />
      <Button text="next anecdote" handleClick={handleGeneration} />
      <Heading title="Anecdote with most votes" /><br />
      {anecdotes[indexMaxVotes]}<br />
      <p>has {votes[indexMaxVotes]} votes</p> <br />
    </div>
  )
}

export default App