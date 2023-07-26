import { useState } from "react";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {useForm} from "react-hook-form";
import "./ContactStyle.css";
import "./TerminosyCondiciones";



function Contact ()  {

  const form = useRef();

  const sendEmail = (e) => {        

    console.log("enviando email");

    emailjs.sendForm('service_rqie7fl', 'template_g5e7uie', form.current, 'bpAtvu5HoUkk88R-t')
      .then((result) => {
          console.log("email sent:", result.text);
      }, (error) => {
          console.log("Error sending email", error.text);
      });    
  }

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [contactMethod, setContactMethod] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [message, setMessage] = useState("");


  const messages = {
    name: "Debes introducir un nombre correcto",
    email: "Debes introducir una dirección correcta",
    phone: "Debes introducir un número correcto"
  };

  const patterns = {
    name: /^[A-Za-z]+$/i,
    email: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    phone: /^[+0-9]+$/i
    };

    const handlerReset = () => {
      setName("");
      setSurname("");
      setEmail("");
      setPhone("");
      setContactMethod("");
      setTermsAccepted(false);

    };

    const isFormValid = () => {
      return (
        name !== "" &&
        surname !== "" &&
        email !== "" &&
        phone !== "" &&
        contactMethod !== "" &&
        termsAccepted &&
        patterns.name.test(name) &&
        patterns.email.test(email) &&
        patterns.phone.test(phone)
      );
    };
 

    const submitForm = (ev) => {      
    ev.preventDefault();
    console.log("Estoy en la funcion despues del preventdefault")
      
      
      if (isFormValid() && contactMethod === "email") {    
        console.log("condiciones cumplidas")    
          sendEmail();          
          handlerReset(); // Restablecer campos después de enviar el formulario exitosamente
          setMessage("Mensaje enviado con éxito, ¡Recibirá una notificación en su email!");         
      }else if (isFormValid()) {
        console.log("condiciones cumplidas sin email")
        handlerReset(); // Restablecer campos después de enviar el formulario exitosamente
        setMessage("Mensaje enviado con éxito!");
      } else {
        setMessage("Debes rellenar los campos con información correcta");
      }

    }
 
  



    return (

      <>
        <div className="Title">
          <h1>CONTACTA CON NOSOTROS</h1>
        </div>
        <form className="form" ref={form} onSubmit={submitForm}>
        <div className="main-container">
          <div className="container-details">
            <label>
              Nombre:{" "}
              <input
                type="text"
                name="nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Luisa"
                required
                />
                {name !== "" && !patterns.name.test(name) && (
              <span style={{ color: "red" }}>{messages.name}</span>)}
              
              Apellidos:{" "}
              <input
                type="text"
                name="surname"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
                placeholder="Madrigal"
                required
              />
            {surname !== "" && !patterns.name.test(surname) && (
              <span style={{ color: "red" }}>{messages.name}</span>
            )}

              Email:{" "}
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Luisa@upgradehub.com"
                required
              />
              {email !== "" && !patterns.email.test(email) && (
              <span style={{ color: "red" }}>{messages.email}</span>
            )}

              Teléfono:{" "}
              <input
                type="tel"
                name="Teléfono"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="600606060"
                required
              />
              {phone !== "" && !patterns.phone.test(phone) && (
              <span style={{ color: "red" }}>{messages.phone}</span>
            )}
            </label>
            <label>Escriba su mensaje</label>
      <textarea maxLength="300" name="message" />
          </div>

          <div className="container-radios">
            <h3>Como quiero que me contacten:</h3>
            <label>
              <input
                type="radio"
                name="btnRadio"
                value="teléfono"
                checked={contactMethod === "teléfono"}
                onChange={() => setContactMethod("teléfono")}
                required
              />
             Vía telefónica
            </label>
            <label>
              <input
                type="radio"
                name="btnRadio"
                value="email"
                checked={contactMethod === "email"}
                onChange={() => setContactMethod("email")}
                required
              />
              Vía correo electrónico
            </label>
            <label>
              <input
                type="radio"
                name="btnRadio"
                value="none"
                checked={contactMethod === "none"}
                onChange={() => setContactMethod("none")}
                required
              />
              No es necesario que me contacten
            </label>
          </div>

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

          <div>
            <button
              className="btn"
              type="submit"
              disabled={!termsAccepted}
              onClick={(ev) => {setMessage(""); submitForm(ev);}}>
                Enviar
            </button>
          </div>
          <p style={{ color: message.startsWith('Debes') ? 'red' : 'green' }}>
          {message}
        </p>
        </div>
        </form>
      </>
    );
  }


export default Contact;