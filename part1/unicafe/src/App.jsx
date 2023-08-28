import { useState } from 'react'
import Heading from './components/Heading';
import Button
  from './components/Button';
import Statistics from './components/Statistics';
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const feedbacks = [good, neutral, bad];

  const handleGood = () => {
    setGood(good + 1)
  }
  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }
  const handleBad = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <Heading title="Give feedback" />
      <Button text="Good" handleClick={handleGood} />
      <Button text="Neutral" handleClick={handleNeutral} />
      <Button text="Bad" handleClick={handleBad} />

      <Heading title="Statistics" />
      {(good || neutral || bad) !== 0 ? (
        <Statistics feedbacks={feedbacks} />
      ) : (
        <p>No feedback given</p>
      )}

    </div>
  )
}

export default App