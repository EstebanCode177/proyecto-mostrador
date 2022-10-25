

const NuevoPassword = () => {
  return (
    <>
      <h1>Reestablece tu password</h1>

      <form 
              
          >
              
              <div>
                  <label 
                      htmlFor="password"
                  >Nuevo Password</label>
                  <input
                      id="password"
                      type="password"
                      // value="Guardar Nueva Contraseña"
                      placeholder="Escribe tu nueva contraseña"
                  />
              </div>


              <input 
                  type="submit"
                  value="Crear Cuenta"
              />
              
      </form>
        
    </>
  )
}

export default NuevoPassword