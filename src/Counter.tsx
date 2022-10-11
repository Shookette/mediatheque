import React, { FC } from 'react';

import { getCounter, increaseCounter } from './CounterRepository';
import { useState } from 'react';

const Counter: FC = () => {
    const [counter, setCounter] = useState<number>(0);

    const increaseCounterState = async ()  => {
        setCounter(await increaseCounter());
    }

    getCounter().then((value: number) => setCounter(value));

    return (
        <div>
            <span>Counter : {counter}</span>
            <button onClick={increaseCounterState} > + </button>
        </div>
    );
}

export default Counter;