import { useState } from "react";
import "./ContactStyle.css";

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
  if (isFormValid) {
    // Aquí puedes enviar los datos o hacer lo que necesites con ellos
    console.log("Formulario enviado!");
  } else {
    console.log(
      "Por favor, completa todos los campos y acepta los términos y condiciones antes de enviar."
    );

    const handlerReset = () => {
      setName("");
      setSurname("");
      setEmail("");
      setPhone("");
      setTermsAccepted(false);
    };

    return (
      <>
        <div className="Title">
          <h1>CONTACTA CON NOSOTROS</h1>
        </div>
        <form className="Form" onSubmit={submitForm}>
          <div className="input-details">
            <label>
              Nombre:{" "}
              <input
                type="text"
                name="Nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              Apellidos:{" "}
              <input
                type="text"
                name="Apellidos"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
                required
              />
              Email:{" "}
              <input
                type="email"
                name="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              Teléfono:{" "}
              <input
                type="tel"
                name="Teléfono"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </label>
          </div>

          <div className="Input-radio">
            <p>Como quiero que me contacten:</p>
            <label>
              <input
                type="radio"
                name="btnRadio"
                value="teléfono"
                checked
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
                checked
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
                checked
                onChange={() => setContactMethod("none")}
                required
              />
              No es necesario que me contacten
            </label>
          </div>

          <div className="Input-terms">
            <label>
              Acepto los términos y condiciones:{" "}
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
              onClick={handlerReset}
            >
              Enviar
            </button>
          </div>
        </form>
      </>
    );
  }
}

export default Contact;
