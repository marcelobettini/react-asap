import { useTheme } from "../../context/ThemeContext"
function MainContent() {
    const { theme } = useTheme()

    return (
        <main>
            <div className="card" style={{ marginBottom: '1rem' }}>
                <h2 className="text-primary">Contenido Principal</h2>
                <p className="text-secondary">
                    Este es un ejemplo de contenido que se adapta al tema {theme}.
                </p>
                <button className="btn btn-primary">
                    Botón de Ejemplo
                </button>
            </div>

            <div className="card">
                <h3 className="text-primary">Formulario de Ejemplo</h3>
                <form onSubmit={(e) => e.preventDefault()}>
                    <div style={{ marginBottom: '1rem' }}>
                        <label className="text-primary" style={{ display: 'block', marginBottom: '0.5rem' }}>
                            Nombre:
                        </label>
                        <input type="text" placeholder="Ingresa tu nombre" />
                    </div>
                    <div style={{ marginBottom: '1rem' }}>
                        <label className="text-primary" style={{ display: 'block', marginBottom: '0.5rem' }}>
                            Mensaje:
                        </label>
                        <textarea placeholder="Escribe tu mensaje" rows={4}></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Enviar
                    </button>
                </form>
            </div>
        </main>
    )
}

export default MainContent