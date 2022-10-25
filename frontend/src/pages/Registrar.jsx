import { useState } from 'react';
import {Link} from 'react-router-dom';
import Alerta from '../components/Alerta';
import axios from 'axios';

const Registrar = () => {
    const [ nombre, setNombre ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ repetirPassword, setRepetirPassword ] = useState('');
    const [ alerta, setAlerta ] = useState({})

    const handleSubmit = async e => {
        e.preventDefault();

        if([nombre, email, password, repetirPassword].includes('')){
            setAlerta({
                msg: 'Todos los campos son obligatorios',
                error: true
            })
            return
        }
        if(password !== repetirPassword ) {
            setAlerta({
                msg: 'Los password no son iguales',
                error: true
            })
            return
        }

        if(password.length < 6 ) {
            setAlerta({
                msg: 'El Password es muy corto, agrega minimo 6 caracteres',
                error: true
            })
            return
        }

        setAlerta({})

        // Crear el usuario en la API
        try {
            const { data } = await axios.post("http://localhost:4000/api/usuarios", 
            {nombre, email, password} )
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }


    const { msg } = alerta

  return (
    <>
        <h1>Crea tu Cuenta</h1>

        { msg && <Alerta alerta={alerta} /> }

        <form onSubmit={handleSubmit}>
            <div>
                <label 
                    htmlFor="nombre"
                >Nombre</label>
                <input
                    id="nombre"
                    type="text"
                    placeholder="Tu Nombre"
                    value={nombre}
                    onChange={e => setNombre(e.target.value)}
                />
            </div>

            <div>
                <label 
                    htmlFor="email"
                >Email</label>
                <input
                    id="email"
                    type="email"
                    placeholder="Email de Registro"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </div>
            <div>
                <label 
                    htmlFor="password"
                >Password</label>
                <input
                    id="password"
                    type="password"
                    placeholder="Password de Registro"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
            </div>

            <div>
                <label 
                    htmlFor="password2"
                >Repetir Password</label>
                <input
                    id="password2"
                    type="password"
                    placeholder="Repetir tu Password"
                    value={repetirPassword}
                    onChange={e => setRepetirPassword(e.target.value)}
                />
            </div>

            <input 
                type="submit"
                value="Crear Cuenta"
            />
            
        </form>

        <nav>
            <Link 
                to="/login"
            >¿Ya tienes una cuenta? Inicia Sesión</Link>

            <Link 
                to="/olvide-password"
            >Olvide Mi Password</Link>
        </nav>

    </>
  )
}

export default Registrar