function Contact() {
  return (
    <>
      <header>CONTACTA CON NOSOTROS</header>
      <body>
        <label>
          Nombre: <input name="nameInput" />
          Apellidos: <input name="surnameInput" />
          Email: <input name="mailInput" />
          Teléfono: <input name="phoneInput" />
        </label>
        <hr />
        <p>
          Como quiero que me contacten:
          <label>
            <input type="radio" name="btnRadio" value="teléfono" />
            Por teléfono
          </label>
          <label>
            <input type="radio" name="myRadio" value="email" />
            Por email
          </label>
          <label>
            <input type="radio" name="myRadio" value="none" />
            No quiero que me contacten
          </label>
        </p>
        <label>
          Acepto los términos y condiciones:{" "}
          <input type="checkbox" name="terminosCheckbox" />
        </label>
        <hr />
      </body>
    </>
  );
}
export default Contact;
