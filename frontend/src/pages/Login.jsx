import { Link,  useNavigate } from 'react-router-dom'

const Login = () => {



  return (
    <>
        <h1>Inicia sesión</h1>
        
        <form >
            <div>
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    placeholder="Email de Registro"
                />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    type="password"
                    placeholder="Password de Registro"
                />
            </div>

            <input 
                type="submit"
                value="Iniciar Sesión"
            />
            
        </form>

        <nav>
            <Link 
                to="/registrar"
            >¿No tienes una cuenta? Regístrate</Link>

            <Link 
                to="/olvide-password"
            >Olvide Mi Password</Link>
        </nav>
    
    </>
  )
}

export default Login