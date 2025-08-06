import { useEffect, useState } from "react"
import type { Recipe } from "../types"

const BASEURL = "https://67f95738094de2fe6ea13bdf.mockapi.io/api/v1/"
export default function useFetch(endpoint: string) {
    const [recipes, setRecipes] = useState<Recipe[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        setError(null)
        fetch(BASEURL + endpoint)
            .then((res) => {
                if (!res.ok) throw new Error("Respuesta no OK")
                return res.json()
            })
            .then((data) => {
                setRecipes(data)
            })
            .catch(err => {
                setError(err.message)
                console.error(err.message)
            })
            .finally(() => {
                setLoading(false)
            })
        return () => { console.log("Acá va la cleanup function") }
    }, [])
    return { recipes, loading, error }
}
