# Equipo-Fitness-App

## Descripción

Equipo-Fitness-App es una aplicación desarrollada por nuestro equipo con el objetivo de proporcionar un control personalizado de medidas y recomendaciones de ejercicios diarios. Nuestra aplicación se enfoca en brindar una experiencia única para cada usuario, ofreciendo servicios personalizados y un compromiso total con nuestros clientes.
Características

    Control personal de medidas y progreso de entrenamientos.
    Recomendaciones de ejercicios diarios basados en las medidas del usuario.
    Página "Acerca de nosotros" que presenta información sobre nuestra empresa ficcional, servicios y compromiso con los clientes.
    Componente de administración (Admin) que protege las rutas según el tipo de usuario y una ruta de autorización (AuthRoute).
    Página de contacto que permite a los usuarios enviar mensajes mediante la librería emailJs.
    Barra de navegación (Nav) con enlaces a las diferentes secciones de la aplicación.
    Pie de página (Footer) con enlaces a las secciones de la aplicación, iconos de redes sociales y nombres de los creadores.
    Página de inicio (Home) que muestra testimonios y comunicados de nuestros servicios.
    Página de inicio de sesión (Login) para autenticar usuarios con credenciales registradas en la base de datos.
    Página "No encontrada" (NotFound) para manejar rutas incorrectas.
    Área personal (PersonalArea) que muestra los datos del usuario registrados en la base de datos (ruta protegida por autenticación).
    Página de "Términos y Condiciones" que describe las condiciones de uso de la aplicación.
    Lista de entrenamientos (TrainingList) que muestra una lista de posibles entrenamientos con videos de demostración.
    Componente UseContext para proporcionar un botón de modo oscuro en todas las rutas.
    Página de lista de usuarios (UserList) para obtener y borrar usuarios de la base de datos (ruta solo accesible por un admin).

## Tecnologías Utilizadas

    React
    Axios
    EmailJs
    Toogle 

## Instalación

    Clona este repositorio.
    Ejecuta npm install para instalar las dependencias.
    Ejecuta npm start para iniciar la aplicación en modo de desarrollo.
    Abre http://localhost:3000 en tu navegador para ver la aplicación.

## Uso

### Página de Inicio

    Al abrir la aplicación, serás redirigido a la página de inicio (Home).
    En la página de inicio, encontrarás "testimonios" de diferentes usuarios que han utilizado nuestra aplicación y han experimentado resultados positivos.
    También verás comunicados sobre los servicios que ofrecemos, como soporte a nivel personalizado y entrenamientos personalizados.

### Acerca de Nosotros

    Navega a la página "Acerca de nosotros" (About) para conocer más acerca de nuestra empresa ficticia y los servicios que proporcionamos a nuestros clientes.
    Obtén información sobre nuestro compromiso con la salud y el bienestar de nuestros usuarios.

### Iniciar Sesión

    Si ya eres usuario registrado, ve a la página de inicio de sesión (Login).
    Ingresa tus credenciales para autenticarte y acceder a tu área personalizada.

### Área Personal

    Una vez que hayas iniciado sesión, serás redirigido a tu área personal (PersonalArea).
    Aquí podrás ver los datos que están registrados en la base de datos y corresponden a tu perfil de usuario.
    Esta área está protegida y solo puede ser accesible para usuarios autorizados.

### Lista de Entrenamientos

    Explora la sección de la "Lista de entrenamientos" (TrainingList) para encontrar una variedad de posibles rutinas de entrenamiento.
    Cada entrenamiento incluirá detalles sobre cómo llevar a cabo las rutinas y videos de demostración para seguir los ejercicios correctamente.

### Modo Oscuro

    Nuestra aplicación cuenta con un botón de "Modo Oscuro" proporcionado por el componente UseContext.
    Al hacer clic en este botón, podrás cambiar el estilo de la página a un tono más oscuro para una mejor experiencia visual.

### Contacto

    Utiliza la página de contacto (Contacto) para enviarnos mensajes o consultas.
    Al enviar un mensaje, utilizamos la librería emailJs para asegurarnos de que llegue a nuestro correo designado.

### Términos y Condiciones

    Si deseas obtener más información sobre los términos y condiciones de uso de la aplicación, visita la página dedicada a este tema (Terminos y Condiciones).

### Administración y CRUD

    La aplicación cuenta con un componente de administración (Admin) que controla el acceso a ciertas rutas según el tipo de usuario.
    Además, implementamos rutas de autenticación y login para proporcionar una experiencia segura y protegida para nuestros usuarios.

### Lista de Usuarios (Acceso restringido)

    La página "Lista de Usuarios" (UserList) solo es accesible para usuarios administradores.
    Aquí, los administradores pueden obtener y eliminar usuarios de la base de datos según sea necesario.

## Contribución

Este proyecto está destinado a ser una muestra para un trabajo de clase, por lo que no aceptamos contribuciones externas en este momento.

## Créditos

Agradecimientos especiales a los creadores de las siguientes tecnologías y librerías utilizadas en el proyecto:

    React: https://reactjs.org/
    Axios: https://axios-http.com/
    EmailJs: https://www.emailjs.com/
    Toogle (o el nombre correcto de la librería): URL del repositorio o sitio web

## Licencia

Este proyecto no tiene una licencia específica, ya que es una muestra para un trabajo de clase.
