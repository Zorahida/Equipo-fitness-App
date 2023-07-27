import { Navigate, useLocation } from "react-router-dom";

const AuthRoute = ({ user, component }) => {
  const location = useLocation();

  if (user) return component;
  //si el usuario existe, le lleva al componente autorizado
  if (!user)
    return <Navigate to="/login" state={{ prevRoute: location.pathname }} />;
  //sino, al login
};

export default AuthRoute;
