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
    const res = await axios(
      "https://proyect-back-final-olive.vercel.app/newUser");
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
            class="register_input"
            typeclass="text"
            placeholder="Nombre"
            {...register("Nombre", {
              required: "El nombre es requerido.",
            })}
          />
          {errors.Nombre && <p>{errors.Nombre.message}</p>}

          <input
            class="register_input"
            typeclass="text"
            placeholder="Apellido"
            {...register("Apellido", {
              required: "El Apellido es requerido.",
            })}
          />
          {errors.Apellido && <p>{errors.Apellido.message}</p>}

          <input
            class="register_input"
            typeclass="text"
            placeholder="Mail"
            {...register("mail", {
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
            class="register_input"
            typeclass="number"
            placeholder="Edad"
            {...register("Edad", {
              required: "La edad es necesario.",
            })}
          />
          {errors.Edad && <p>{errors.Edad.message}</p>}

          <input
            class="register_input"
            typeclass="text"
            placeholder="Contraseña"
            {...register("Contraseña", {
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
