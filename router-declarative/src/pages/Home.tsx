import useSEO from "../hooks/useSEO"

export default function Home() {
    useSEO({ title: 'RecipesApp | Home' })
    return (
        <h1>Home</h1>
    )
}
