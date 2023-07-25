import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import NotFound from "../NotFound/NotFound";

function UserList() {
  const [listUser, setUser] = useState([]);
  const [error, setError] = useState(false);

  const getAllUser = async () => {
    try {
      const response = await axios.get(
        `https://proyect-back-final1.vercel.app/usuariosBase`
      );

      setUser(response.data);
    } catch (eror) {
      setError(true);
    }
  };

  useEffect(() => {
    getAllUser();
  }, []);

  const renderUser = () => {
    return listUser.map((usuario) => (
      <div key={usuario._id}>
        <h4> {usuario.username}</h4>
        <ul>
          <li>{usuario._id}</li>
          <li>{usuario.nombre}</li>
        </ul>
      </div>
    ));
  };

  return <div>{error ? <NotFound /> : <div>{renderUser()}</div>}</div>;
}

export default UserList;
