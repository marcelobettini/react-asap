type Props = {
    value: number
}

export default function DoubleCount({ value }: Props) {
    console.log("Renders DoubleCount")
    return (
        <section>
            <h2>Multiply by 2</h2>
            <p>{value * 2}</p>
        </section>
    )
}
