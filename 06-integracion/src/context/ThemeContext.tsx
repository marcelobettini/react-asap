import { createContext, useContext, useState, useEffect, type SetStateAction, type Dispatch, type ReactNode } from "react"

type ThemeContextType = {
    theme: string
    setTheme: Dispatch<SetStateAction<string>>
    toggleTheme: () => void
    isDark: boolean
}

const ThemeContext = createContext<ThemeContextType | null>(null)

export const useTheme = () => {
    const context = useContext(ThemeContext)
    if (!context) {
        throw new Error("El hook 'useTheme' debe ser utilizado dentro de un 'ThemeProvider'")
    }
    return context
}
type Props = {
    children: ReactNode
}

export const ThemeProvider = ({ children }: Props) => {
    const [theme, setTheme] = useState("light")
    // Al inicializar, si existe un tema guardado en el navegador, lo cargamos
    useEffect(() => {
        const savedTheme = window.localStorage.getItem("theme")
        if (savedTheme) {
            setTheme(savedTheme)
        } else {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
            const initialTheme = prefersDark ? 'dark' : 'light'
            setTheme(initialTheme)
        }
    }, [])

    useEffect(() => {
        document.body.className = theme
    }, [theme])

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light'
        setTheme(newTheme)
        window.localStorage.setItem("theme", newTheme)
    }
    const value = {
        theme,
        setTheme,
        toggleTheme,
        isDark: theme === 'dark'
    }

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}

