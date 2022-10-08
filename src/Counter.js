import { getCounter, increaseCounter } from './CounterRepository';
import { useState } from 'react';

const Counter = () => {
    const [counter, setCounter] = useState(0);

    const increaseCounterState = async ()  => {
        setCounter(await increaseCounter());
    }

    getCounter().then(value => setCounter(value));

    return (
        <div>
            <span>Counter : {counter}</span>
            <button onClick={increaseCounterState} > + </button>
        </div>
    );
}

export default Counter;