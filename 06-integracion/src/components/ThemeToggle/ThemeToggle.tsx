import './ThemeToggle.css'
import { useTheme } from '../../context/ThemeContext'
function ThemeToggle() {
    const { theme, toggleTheme, isDark } = useTheme()

    return (
        <div>
            <button
                onClick={toggleTheme}
                className={`theme-toggle ${isDark ? 'dark' : 'light'}`}
                aria-label={`Cambiar a modo ${isDark ? 'claro' : 'oscuro'}`}
                title={`Modo ${theme}`}
            >
                <div className="toggle-track">
                    <div className="toggle-thumb">
                        <span className="toggle-icon">
                            {isDark ? '🌙' : '☀️'}
                        </span>
                    </div>
                </div>
            </button>
        </div>
    )
}
export default ThemeToggle