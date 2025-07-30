interface Props {
    count: number
    onAdd: () => void
    setCount: (n: number) => void
}
function CounterA({ count, onAdd, setCount }: Props) {
    return (
        <section className='container'>
            <h2>Counter con useState()</h2>
            <p style={{ color: count === 2 ? "limegreen" : "hotpink" }}>Count: {count}</p>
            <div className='btn-container'>
                <button
                    disabled={count === 10}
                    onClick={() => setCount(0)}>Reset</button>
                <button onClick={() => setCount(count - 1)}>-</button>
                <button onClick={onAdd}>+</button>
            </div>
        </section>
    )
}
export default CounterA