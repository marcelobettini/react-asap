
import './Login.css'
function Login({ setUser }) {

    const handleSubmit = (e: any) => {
        e.preventDefault()
        setUser(e.target.elements[0].value)
    }

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}
export default Login