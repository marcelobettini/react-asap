// import { recipes } from '../data/recipes.json'
import type { Recipe } from '../types'
export default function Recipes() {
    const recipes: Recipe[] = []
    fetch('https://67f95738094de2fe6ea13bdf.mockapi.io/api/v1/recipes')
        .then((raw) => raw.json())
        .then((data) => {
            console.log(recipes)
            recipes.push(data)
        })
    console.log("sigo con el componente")


    return (
        <>
            <h1>Recipes</h1>
            <ul>
                {recipes.length ?
                    (
                        recipes.map((r: Recipe) => <li key={r.id}>{r.name}</li>)
                    ) :
                    (
                        <h3>No hay recetas</h3>
                    )
                }
            </ul>
        </>
    )
}
