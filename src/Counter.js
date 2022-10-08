import { getCounter } from './CounterRepository';
import { useState } from 'react';

const Counter = () => {
    const [counter, setCounter] = useState(0);
    getCounter().then(value => setCounter(value));

    return (
        <div>
            <span>Counter : {counter}</span>
        </div>
    );
}

export default Counter;