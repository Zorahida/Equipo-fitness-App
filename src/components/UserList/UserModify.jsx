import { useState } from "react";


const UserModify = ({usuario,updateUser}) => {

    const[formDetail,setFormDetail] =useState({
        nombre: usuario.nombre,
        correo: usuario.correo,
        peso: usuario.peso,
    })

const handleModify = (e) => {
    setFormDetail({...formDetail,[e.target.name]:e.target.value});
};

const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(usuario._id,formDetail);

return(
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="nombre"
        value={"nombre"}
        onChange={handleModify}
        placeholder="Nuevo nombre"
      />
      <input
        type="email"
        name="email"
        value={""}
        onChange={handleModify}
        placeholder="Nuevo email"
      />
      <button type="submit">Guardar cambios</button>
    </form>
  
);
}}

export default UserModify;