import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import "./Register.css";
import axios from "axios";
import "../TerminosyCondiciones/TerminosyCondiciones";

const Register = () => {
  const [termsAccepted, setTermsAccepted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [formularioValido, cambiarFormularioValido] = useState(null);

  const result = async (data) => {
    console.log(data);
    try{
      data.peso = parseInt(data.peso);
      data.objetivo = parseInt(data.objetivo);
      data.altura = parseInt(data.altura);
      data.edad = parseInt(data.edad);
      data.role = "user"
    const res = await axios.post(      
      "https://proyect-back-final-olive.vercel.app/usuariosBase/newUser");
      console.log("Response:", res.data);
    } catch (error){
      console.error("Error ocurred:", error.message);
    }
  };
  return (
    <>
      <div className="plantilla-register">
        <h1 className="register_title"> Formulario de registro </h1>
        <form className="register_form" onSubmit={handleSubmit(result)}>
          <input
            className="register_input"
            type="text"
            placeholder="Nombre"
            {...register("nombre", {
              required: "El nombre es requerido.",
            })}
          />
          {errors.Nombre && <p>{errors.Nombre.message}</p>}

          <input
            className="register_input"
            type="text"
            placeholder="username"
            {...register("username", {
              required: "El Username es requerido.",
            })}
          />
          {errors.Username && <p>{errors.Username.message}</p>}

          <input
            className="register_input"
            type="email"
            placeholder="Mail"
            {...register("correo", {
              required: "El mail es requerido.",
              pattern: {
                message: "No cumple los requisitos",
                value:
                  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
              },
            })}
          />
          {errors.mail && <p>{errors.mail.message}</p>}

          <input
            className="register_input"
            type="text"
            placeholder="Edad"
            {...register("edad", {
              required: "La edad es necesario.",
            })}
          />
          {errors.Edad && <p>{errors.Edad.message}</p>}

          <input
            className="register_input"
            type="text"
            placeholder="Peso"
            {...register("peso", {
              required: "El peso es necesario.",
            })}
          />
          {errors.Peso && <p>{errors.Peso.message}</p>}

          <input
            className="register_input"
            type="text"
            placeholder="Objetivo"
            {...register("objetivo", {
              required: "La objetivo es necesario.",
            })}
          />
          {errors.Objetivo && <p>{errors.Objetivo.message}</p>}

          <input
            className="register_input"
            type="text"
            placeholder="Altura"
            {...register("altura", {
              required: "La altura es necesario.",
            })}
          />
          {errors.Altura && <p>{errors.Altura.message}</p>}

          <input
            className="register_input"
            type="text"
            placeholder="Genero"
            {...register("genero", {
              required: "El genero es necesario.",
            })}
          />
          {errors.Genero && <p>{errors.Genero.message}</p>}

          <input
            className="register_input"
            type="password"
            placeholder="Contraseña"
            {...register("password", {
              required: "La contraseña es necesaria.",
              pattern: {
                message:
                  "Requisitos : Mas de 6 caracteres, 1 numero, una MAYUSCULA, una minuscula",
                value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/,
              },
            })}
          />
          {errors.Contraseña && <p>{errors.Contraseña.message}</p>}

          <div className="container-terms">
            <label className="terms_label">
              <a
                className="register_terms"
                href="https://www.upgrade-hub.com/privacidad/"
              >
                Acepto los términos y condiciones{""}
              </a>
            </label>

            <input
              className="terms_check"
              type="checkbox"
              name="terminosCheckbox"
              checked={termsAccepted}
              onChange={() => setTermsAccepted(!termsAccepted)}
              required
            />
          </div>

          <div className="register_button">
            <button className="submit">Registrar</button>
            {Register === true && <p>Gracias por Registrase!!</p>}
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
