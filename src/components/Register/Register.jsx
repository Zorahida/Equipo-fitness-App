import React from "react";
import {useForm} from 'react-hook-form'
import './Register.css'
//import axios from 'axios'

const Register = () => {
    const {register, handleSubmit, formState: {errors}} = useForm()

    const result = async (data) => {
        console.log(data)
       // const res = await axios (??????????????????)

    }
  return (
    
    <div className='planilla-register'>
      <h1> Formulario de Registro </h1>
      <form onSubmit={handleSubmit(result)}>
      <input typeclass='text' placeholder='Nombre' {...register('Nombre', {
        required:'El nombre es requerido.'
      })}/>
      {errors.Nombre && <p>{errors.Nombre.message}</p>}


      <input typeclass='text' placeholder='Apellido'{...register('Apellido', {
        required:'El Apellido es requerido.'
      })}/>
      {errors.Apellido && <p>{errors.Apellido.message}</p>}


      <input typeclass='text' placeholder='mail'{...register('mail', {
        required:'El mail es requerido.', pattern: {
            message: "No cumple los requisitos",
            value:  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,

        }
      })}/>
      {errors.mail && <p>{errors.mail.message}</p>}


      <input typeclass='number' placeholder='Edad'{...register('Edad', {
        required:'La edad es necesario.'
      })}/>
      {errors.Edad && <p>{errors.Edad.message}</p>}


      <input typeclass='text' placeholder='Contraseña' {...register('Contraseña', {
        required:'La contraseña es necesaria.', pattern: {
            message: "Requisitos : Mas de 6 caracteres, 1 numero, una MAYUSCULA, una minuscula",
            value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/ ,
        }
      })}/>
      {errors.Nombre && <p>{errors.Nombre.message}</p>}
      
      <button className='submit'>Registrar</button>
      

      </form>
    </div>  
  )
}

export default Register
