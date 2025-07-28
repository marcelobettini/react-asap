import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from '../pages/Main'
import type { iClient } from './types'
import Client from './components/Client'
import clients from "./data/clients.json"
import Counter from './components/Counter'

function App() {
  console.log("se monta App")

  return (
    <>
      <Header />
      <Counter />
      {/* <ol>
        {
          clients.map(({ id, name, email, phone }: iClient) =>
            <Client key={id} name={name} email={email} phone={phone} />
          )}
      </ol> */}
      {/* <Main /> */}
      <Footer />
    </>
  )
}

export default App
