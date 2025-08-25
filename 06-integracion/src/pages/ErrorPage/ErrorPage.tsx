import { Link } from 'react-router'
import './ErrorPage.css'
function ErrorPage() {
    return (
        <div className='error-container'>
            <article className='error-card'>
                <h2>Error 404</h2>
                <p>Lo sentimos, la página que estás buscando no existe.</p>
                <Link to="/">Volver a la página de inicio</Link>
            </article>
        </div>
    )
}
export default ErrorPage