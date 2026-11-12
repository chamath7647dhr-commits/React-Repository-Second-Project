import { useState } from 'react';

function App() {
    const [counter, setCounter] = useState(0);

    function increaseCounterHandler() {
        setCounter(counter + 1);
    }

    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={increaseCounterHandler}>Click me</button>
        </div>
    );
}


export default App;