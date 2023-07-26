//Aqúi importo el Nav
//Importo los styles

import pic from "../../assets/images/450_1000.jpg"
import cubofit from "../../assets/images/gimnasios_post_covid.jpg"
import "./About.css"

function About() {
        return (
        <main className='main_about'>
        <div >
        <h1>UpgradeFit Gym</h1>
        <img className="about_pic" src={pic} alt="Gym" />
           <p>Nuestra historia</p>
           <section>Somos una empresa que nace en 2013 con una vocación muy marcada dentro del sector del fitness, utilizar la experiencia adquirida gestionando grandes proyectos deportivos por parte de un joven equipo de profesionales para crear instalaciones acordes a las nuevas preferencias y hábitos de los usuarios. Todo el trabajo de los primeros años se centró en evolucionar cada variable relacionada con el precio, la propuesta de valor y la experiencia del socio.</section>
           <aside>
            <img src={cubofit} alt="Gimnasio"/>
           </aside>
        </div>
        <div>
            <h3>Lo que sea</h3>
            <p>El trabajo de análisis y definición de un nuevo modelo de gestión de espacios deportivos se pone a prueba con la puesta en marcha en Madrid de nuestro primer club. El 7 de enero de 2014 abrimos las puertas de Smartfit Coslada, dando sentido a muchos meses de análisis y trabajos previos para crear un modelo de gestión que poder replicar con éxito en otras ubicaciones. Las proyecciones marcadas para el primer centro se cumplieron según lo esperado y nos permitieron de esta forma ajustar los procedimientos y disponer de métricas reales para dibujar el plan de expansión actual.

            En cuanto a valores, en Smartfit hemos mantenido desde el primer momento la firmeza de alinear muy bien la oportunidad de crecimiento y la racionalidad a la hora de hacerlo.</p>
        </div>

        </main>
    )
    }
    export default About;

