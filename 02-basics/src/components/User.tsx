interface Props {
    name: string,
    email?: string
}

export default function User({ name, email }: Props) {

    return (
        <div>
            <p>Hola {name}.</p>
            <p>Email: {email || "no tiene"}. </p>
        </div>
    )
}
