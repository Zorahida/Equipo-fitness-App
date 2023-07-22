import { useForm } from "react-hook-form";
import { useState } from "react";
//import envioCorreo from "archivo enviarCorreo"


const Contact =() => {
  const{handleSubmit, getValues} = useForm();
  
  const onSubmit = () => {
    const data = getValues();
    console.log(data);
    //enviCorreo(data);
    //Aqui podemos enviar los datos a una base de datos o email
  }

  const 
  
  return (
    <>
      <header>CONTACTA CON NOSOTROS</header>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Nombre: <input name="Input" />
          Apellidos: <input name="surnameInput" />
          Email: <input name="mailInput" />
          Confirmar email: <input name="mailInput" />
          Teléfono: <input input name="phoneInput" />
        </label>
        <hr />
        <p>
          Como quiero que me contacten:
          <label>
            <input type="radio" name="btnRadio" value="teléfono" />
            Por teléfono
          </label>
          <label>
            <input type="radio" name="btnRadio" value="email" />
            Por email
          </label>
          <label>
            <input type="radio" name="btnRadio" value="none" />
            No quiero que me contacten
          </label>
        </p>
        <label>
          Acepto los términos y condiciones:{" "}
          <input type="checkbox" name="terminosCheckbox" />
        </label>
        <button type="submit" value="Submit" >Enviar</button>
        <hr />
      </form>
    </>
  );
}
export default Contact;
