import "./App.css"
import { Layout } from "./components/Layout"

function App() {
  return (
    <>
      <p style={{ padding: ".6rem", fontSize: "18px" }}>
        Los datos del usuario viven en App. Los necesitamos en el componente
        UserInfo, que se renderiza en un nivel interior.
        <br />
        <b>
          <code>App/Layout/Container/OtherStuff/UserInfo</code>
        </b>
        <br />
        Con useContext no necesitamos pasar props para que los componentes
        accedan a los datos
      </p>
      <Layout />
    </>


  )
}

export default App
