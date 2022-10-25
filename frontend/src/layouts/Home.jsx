import React from 'react'


const Home = () => {
  return (
    <div>
        <nav className="navegador">
        <main className="grilla">
          
            <div className="fondo">
            </div>
          
          {/* fondo azul */}
          {/* <div class="fondo"></div>*/}
          <div className="logonav">
            <img className="logo" src="logo" alt="logo" />
          </div>
          {/* usuarios */}
          <div className="usuarios">
            <button className="btn-inicio btn-inicioH">inicio</button>
            <button className="btn-registro btn-inicioH">registro</button>
          </div>
          {/* menu */}
          <div className="buscando">
            {/* buscando / en botones css */}
            <p className="btn-buscarPor">Buscar por</p>
            <button className="btn-reciente btn-buscarXh">reciente</button>
            <button className="btn-popular btn-buscarXh">popular</button>
            <button className="btn-enstock btn-buscarXh">en stock</button>
          </div>
          {/* buscador / en botones css*/}
          <div className="buscador">
            <p className="btn-queBusca">Que estas buscando?</p>
            <input id="input" type="text" />
            <button id="btn-explorar-map" type="boton"> <img  alt="logo" height={20} />Explorar</button>
          </div>
        </main>
      </nav>
    </div>
  )
}

export default Home