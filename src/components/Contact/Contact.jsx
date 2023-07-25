import { useState } from "react";
import "./ContactStyle.css";
import "../TerminosyCondiciones/TerminosyCondiciones";
import styled from '@emotion/styled';

const Button = styled.button`
  color: turquoise;
`



function Contact() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [contactMethod, setContactMethod] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  const messages = {
    name: "Debes introducir un nombre correcto",
    email: "Debes introducir una dirección correcta",
    phone: "Debes introducir un número correcto",
  };

  const patterns = {
    name: /^[A-Za-z]+$/i,
    email:
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    phone: /^[+0-9]+$/i,
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
    if (isFormValid) {
    } else {
      alert(
        "Por favor, completa todos los campos correctamente antes de enviar."
      );
    }
  };

  return (
    <>
      <div className="Title">
        <h1>CONTACTA CON NOSOTROS</h1>
      </div>
      <form className="form" onSubmit={submitForm}>
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
                <span style={{ color: "red" }}>{messages.name}</span>
              )}
              <br></br>
              Apellidos:{" "}
              <input
                type="text"
                name="nombre"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
                placeholder="Madrigal"
                required
              />
              {surname !== "" && !patterns.name.test(surname) && (
                <span style={{ color: "red" }}>{messages.name}</span>
              )}
              <br></br>
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
              <br></br>
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
            <br></br>
            <textarea
              name="mensaje"
              rows="10"
              cols="40"
              placeholder="Escriba aquí su mensaje"
            ></textarea>
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
              <a href="https://www.upgrade-hub.com/privacidad/">
                Acepto los términos y condiciones{""}
              </a>

             
`

<Button>This my button component.</Button>


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
              onClick={() =>
                isFormValid
                  ? alert("Formulario enviado!")
                  : alert(
                      "Por favor, completa todos los campos y acepta los términos y condiciones antes de enviar."
                    )
              }
              onMouseUp={handlerReset}
            >
              Enviar
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default Contact;
