import type { ChangeEvent } from 'react'
import './Search.css'
type Props = {
    onSearch: (term: string) => void
}
function InstantSearch({ onSearch }: Props) {
    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value
        onSearch(query)
    }

    return (

        <form className="search-form">
            <label htmlFor="queryInput">Search</label>
            <input type="search" name="queryInput" id="queryInput" placeholder="pizza, steak, tiramisu..."
                onChange={handleSearch}
            />

        </form>
    )
}
export default InstantSearch
