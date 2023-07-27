import { useState } from "react";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {useForm} from "react-hook-form";
import "./Contact.css";
import "../TerminosyCondiciones/TerminosyCondiciones";



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
        <h1 className="contact_title">Contáctanos</h1>
        <form className="form" ref={form} onSubmit={submitForm}>
        <div className="main-container">
          <div className="container-details">
            <label>
              {/* Nombre:{" "} */}
              </label>
              <input className="input"
                type="text"
                name="nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Luisa"
                required
                />
                {name !== "" && !patterns.name.test(name) && (
              <span style={{ color: "red" }}>{messages.name}</span>)}
              
              <label>{/* Apellidos:{" "} */}</label>
              <input className="input"
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

            <label>{/* Email:{" "} */}</label>
              <input className="input"
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

              <label>{/* Teléfono:{" "} */}</label>
              <input className="input"
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
            <label>{/* Escriba su mensaje*/}</label>
            <textarea
            className="textarea"
              name="mensaje"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="10"
              cols="40"
              placeholder="Escriba aquí su mensaje"
              required
            ></textarea>
          </div>

          <div className="container-radios">
          <p className="strong_title"><strong>Como quiero que me contacten:</strong></p>
          <div className="div_radio">
            <label>Vía telefónica
            </label>
              <input className=
                type="radio"
                name="btnRadio"
                value="teléfono"
                checked={contactMethod === "teléfono"}
                onChange={() => setContactMethod("teléfono")}
                required
              />
             </div>
             <div className="div_radio">
            <label>Vía correo electrónico
            </label>
              <input className=
                type="radio"
                name="btnRadio"
                value="email"
                checked={contactMethod === "email"}
                onChange={() => setContactMethod("email")}
                required
              />
              </div>
              <div className="div_radio">
            <label>No es necesario que me contacten
            </label>
              <input className=
                type="radio"
                name="btnRadio"
                value="none"
                checked={contactMethod === "none"}
                onChange={() => setContactMethod("none")}
                required
              />
              </div>
          </div>

          <div className="container-terms">
            <label>
            <a className="contact_terms" href="https://www.upgrade-hub.com/privacidad/">Acepto los términos y condiciones{""}</a></label>

              <input
              className="input_radio"
                type="checkbox"
                name="terminosCheckbox"
                checked={termsAccepted}
                onChange={() => setTermsAccepted(!termsAccepted)}
                required
              />
          </div>

          <div className="div_button">
            <button
              className="button"
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