import axios from "axios";
import { useState, useEffect } from "react";
import NotFound from "../NotFound/NotFound";
import { Link } from "react-router-dom";


function UserList() {
  const [listUser, setUser] = useState([]);
  const [error, setError] = useState(false);
  const [isEditing, setIsEditing] = useState(false); // Estado para controlar si se está editando o no
  const [editingUserId, setEditingUserId] = useState(null);


  const getAllUser = async () => {
      const response = await axios.get(`https://proyect-back-final1.vercel.app/usuariosBase`);
      setUser(response.data);   
  };

  useEffect(() => {
    getAllUser();
  }, []);


    //ELIMINAR AL USER  
  const deleteUser = async (userId) => {
      const deleteUser = await axios.delete(`https://proyect-back-final1.vercel.app/usuariosBase/delUser/${userId}`);
      getAllUser(); //Para que devuelva la lista actualizada
  };

  //MODIFICAR AL USER
  const updateUser = async (userId, updateDetails) => {
      await axios.put(`https://proyect-back-final1.vercel.app/usuariosBase/upUser/${userId}`, updateDetails);
      setUpdateUserDetails(updateDetails);
      getAllUser(); //Para que devuelva la lista de usuarios, ya modificada con los datos del nuevo user
  };

  const handleEditUser = (userId) => {
    setIsEditing(true);
    setEditingUserId(userId);
  };
    
  const setUpdateUserDetails = (details) => {
    // Buscar el usuario con el ID proporcionado en la lista de usuarios
    const updatedUser = listUser.find((user) => user._id === details.userId);
  
    if (updatedUser) {
      // Actualizar los detalles del usuario con los datos proporcionados en 'details'
      updatedUser.nombre = details.nombre || updatedUser.nombre;
      updatedUser.email = details.email || updatedUser.email;
      updatedUser.telefono = details.telefono || updatedUser.telefono;
      updatedUser.peso = details.peso || updatedUser.peso;
  
      // Actualizar la lista de usuarios con el usuario modificado
      setUser([...listUser]);
    }
  };

  const renderUser = () => {
    return listUser.map((usuario) => (
      <div key={usuario._id}>
        <h4> {usuario.username}</h4>
        <ul>
          <li>{usuario._id}</li>
          <li>{usuario.nombre}</li>
          <li>{usuario.correo}</li>
          <li>{usuario.peso}</li>
        <button><Link to={`/userModify/${usuario._id}`}>Modificar</Link></button>
          <br/>
          <button onClick={() => deleteUser(usuario._id)}>
            Eliminar Usuario
          </button>
        </ul>
      </div>
    ));
  };

  return <div>{error ? <NotFound /> : <div>{renderUser()}</div>}</div>;
}
  
export default UserList;
