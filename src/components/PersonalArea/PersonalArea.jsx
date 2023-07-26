const PersonalArea = ({nombre, email, peso, edad, altura}) => {
    const handleClick = (e) => {
      };

      return (

        <>
        <h2>Usuarios Registrados</h2>
        <ul>
        <li onClick={e => handleClick(e, nombre, email, peso, edad, altura )}>
          {`${nombre} tiene ${edad} años y tiene un peso de: ${peso}, una altura ${altura}. Para enviarle notificaciones, lo hacemos a ${email}`}
        </li>
        </ul>
        </>
      );
    
    };

export default PersonalArea;



