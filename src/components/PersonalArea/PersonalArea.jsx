const PersonalArea = ({nombre, email, peso, edad, altura}) => {
    const handleClick = (e) => {
      };

      return (
        <li onClick={e => handleClick(e, nombre, email, peso, edad, altura )}>
          {`${nombre} tiene ${edad} años y tiene un peso de: ${peso}, una altura ${altura}. Para enviarle notificaciones, lo hacemos a ${email}`}
        </li>
      );
    
    };

export default PersonalArea;



