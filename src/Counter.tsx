import React, { FC, useState } from 'react'

import { getCounter, increaseCounter } from './hooks/CounterRepository'

const Counter: FC = () => {
  const [counter, setCounter] = useState<number>(0)

  const increaseCounterState: () => Promise<void> = async () => {
    setCounter(await increaseCounter())
  }

  getCounter().then((value: number) => setCounter(value)).catch((error) => console.log(error))

  return (
    <div>
      <span>Counter : {counter}</span>
      <button onClick={() => { void increaseCounterState() }} > + </button>
    </div>
  )
}

export default Counter
