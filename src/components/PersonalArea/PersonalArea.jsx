import "./personalArea.css";

const userImg = require("../../assets/images/pngwing.com.png")

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
      <h1 className="profile_title">Bienvenido, {user.nombre}</h1>
        <h2>Datos Personales</h2>
        <ul>
        <img className="user_img" src={userImg} alt="user"/>
          <li><strong>Nombre de usuario:</strong> {user.username}</li>
          <li><strong>Email:</strong> {user.correo}</li>
          <li><strong>Nombre:</strong> {user.nombre}</li>
          <li><strong>Edad:</strong> {user.edad} años</li>
          <li><strong>Género:</strong> {user.genero}</li>
          <li><strong>Peso:</strong> {user.peso} kg</li>
          <li><strong>Altura:</strong> {user.altura} cm</li>
          <li><strong>Objetivo a alcanzar:</strong> {user.objetivo} kg</li>
          <li><strong>Tu Indice de Masa Corporal es:</strong> {respuesta}</li>
        </ul>
        <p>Aquí podrás encontrar tus datos personales,</p>
        <p>que iremos modificando en base a tus progresos</p>
      </div>
      </div>
    </>
  );
};

export default PersonalArea;
