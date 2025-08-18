import { Header } from "./Header"
import { OtherStuff } from "./OtherStuff"
import Test from "./Test"

export const Container = () => {
  return (
    <section className="container line-pad">
      <h2>Container component</h2>
      <pre>Lvl 2: No need for user data</pre>
      <Header>
        <footer style={{ backgroundColor: 'wheat', padding: '1em' }}>
          <p>Hola Manu</p>
          <p>Esto lo vemos en el componente Header porque llega a través de la prop especial children</p>

          <hr />
          <Test />
        </footer>
      </Header>
      <OtherStuff />
    </section>
  )
}
