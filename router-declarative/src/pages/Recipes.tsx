import useFetch from '../hooks/useFetch'
import type { Recipe } from '../types'
import RecipeHeading from '../components/RecipeHeading'
import { Link } from 'react-router'

export default function Recipes() {
    const { recipes, loading, error } = useFetch('recipes')
    if (loading) return <h3>Loading...</h3>
    if (error) return <h3>{error}</h3>
    return (
        <>
            <h1>Recipes</h1>
            <ul>
                {recipes.length &&
                    (
                        recipes.map((r: Recipe) => (
                            <div key={r.id}>
                                <Link to={'/recipes/' + r.id} >
                                    <RecipeHeading recipe={r} />
                                </Link>
                            </div>
                        ))
                    )
                }
            </ul>

        </>
    )
}
