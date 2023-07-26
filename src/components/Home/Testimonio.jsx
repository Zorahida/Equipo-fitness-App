import React from 'react';
import './Testimonio.css'



function Testimonio(props) {
    return (
			<div className='contenedor-testimonio'>
			 <img 
			className='imagen-testimonio'
			src={require(`./Imagen/testimonio ${props.imagen}.jpg`)} 
				alt='Ana' />
			<div className='contenedor-texto-testimonio'>
				<p className='nombre-testimonio'><strong>{props.nombre}</strong></p>
				<p className='edad-testimonio'>{props.edad}</p>
				<p className='texto-testimonio'>{props.testimonio}</p>
		    </div>

			</div>
		);
}
export default Testimonio;