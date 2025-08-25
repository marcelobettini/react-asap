import { useUser } from "../../context/UserContext"
import { useNavigate } from "react-router"
function Footer() {
    const { setUser } = useUser()

    const navigate = useNavigate()
    const handleLogout = () => {
        setUser(null)
        navigate('/')
    }
    return (
        <footer className="card" style={{ marginTop: '2rem', textAlign: 'center' }}>
            <p>
                Sistema de Soporte al Cliente
            </p>
            <p className="text-muted">
                © 2025 Todos los derechos reservados.
            </p>
            <button onClick={handleLogout}>Salir</button>
        </footer>
    )
}
export default Footer