import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

function UserList () {


  const[listUser, setUser] = useState([]);

  const getAllUser = async () => {

  const response = await axios.get(
          `https://proyect-back-final1.vercel.app/usuariosBase`);

<<<<<<< HEAD:src/components/UserList/UserList.jsx
      setUser(response.data)
          
=======
  const user = response.data.results()
      setUser(user);
>>>>>>> userList:src/components/UserList/UserList.js
      };

      useEffect(() => {
          getAllUser();
      }, []);

  const renderUser = () => {
<<<<<<< HEAD:src/components/UserList/UserList.jsx
      return listUser.map((usuario) => (
         <div key= {usuario._id}>
           <h4> {usuario.username}</h4>
=======
      return listUser.map((user) => (
         <div key= {user._id}>
           <h4> {...user}</h4>
>>>>>>> userList:src/components/UserList/UserList.js
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