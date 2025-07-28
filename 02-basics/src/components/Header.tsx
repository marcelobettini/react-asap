import './Header.css'
import logo from '../assets/asap_consulting_sa_logo.jpeg'
function Header() {
    return (

        <header className='header'>
            <img src={logo} alt="Logo de ASAP Consulting" />
            <div>
                <h1>ASAP Consulting S.A.</h1>
                <p>Incorporación de talento de TI - Desarrollo de soluciones tecnológicas innovadoras</p>
            </div>
        </header>
    )
}

export default Header
