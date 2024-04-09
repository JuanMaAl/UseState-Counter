import { useState } from "react";

const Counter = ()=> {
    const [count, Setcount] = useState(0);
    function increaseCount(){
        Setcount(count+1);
    }
    function decreaseCount(){
        Setcount(count-1);
    }

    return(
        <div className="Counter">
            <h2>Contador</h2>
            <button onClick={increaseCount}>Incrementar</button>
            <button onClick={decreaseCount}>Decrementar</button>
            <p>El valor del contador es: {count}</p>
        </div>
    )
}

export default Counter;