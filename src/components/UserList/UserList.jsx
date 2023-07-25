import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

function UserList() {


  const[listUser, setUser] = useState([]);

  const getAllUser = async () => {

  const response = await axios.get(
          `https://proyect-back-final1.vercel.app/usuariosBase`);

      setUser(response.data)
          
      };

      useEffect(() => {
          getAllUser();
      }, []);

  const renderUser = () => {
      return listUser.map((usuario) => (
         <div key= {usuario._id}>
           <h4> {usuario.username}</h4>
           <ul>
           <li>{usuario._id}</li>
           <li>{usuario.nombre}</li>
          </ul>
        
      </div>
      ));
  };

   return <div>{renderUser()}</div>
};

export default UserList;