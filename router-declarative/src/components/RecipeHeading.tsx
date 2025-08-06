import type { Recipe } from "../types"
import './RecipeHeading.css'
export default function RecipeHeading({ recipe }: { recipe: Recipe }) {
    return (

        <p>{recipe.name} {recipe.rating} ⭐️</p>


    )
}
