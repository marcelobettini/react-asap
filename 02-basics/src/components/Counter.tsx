
export default function Counter() {
    console.log("Se monta Counter")
    let count: number = 10
    function handleAddOne(): void {
        count += 1
        console.log(count)
    }
    return (
        <div>
            <h2>
                {count}
            </h2 >
            <button onClick={handleAddOne}>Add One</button>
        </div>
    )
}
