import { useState } from 'react'
import './App.css'
import DoubleCount from './DoubleCount'
import CounterA from './components/CounterA'
import CounterB from './components/CounterB'
function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <CounterA count={count} onAdd={() => setCount(count + 1)} setCount={setCount} />
      <DoubleCount value={count} />
      <CounterB initialCount={10} />
    </>

  )
}

export default App
