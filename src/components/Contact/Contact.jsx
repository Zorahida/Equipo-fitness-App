import { useState } from "react";
import {useForm} from "react-hook-form";
import "./ContactStyle.css";
import "./TerminosyCondiciones";
import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';


function Contact ()  {

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [contactMethod, setContactMethod] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);


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

    const isFormValid =
    name !== "" &&
    surname !== "" &&
    email !== "" &&
    phone !== "" &&
    contactMethod !== "" &&
    termsAccepted &&
    patterns.name.test(name) &&
  patterns.email.test(email) &&
  patterns.phone.test(phone);
 
  const submitForm = (ev) => {
    ev.preventDefault();
      alert("Formulario enviado!");
      emailjs.sendForm('service_9ug1lbk', 'template_g5e7uie', form.current, 'bpAtvu5HoUkk88R-t')
      .then((result) => {
        if (isFormValid) {
    } else {
      alert("Por favor, completa todos los campos correctamente antes de enviar.");
    }
 });
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
                name="user_name"
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
                name="user_name"
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
                name="user_email"
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
            <label>Message</label>
      <textarea name="message" />
          </div>

          <div className="container-radios">
            <h3>Como quiero que me contacten:</h3>
            <label>
              <input
                type="radio"
                name="btnRadio"
                value="teléfono"
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
              value="send"
              disabled={!isFormValid && !termsAccepted}
              onClick={()=> isFormValid ?
      alert("Formulario enviado!") : alert("Por favor, completa todos los campos y acepta los términos y condiciones antes de enviar.")}
              onMouseUp={handlerReset}>
             Enviar
            </button>
          </div>
        </div>
        </form>
      </>
    );
  }


export default Contact;
