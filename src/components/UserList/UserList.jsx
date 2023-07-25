import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

function UserList() {


  const[listUser, setUser] = useState([]);

  const getAllUser = async () => {

  const response = await axios.get(
          `https://proyect-back-final1.vercel.app/usuariosBase`);

  const user = response.data.results()
      setUser(user);
          console.log(response.data.results);
      };

      useEffect(() => {
          getAllUser();
      }, []);

  const renderUser = () => {
      return listUser.map((user) => (
         <div key= {user._id}>
           <h4> {user.username}</h4>
           <ul>
           <li>{user._id}</li>
           <li>{user.nombre}</li>
          </ul>
        
      </div>
      ));
  };

   return <div>{renderUser()}</div>
};

export default UserList;