import React from 'react'
import Testimonio from "./Testimonio";
import './Home.css'
import Servicios from './Servicios';


const Home = () => {
  return (
    <>
    <div className='contenedor-principal'>
    <article className='contenedor-titulo'>
      <h1 className='home_h1'>UPGRADE FIT GYM</h1>
      <h2 className='home_h2'> Ponte en forma con Upgrade Hub </h2>
    </article>
    </div>
    <div className='contenedor-testimonios'>
    <h3 className='home_h3'>Testimonio de nuestros atletas</h3>
    <div className='titulo principal'>
      <h1>Comienza a mejorar tu salud hoy..! </h1>
    </div>
    <div className='Servicios'></div>
    
    <Servicios
      nombre='Entreno Personalizado'
      imagen='entrePersonal'
      explicacion='Un servicio de entrenamiento personal online en el que recibirás la ayuda de un entrenador certificado.Una sesión introductoria en la que la aplicacion te guiará en tu plan y objetivos durante 60 minutos. Gracias a sus conocimientos y ayuda disfrutarás más de tu entrenamiento, conseguirás resultados más rápidos y reducirás el riesgo de lesiones'/>
   
<Servicios
      nombre='Soporte'
      imagen='Soporte'
      explicacion='La primera: "Personal Training Intro". Una sesión introductoria al entrenamiento personal en la que un entrenador personal cualificado te guiará en tu plan y objetivos.Gracias a sus conocimientos y ayuda disfrutarás más de tu entrenamiento, conseguirás resultados más rápidos y reducirás el riesgo de lesiones'/>
    


    <div className='testimonios'></div>
    <h1>Testimonio de nuestros atletas:</h1>
      
        <Testimonio
        nombre='Antonio'
        imagen='Antonio'
        edad='62 años'
        testimonio='Es una aplicación muy accesible y fácil de usar, no me llevo muy bien con la tecnología pero desde que comencé, siento que mis entrenos fueron mejorando y los resultados los puedo ver cada día a medida que voy avanzando.'
       />
      <Testimonio
        nombre='Ana'
        imagen='Ana'
        edad='40 años'
        testimonio='Entre el trabajo y mi vida familiar tengo poco tiempo de poder realizar ejercicio, es por esa razón que esto me ayudó muchísimo. Los entrenos son efectivos y el tiempo se aprovecha al máximo.' />
        <Testimonio
        nombre='Lucas'
        imagen='Lucas'
        edad='32 años'
        testimonio='Estudio programación y cada vez, el tiempo para poder ejercitarme es más escaso, por lo que la aplicación me ayudó a encontrar ese balance perfecto para combinar horas de estudio y ejercicio corporal, muy feliz con ella y se la recomiendo a todos.' />
    </div>
    </>
 
  )
}

export default Home
