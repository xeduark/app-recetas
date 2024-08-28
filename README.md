# Descripción del Proyecto
Este proyecto de React permitirá a los usuarios explorar recetas, enfocándose en dos
categorías principales: vegetarianas y carnívoras. Los usuarios necesitarán iniciar
sesión para acceder a las recetas y podrán navegar por diferentes categorías
específicas. La aplicación será solo de frontend, utilizando React Router para la
navegación entre diferentes vistas.
Requisitos Funcionales
1. Autenticación de Usuarios:
o Página de inicio de sesión para ingresar con correo electrónico y
contraseña.
o Página de registro para que los nuevos usuarios puedan crear una
cuenta.
2. Navegación y Rutas:
o Una estructura de carpetas dedicada exclusivamente a manejar rutas.
o Ruta principal que redirige a la página de inicio de sesión si el usuario
no está autenticado.
o Ruta de inicio tras la autenticación que muestra opciones generales y
acceso a categorías específicas.
o Rutas específicas para categorías vegetarianas y carnívoras listando las
recetas pertinentes.
o Ruta de detalle de receta para más información sobre una receta
seleccionada.
3. Gestión de Recetas:
o Funcionalidad para mostrar recetas aleatorias o específicas según la
categoría seleccionada.
o Detalle de recetas incluyendo ingredientes, instrucciones de
preparación y fotos.
4. Interfaz de Usuario:
o Interfaz responsiva adaptada para dispositivos móviles y de escritorio.
o Botones y enlaces claros para una fácil navegación entre categorías y
detalles de recetas.
# Requisitos No Funcionales
1. Usabilidad:
o Interfaz intuitiva y fácil de usar con tiempos de carga rápidos y
respuestas ágiles a las interacciones del usuario.
2. Seguridad:
o Almacenamiento seguro de credenciales de usuario.
3. Compatibilidad:
o Compatible con los navegadores modernos como Chrome, Firefox,
Safari y Edge.
4. Mantenibilidad:
o Código organizado y modular utilizando las mejores prácticas de
desarrollo en React.
Tecnologías Sugeridas
• Frontend: React con React Router v6.4 para la gestión de rutas.
• Estilos: CSS puro o frameworks como Tailwind CSS para estilos responsivos.
• APIs: Uso de una API pública para recetas o un conjunto de datos local en
formato JSON.
