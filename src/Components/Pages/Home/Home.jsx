import React from 'react'
import './Home.css'

export const Home = () => {
  return (
    <>
      <div className='containerHome'> 
      <main>
        <div className="containerCube">
          <div className="cube-l">
            <div className="facet-b is-zero">
              <div className="reflection-be"></div>
            </div>
            <div className="facet-b is-1">
              <div className="reflection-be"></div>
            </div>
            <div className="facet-b is-2">
              <div className="reflection-be"></div>
            </div>
            <div className="facet-b is-3">
              <div className="reflection-be"></div>
            </div>
            <div className="facet-b is-4">
            </div>
            <div className="facet-b is-5">
              <div className="reflection-be"></div>
            </div>
          </div>
        </div>
      </main>
        <div className='containerAboutMe'>
          <h2>About Me</h2>
          <p>Tengo un tecnico en analisis y desarrollo del software, actualmente estoy realizando 
            el tecnologo. Tengo conocimientos en algunos lenguajes de programacion tales como 
            JavaScript,TypeScript, Java y C#. cuento con experiencia en 
            maquetacion y algunos conocimientos en base de datos
          </p>
        </div>
      </div>

    </>
    )
}
