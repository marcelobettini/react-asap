import { useContext, type ReactNode } from "react"
import { UserContext } from "../context/UserContext"


interface Props {
  children: ReactNode
}

export const Header = ({ children }: Props) => {
  const { user } = useContext(UserContext)
  return (
    <header className="header line-pad">
      <h3>Header component</h3>
      <pre>Lvl 3: No need for user data</pre>
      <p>First Name: {user.name}</p>
      <p>Email: {user.email}</p>
      {children}
    </header>
  )
}
