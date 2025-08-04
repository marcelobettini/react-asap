
import { useParams } from "react-router"
import { recipes } from '../data/recipes.json'
import type { Recipe } from "../types"
export default function RecipeDetail() {
    const { id } = useParams()
    const recipe: Recipe | undefined = recipes.find((r: Recipe) => r.id === Number(id))
    if (!recipe) {
        return <p>Caramba!</p>
    }
    return (
        <>

            <h2>Recipe Detail {id}</h2>
            <p>{recipe?.name}</p>

        </>
    )
}
