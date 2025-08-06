
import { useParams } from "react-router"
import type { Recipe } from "../types"
import './RecipeDetail.css'
import useFetch from "../hooks/useFetch"
export default function RecipeDetail() {
    const { id } = useParams()
    const { recipes, loading, error } = useFetch('/recipes/' + id)

    if (loading) return <h3>Loading...</h3>
    if (error) return <h3>{error}</h3>
    return (
        <>
            {JSON.stringify(recipes)}
            {recipes.length &&
                <div>
                    <p style={{ marginBottom: 0, fontStyle: 'italic', color: 'hotpink' }}>{recipes[0].mealType.join(", ")}</p>
                    <h2 style={{ marginTop: 0, color: 'pink' }}>{recipes[0].name}</h2>
                    <span>{recipes[0].cuisine} cuisine</span>
                    <hr style={{ marginTop: 0, border: 'none', height: '1px', backgroundColor: 'gray' }} />
                    <p>Rating: {recipes[0].rating} ⭐️</p>
                    <p>Difficulty: {recipes[0].difficulty}</p>
                    <p>Preparation Time: {recipes[0].prepTimeMinutes} ⌛️</p>
                    <p>Cooking Time: {recipes[0].cookTimeMinutes} ⏰</p>
                    <p>Servings: {recipes[0].servings} 🍽️</p>
                    {/* style img tag with aspect ratio to avoid layout shifting */}
                    <img src={recipes[0].image} alt={recipes[0].name} className='img-detail'
                    />
                    <hr style={{ border: 'none', height: '1px', backgroundColor: 'gray' }} />
                    <h3>Ingredients:</h3>
                    <ul>
                        {recipes[0].ingredients?.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>
                    <hr style={{ border: 'none', height: '1px', backgroundColor: 'gray' }} />
                    <h3>Instructions:</h3>
                    <ul>
                        {recipes[0].instructions?.map((step, index) => (
                            <li key={index}>{step}</li>
                        ))}
                    </ul>

                </div>

            }
        </>
    )
}
