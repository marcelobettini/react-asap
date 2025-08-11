import type { FormEvent } from 'react'
import './Search.css'
type Props = {
    onSearch: (term: string) => void
}
function Search({ onSearch }: Props) {
    const handleSearch = (e: FormEvent) => {
        e.preventDefault()
        const form = e.target as HTMLFormElement
        const query = (form.queryInput as HTMLInputElement).value.trim()
        if (!query) return
        onSearch(query)
    }
    const handleReset = () => onSearch("")

    return (
        <form className="search-form" onSubmit={handleSearch}>
            <label htmlFor="queryInput">Search</label>
            <input type="search" name="queryInput" id="queryInput" placeholder="pizza, steak, tiramisu..." />
            <button type="submit">Go</button>
            <button type='reset'
                onClick={handleReset}>All</button>
        </form>
    )
}
export default Search
