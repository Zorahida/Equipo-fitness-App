import React from "react";
import {useForm} from 'react-hook-form'
import { useState } from "react";
import './Register.css'
import axios from 'axios'
import "../Contact/TerminosyCondiciones"

const Register = () => {
  const [termsAccepted, setTermsAccepted] = useState(false);
    const {register, handleSubmit, formState: {errors}} = useForm()
    const[formularioValido,cambiarFormularioValido] = useState(null);

    const result = async (data) => {
        console.log(data)
        const res = await axios.post ('https://proyect-back-final1.vercel.app/newUser')

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
      {errors.Contraseña && <p>{errors.Contraseña.message}</p>}

      <div className="container-terms">
            <label>
            <a href="https://www.upgrade-hub.com/privacidad/">Acepto los términos y condiciones{""}</a> 

              <input
                type="checkbox"
                name="terminosCheckbox"
                checked={termsAccepted}
                onChange={() => setTermsAccepted(!termsAccepted)}
                required
              />
            </label>
          </div>
      
      <div className="BotonRegistrar">
      <button className='submit'>Registrar</button>
      {Register === true &&<p>Gracias por Registrase!!</p>}

      </div>

      </form>
    </div>  
  )
}

export default Register
