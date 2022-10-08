import { getCounter } from './CounterRepository';
import { useAsync } from 'react-use';

const Counter = () => {
    const counter = useAsync(async () => {
        return await getCounter();
    }, []).value;

    return (
        <div>
            <span>Counter : {counter}</span>
        </div>
    );
}

export default Counter;