import { useState } from "react";
<<<<<<< HEAD
import "./Contact.css";
import "../TerminosyCondiciones/TerminosyCondiciones";

function Contact() {
=======
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

>>>>>>> 34fcd6cf2fa9f8960e19c752f21cca54eec33382
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [contactMethod, setContactMethod] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
<<<<<<< HEAD
=======
  const [message, setMessage] = useState("");


>>>>>>> 34fcd6cf2fa9f8960e19c752f21cca54eec33382
  const messages = {
    name: "Debes introducir un nombre correcto",
    surname: "Debes introducir tus apellidos",
    email: "Debes introducir una dirección correcta",
    phone: "Debes introducir un número correcto",
    message: "Por favor, indíquenos su consulta",
  };

  const patterns = {
    name: /^[A-Za-záéíóúñÑÁÉÍÓÚ\s'-]+$/i,
    surname: /^[A-Za-záéíóúñÑÁÉÍÓÚ\s'-]+$/i,
    email:
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    phone: /^[+0-9]+$/i,
  };

  const handlerReset = () => {
    setName("");
    setSurname("");
    setEmail("");
    setPhone("");
    setMessage("");
    setContactMethod("");
    setTermsAccepted(false);
  };

<<<<<<< HEAD
  const isFormValid =
    name !== "" &&
    surname !== "" &&
    email !== "" &&
    phone !== "" &&
    message !== "" &&
    contactMethod !== "" &&
    termsAccepted &&
    patterns.name.test(name) &&
    patterns.surname.test(surname) &&
    patterns.email.test(email) &&
    patterns.phone.test(phone);

  const submitForm = (ev) => {
    ev.preventDefault();
    if (isFormValid) {
      alert("Formulario enviado!");
      handlerReset(); // Restablecer campos después de enviar el formulario exitosamente
    } else {
      alert(
        "Por favor, completa todos los campos y acepta los términos y condiciones antes de enviar."
      );
    }
  };

  return (
    <>
        <h1 className="contact_title">Contáctanos</h1>
      <form className="form" onSubmit={submitForm}>
        <div className="main-container">
          <div className="container-details">
            <label>{/* Nombre:{" "} */}</label>
            <input
              className="input"
              type="text"
              name="nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Luisa"
              required
            />
            {name !== "" && !patterns.name.test(name) && (
              <span style={{ color: "red" }}>{messages.name}</span>
            )}
            <label>{/* Apellidos:{" "} */}</label>
            <input
              className="input"
              type="text"
              name="nombre"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              placeholder="Madrigal"
              required
            />
=======
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
>>>>>>> 34fcd6cf2fa9f8960e19c752f21cca54eec33382
            {surname !== "" && !patterns.name.test(surname) && (
              <span style={{ color: "red" }}>{messages.name}</span>
            )}
            {/* Email:{" "} */}
            <input
              className="input"
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
            <input
              className="input"
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
<<<<<<< HEAD
            <label>{/* Mensaje:{" "} */}</label>
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
=======
            </label>
            <label>Escriba su mensaje</label>
      <textarea maxLength="300" name="message" />
>>>>>>> 34fcd6cf2fa9f8960e19c752f21cca54eec33382
          </div>

          <div className="container-radios">
            <p className="strong_title"><strong>Como quiero que me contacten:</strong></p>
            <div className="div_radio">
              <label>Vía telefónica</label>
              <input
                className="input_radio"
                type="radio"
                name="btnRadio"
                value="teléfono"
                checked={contactMethod === "teléfono"}
                onChange={() => setContactMethod("teléfono")}
                required
              />
            </div>
            <div className="div_radio">
              <label>Vía correo electrónico</label>
              <input
                className="input_radio"
                type="radio"
                name="btnRadio"
                value="email"
                checked={contactMethod === "email"}
                onChange={() => setContactMethod("email")}
                required
              />
            </div>
            <div className="div_radio">
              <label>No es necesario que me contacten</label>
              <input
                className="input_radio"
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
              <a className="contact_terms"href="https://www.upgrade-hub.com/privacidad/">
                Acepto los términos y condiciones{""}
              </a>
            </label>
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
<<<<<<< HEAD
              value="send"
              disabled={!isFormValid && !termsAccepted}
            >
              Enviar
=======
              disabled={!termsAccepted}
              onClick={(ev) => {setMessage(""); submitForm(ev);}}>
                Enviar
>>>>>>> 34fcd6cf2fa9f8960e19c752f21cca54eec33382
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
