import "./personalArea.css";

const PersonalArea = ({ user }) => {
  //let imc = user.peso/pow(user.altura/100,2);
  //La función Math.round sirve para redondear valores
  let altura = Math.round(user.altura) / 100;
  let peso = Math.round(user.peso);
  //La función Math.pow sirve para calcular potencias
  //Con toFixed reduciremos a 2 el número de decimales a mostrar
  let imc = (peso / Math.pow(altura, 2)).toFixed(2);

  var clasificacion = "";

  if (imc < 20) {
    clasificacion = "peso por debajo del normal";
  } else if (imc >= 20 && imc < 24) {
    clasificacion = "normopeso";
  } else if (imc >= 24 && imc < 29) {
    clasificacion = "sobrepeso";
  } else {
    clasificacion = "obesidad";
  }

  let respuesta = imc + " => tienes " + clasificacion;

  return (
    <>
      <div className="container-profile">
      <div className="container">
      <h1>Bienvenido, {user.nombre}</h1>
        <h2>Datos Personales</h2>
        <ul>
          <li>Nombre de usuario: {user.username}</li>
          <li>Email: {user.correo}</li>
          <li>Nombre: {user.nombre}</li>
          <li>Edad: {user.edad} años</li>
          <li>Género: {user.genero}</li>
          <li>Peso: {user.peso} kg</li>
          <li>Altura: {user.altura} cm</li>
          <li>Objetivo a alcanzar: {user.objetivo} kg</li>
          <li>Tu Indice de Masa Corporal es: {respuesta}</li>
        </ul>
        <p>Aquí podrás encontrar tus datos personales,</p>
        <p>que iremos modificando en base a tus progresos</p>
      </div>
      </div>
    </>
  );
};

export default PersonalArea;
