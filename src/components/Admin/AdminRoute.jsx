import { Navigate, useLocation } from "react-router-dom";

const AdminRoute = ({ user, component }) => {
  const location = useLocation();

  if (!user) 
  return <Navigate to="/login" state={{ prevRoute: location.pathname }} />;
  if (user.role === "admin") return component;
  //si el usuario existe, le lleva al componente autorizado
  if (user.role !== "admin")
  return <Navigate to="/profile" state={{ prevRoute: location.pathname }} />;
  //sino, al perfil

};

export default AdminRoute;