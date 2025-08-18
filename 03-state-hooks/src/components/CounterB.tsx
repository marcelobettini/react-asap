import { useReducer, useState } from "react"
import { ACTIONS } from "../reducers/counterActions"
import { counterReducer } from "../reducers/counterReducer"
function CounterB({ initialCount = 0 }) {
    const [state, dispatch] = useReducer(counterReducer, { count: initialCount })
    const [amount, setAmount] = useState<number>(0)

    const addAmount = (amount: number) => {
        setAmount(amount)
    }


    return (
        <section className='container'>
            <h2>Counter con useReducer()</h2>
            <p style={{}}>Count: {state.count}</p>
            <input type="number" placeholder="add" onChange={(e) => addAmount(Number(e.target.value))} />
            <div className='btn-container'>
                <button onClick={() => dispatch({ type: ACTIONS.INCREMENTED_BY, payload: amount })}

                >Add By</button>
                <button onClick={() => dispatch({ type: ACTIONS.RESET })}

                >Reset</button>
                <button onClick={() => dispatch({ type: ACTIONS.DECREMENTED })}>-</button>
                <button onClick={() => dispatch({ type: ACTIONS.INCREMENTED })}>+</button>
            </div>
        </section>
    )
}
export default CounterB