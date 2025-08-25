import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type UserContextType = {
    user: string | null
    setUser: React.Dispatch<React.SetStateAction<string | null>>
    saveUserToLocalStorage: (user: string | null) => void
}
export const UserContext = createContext<UserContextType | null>(null)

export const useUser = () => {
    const context = useContext(UserContext)
    if (!context) {
        throw new Error("el hook 'useUser' debe ser utilizado dentro de un 'UserProvider'.")
    }
    return context
}

type Props = {
    children: ReactNode
}
export const UserProvider = ({ children }: Props) => {
    const [user, setUser] = useState<string | null>(null)
    const saveUserToLocalStorage = (user: string | null) => {
        localStorage.setItem("user", user || "")
    }

    // Cargar usuario guardado al inicializar (si existe)
    useEffect(() => {
        const savedUser = localStorage.getItem("user")
        if (savedUser) {
            setUser(savedUser)
            console.log("Usuario cargado desde localStorage:", savedUser)
        }
    }, [])

    const value = {
        user, setUser, saveUserToLocalStorage
    }
    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}