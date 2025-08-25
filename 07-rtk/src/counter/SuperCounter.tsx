import { useAppDispatch, useAppSelector } from "../app/hooks"
import { useState } from "react"

import {
    incremented,
    decremented,
    reset,
    incrementedByStep,
    incrementedAsync


} from "../counter/counterSlice"


function SuperCounter() {
    const [incrementStep, setIncrementStep] = useState<number>(0)
    const subtract = () => dispatch(decremented())
    const resetValue = () => dispatch(reset())

    const count = useAppSelector((state) => state.counter.value)
    const dispatch = useAppDispatch()
    return (
        <>
            <p className="count">{count}</p>
            <button
                onClick={() => dispatch(incremented())}
            >Increment + 1</button>
            <button
                onClick={subtract}
            >Decrement - 1</button>

            <button
                onClick={resetValue}
            >Reset</button>
            <br />
            <input type="number" value={incrementStep} onChange={(e) => setIncrementStep(Number(e.target.value))} />
            <br />
            <button
                onClick={() => dispatch(incrementedByStep(incrementStep))}
            >Increment by step</button>
            <button
                onClick={() => dispatch(incrementedAsync(incrementStep))}>Increment Async</button >


        </>
    )
}
export default SuperCounter