const PersonalArea = ({ user }) => {
  //let imc = user.peso/pow(user.altura/100,2);
  //La función Math.roud sirve para redondear valores
  let altura = Math.round(user.altura) / 100;
  let peso = Math.round(user.peso);
  //La función Math.pow sirve para calcular potencias
  //Con toFixed reduciremos a 2 el número de decimales a mostrar
  let imc = (peso / Math.pow(altura, 2)).toFixed(2);

  return (
    <>
      <div>
        <h1>Datos personales</h1>
        <ul>
          <li>Nombre de usuario: {user.username}</li>
          <li>Email: {user.correo}</li>
          <li>Nombre: {user.nombre}</li>
          <li>Edad: {user.edad}</li>
          <li>Género: {user.genero}</li>
          <li>Peso: {user.peso} kg</li>
          <li>Altura: {user.altura} cm</li>
          <li>Objetivo a alcanzar: {user.objetivo} kg</li>
          <li>Tu Indice de Masa Corporal es: {imc}</li>
        </ul>
      </div>
    </>
  );
};

export default PersonalArea;
