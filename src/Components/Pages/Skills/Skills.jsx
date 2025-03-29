import React from 'react'
import JavaScript from '../../../assets/js.png'
import TypeScript from '../../../assets/typescript.png'
import Java from '../../../assets/java.png'
import C from '../../../assets/C.png'
import atlas from '../../../assets/atlas.png'




import './Skills.css' 

export const Skills = () => {
  return(
    <>
    <main>
    <h2>Lenguajes</h2>
    <hr />
    <div className="containerExperience">
      <div className="containerLanguage">
        <div className="grid-container">
          <div className="card">
            <img src={JavaScript} className="imgLg" alt="JavaScript" />
            <p>JavaScript</p>
            <progress value="70" max="100"></progress>
          </div>

          <div className="card">
            <img src={TypeScript} className="imgLg" alt="JavaScript" />
            <p>TypeScript</p>
            <progress value="60" max="100"></progress>
          </div>

          <div className="card">
            <img src={Java} className="imgLg" alt="JavaScript" />
            <p>Java</p>
            <progress value="80" max="100"></progress>
          </div>

          <div className="card">
            <img src={C} className="imgLg" alt="JavaScript" />
            <p>C#</p>
            <progress className='C' value="25" max="100"></progress>
          </div>
        </div>
      </div>
    </div>
    <h2>Proyectos</h2>
      <hr />
    <div className="containerProyect">
      
      <div className="imgContainer">
        <img src={atlas} className="imgAtlas"  alt="Atlas Project" />
      </div>
      <div className="textContainer">
        <h2>Atlas</h2>
        <h5>Proyecto de maquetacion</h5>
        <a className="LinkAtlas" href="https://github.com/JaramilloT/Atlas_proyecto.git">Ir al proyecto</a>
      </div>

      
    </div>


    </main>
    </>
  )
}