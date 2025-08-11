import useFetch from '../hooks/useFetch'
import type { Recipe } from '../types'
import RecipeHeading from '../components/RecipeHeading'
import { Link } from 'react-router'
import useSEO from '../hooks/useSEO'
import './Recipes.css'
import Search from '../components/Search'
import { useState } from 'react'
import InstantSearch from '../components/InstantSearch'

export default function Recipes() {
    useSEO({ title: "Recipes | RecipesApp" })
    const { data, loading, error } = useFetch<Recipe[]>('/recipes')
    const [searchTerm, setSearchTerm] = useState("")


    const onSearch = (term: string) => {
        setSearchTerm((prev) => prev = term.toLowerCase().trim())
    }

    if (loading) return <h3>Loading...</h3>
    if (error) return <h3>{error}</h3>
    return (
        <>
            <p>{JSON.stringify(searchTerm)}</p>
            <h1>Recipes</h1>
            <Search onSearch={onSearch} />
            <InstantSearch onSearch={onSearch} />
            <ul className='recipe-list'>
                {data?.filter((r) => r.name.toLowerCase().includes(searchTerm))
                    .map((r: Recipe) => (
                        <div key={r.id}>
                            <Link to={'/recipes/' + r.id} >
                                <RecipeHeading recipe={r} />
                            </Link>
                        </div>
                    ))
                }
            </ul>

        </>
    )
}
