import { useState } from 'react';

export default function Button() {
    const [counter, setCounter] = useState(0);

    function onClick(){
        setCounter(prevCounter => prevCounter + 1)
    }

    return (
        <div>
            <button onClick={() => onClick()}>Click Clock</button>
            <p>Your Counter: {counter}</p>
        </div>
    )
}