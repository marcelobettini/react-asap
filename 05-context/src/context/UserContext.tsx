import { createContext, useState, type ReactNode } from "react"
import type { User, UserContextType } from "../types"


const initValue: User = {
    name: "Marcelo Eduardo",
    lastName: "Bettini Michiels",
    email: "marcelobettini@yahoo.com.ar",
}

export const UserContext = createContext<UserContextType>({
    user: initValue,
    setUser: () => { },
    reset: () => { }
})


export const UserContextProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User>(initValue)
    const reset = () => setUser(initValue)
    return (
        <UserContext.Provider value={{ user, setUser, reset }}>
            {children}
        </UserContext.Provider>
    )

}

