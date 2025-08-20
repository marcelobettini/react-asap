import type { ChangeEvent } from 'react'
import './Search.css'
type Props = {
    onSearch: (term: string) => void
}
function InstantSearch({ onSearch }: Props) {
    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value
        // if (!query) return 😉 ojo con el copy and paste
        //en el componente Search esta línea tiene sentido porque previene búsquedas si el input está vacío
        //pero en este componente es necesario leer el input vacío porque de esa forma se resetea el filtro
        //recuerden que si el filter recibe un string vacío, devuelve todos los elementos originales y eso es
        //lo deseado cuando se borra la barra de búsqueda.
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
