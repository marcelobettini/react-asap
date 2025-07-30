

export default function Counter() {
    console.log("Se monta Counter")
    let count: number = 10
    function handleAddOne(): number {
        console.log(count)
        return count += 1
    }
    return (
        <>
            <h2>
                {count}
            </h2 >
            <button onClick={handleAddOne}>Add One</button>
        </>
    )
}
