import React from 'react'
import Testimonio from "./Testimonio";
import './Home.css'


const Home = () => {
  return (

    <div className='contenedor-principal'>
    <h1>Testimonio de nuestros atletas:</h1>
      
        <Testimonio
        nombre='Antonio'
        imagen='Antonio'
        edad='62 años'
        testimonio='Es una aplicacion muy accesible y facil de usar, no me llevo muy bien con la tecnologia pero desde que comence, siento que mis entrenos fueron mejorando y los resultados los puedo ver cada dia a media que voy avanzando'
       /> 
      <Testimonio
        nombre='Ana'
        imagen='Ana'
        edad='40 años'
        testimonio='Entre el trabajo y mi vida familiar, tengo poco tiempo de poder realizar ejercicio, es por esa razon que esto me ayudo muchisimo ya que los entrenos son efectivos y el tiempo se aprovecha al maximo' /> 
        <Testimonio
        nombre='Lucas'
        imagen='Lucas'
        edad='32 años'
        testimonio='Estudio programacion y cada vez el tiempo para poder ejercitarme es mas escaso, por lo que la aplicacion me ayudo a encontrar ese balance perfecto para combinar horas de estudio y ejercicio corporal, muy feliz con ella y se los recomiendo a todos' /> 
    </div>
 
  )
}

export default Home
