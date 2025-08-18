export type User = {
    name: string
    lastName: string
    email: string
}

export type UserContextType = {
    user: User
    setUser: (user: User) => void
    reset: () => void
}
