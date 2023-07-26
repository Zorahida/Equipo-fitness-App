import React from 'react';
import './Servicios.css'




function Servicios(props) {
    return (
            
			<div className='contenedor-servicios'>
            
			 <img 
			className='imagen-servicios'
			src={require(`./Imagen/servicios ${props.imagen}.jpg`)} 
				alt='entrePersonal'/>
            <div className='contenedor-texto'>
            <p className='nombre-servicio'>{props.nombre}</p>
				<p className='explicacion-servicio'>{props.explicacion}</p>
                

			</div>
        </div>

            
		);
}
export default Servicios