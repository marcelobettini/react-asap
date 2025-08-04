import { NavLink } from "react-router"
const navStyle = ({ isActive }: { isActive: boolean }) => ({
    color: isActive ? 'tomato' : ''
})
export default function Nav() {
    return (
        <nav>
            <ul>
                <li><NavLink
                    style={navStyle}
                    to="/">Home</NavLink></li>
                <li><NavLink
                    style={navStyle}
                    to="/recipes">Recipes</NavLink> </li>
                <li><NavLink
                    style={navStyle}
                    to="/about">About</NavLink></li>
            </ul>
        </nav>
    )
}
