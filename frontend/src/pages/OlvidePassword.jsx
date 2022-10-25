import { Link } from 'react-router-dom'

const OlvidePassword = () => {
  return (
    <>
            <h1>Recupera tu acceso</h1>


            <form>
        

                <div>
                    <label 
                    >Email</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Email de Registro"
                    />
                </div>
                

                <input 
                    type="submit"
                    value="Enviar Instrucciones"
                    />
                
            </form>

            <nav>
                <Link to="/login">¿Ya tienes una cuenta? Inicia Sesión</Link>

                <Link to="/registrar">¿No tienes una cuenta? Regístrate</Link>
            </nav>

        </>
  )
}

export default OlvidePassword