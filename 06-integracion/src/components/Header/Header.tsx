import { NavLink } from "react-router"
import ThemeToggle from "../ThemeToggle/ThemeToggle"
const isActive = ({ isActive }: { isActive: boolean }): string => (isActive ? 'accent-color' : 'text-primary')
function Header() {


    return (
        <header className="card">
            <h1 className="text-primary" style={{ margin: '0 0 .6em 0', paddingBottom: '1rem', borderBottom: '1px solid var(--accent-color)' }}>Tablero de soporte</h1>
            <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <NavLink
                        className={isActive}
                        to={'/'}
                    >Home</NavLink>
                    <NavLink
                        className={isActive}
                        to="ticket">Tickets</NavLink>
                    <NavLink
                        className={isActive}
                        to='newticket'>Nuevo</NavLink>
                </div>

                <ThemeToggle />
            </nav>
        </header>
    )
}



export default Header