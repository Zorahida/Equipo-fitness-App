import { useState } from "react";
import {useForm} from "react-hook-form";
import "./ContactStyle.css";
import "./TerminosyCondiciones";

function Contact() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [contactMethod, setContactMethod] = useState(""); // 'teléfono', 'email', 'none'
  const [termsAccepted, setTermsAccepted] = useState(false);

  const isFormValid =
    name !== "" &&
    surname !== "" &&
    email !== "" &&
    phone !== "" &&
    contactMethod !== "" &&
    termsAccepted;

  const submitForm = (ev) => {
    ev.preventDefault();
  };

  const messages = {
    req: "Este campo es obligatorio",
    mail: "Debes introducir una dirección correcta",
    phone: "Debes introducir un número correcto"
  };

    const handlerReset = () => {
      setName("");
      setSurname("");
      setEmail("");
      setPhone("");
      setContactMethod("");
      setTermsAccepted(false);
    };

    if (isFormValid) {
      console.log("Formulario enviado!");
    } else {
      alert(
        "Por favor, completa todos los campos y acepta los términos y condiciones antes de enviar."
      );
 }
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
                name="Nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Luisa"
                {required: messages.req}
              />
              Apellidos:{" "}
              <input
                type="text"
                name="Apellidos"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
                placeholder="Madrigal"
                required
              />
              Email:{" "}
              <input
                type="email"
                name="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Luisa@upgradehub.com"
                required
              />
              Teléfono:{" "}
              <input
                type="tel"
                name="Teléfono"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="600606060"
                required
              />
            </label>
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
              Por teléfono
            </label>
            <label>
              <input
                type="radio"
                name="btnRadio"
                value="email"
                onChange={() => setContactMethod("email")}
                required
              />
              Por email
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
              disabled={!isFormValid && !termsAccepted}
              onClick={()=> alert('Enviado')}
              onMouseLeave={handlerReset}>
              Enviar
            </button>
          </div>
        </div>
        </form>
      </>
    );
  }


export default Contact;
