# React Firebase Gallery: Listado y Búsqueda de Imágenes

## Descripción
Este proyecto es una aplicación web desarrollada en React que permite a los usuarios registrarse y autenticarse utilizando Firebase Authentication y Google Sign-In. Los usuarios pueden crear, ver, actualizar y eliminar entradas de texto (título y descripción) en Firestore Database y cargar imágenes utilizando Cloudinary Management Console. La aplicación también incluye un sistema de administración de estado robusto utilizando Redux Toolkit y varias herramientas adicionales para mejorar la experiencia del usuario y el flujo de desarrollo.

## Características Técnicas
1. **Autenticación:** Los usuarios pueden registrarse y autenticarse usando:
- Firebase Authentication.
- Google Sign-In.
- Estado de autenticación persistente (incluso en actualización de página o nueva sesión).

2. **Gestión de Datos:**
- CRUD para el manejo de entradas de texto (título y descripción) usando Firestore.
- Subida y gestión de imágenes en Cloudinary.

3. **Interfaz de Usuario:**
- Estilos consistentes y componentes personalizados usando Material UI.
- Animaciones adicionales para mejorar la experiencia del usuario.

4. **Testing y Pruebas:**
- Pruebas de reducers en Redux.
- Pruebas de tareas asíncronas y operaciones en Firebase y Firestore.

## Tecnologías y Herramientas
### Desarrollo en React
- **React:** Framework de JavaScript utilizado para construir interfaces de usuario.
- **Material UI:** Biblioteca de componentes que proporciona estilos y componentes listos para usar.

### Gestión de Estado con Redux
- **Redux** Toolkit: Herramienta de Redux simplificada para manejar el estado de la aplicación.
- **RTK** Query: Librería para realizar operaciones asíncronas y acceder a APIs dentro del ecosistema Redux.
- **Redux** Devtools: Extensión para depuración de estado en Redux.
- **Store**: Configuración centralizada del estado con soporte para middlewares y slices.
- **Slices**: Divisiones del estado con acciones y reducers específicos.
- **Thunk**: Middleware para manejar acciones asíncronas en Redux.
- **Dispatch** y Actions: Mecanismos para lanzar acciones y modificar el estado global.
- **Middlewares**: Se utilizan para gestionar side effects como acciones asíncronas.

### Firebase y Firestore
- **Firebase** Authentication: Manejo de autenticación de usuarios y persistencia de sesiones.
- **Firestore** Database: Base de datos en la nube para almacenar y sincronizar datos en tiempo real.
- **Google** Sign-In: Autenticación utilizando una cuenta de Google.
- **CRUD** hacia Firestore: Operaciones de lectura, creación, actualización y eliminación.
- **Pruebas** en Firebase y Firestore: Validación de las funciones y el flujo de autenticación y datos.

### Cloudinary
- **Cloudinary** Management Console: Servicio para almacenar, administrar y servir imágenes en la aplicación.
- **Subida** de Archivos: Integración para seleccionar y cargar archivos desde Firebase a Cloudinary.

### Formulario de Registro de Usuarios
- **Formularios:** Manejo de formularios para la autenticación y la creación de entradas. 

### Manejo de Entornos
- **Variables de Entorno:** Configuración para entornos de desarrollo, test y producción.

## Instalación y Configuración

### 1. Clonar el repositorio:

`git clone https://github.com/xsoto-developer/react-firebase-gallery.git`
`cd react-gallery-spa`

### 2. Instala las dependencias:

`yarn install`

### 3. Iniciar el servidor de desarrollo:   

`yarn dev`

### Ejecuta la aplicación en el modo de desarrollo.\
Abre [http://localhost:3000] para verla en tu navegador.

La página se volverá a cargar cuando realices cambios.\

`yarn build`

## Funcionalidades Detalladas
### Autenticación
- Registro de usuarios con Firebase.
- Google Sign-In con Firebase.
- Mantener el estado de autenticación entre sesiones.

### Gestión de Datos en Firestore
- Almacena y sincroniza entradas de texto (título, descripción) con Firestore.
- CRUD de los datos de los usuarios autenticados.

### Manejo de Imágenes con Cloudinary
- Selección y carga de imágenes a Cloudinary desde Firebase.

### Estado Global con Redux
- Uso de Redux Toolkit para acciones, reducers y slices.
- Expansión del store con nuevos reducers y acciones asíncronas.
- Administración de operaciones asíncronas con Thunk y RTK Query.

## Pruebas
- **Pruebas en Reducers:** Validación de lógica de actualización de estado en Redux.
- **Pruebas de Acciones Asíncronas:** Simulación y validación de llamadas a la API y operaciones asíncronas.
- **Pruebas en Firebase y Firestore:** Pruebas de autenticación y de operaciones de CRUD en Firestore.

## Configuración de Variables Firebase
En el archivo `src/firebase/config.js`, define las credenciales necesarias para la configuración de Firebase de tu aplicación. Asegúrate de reemplazar los valores en `firebaseConfig` con tus credenciales específicas:

// Configuración de Firebase para la aplicación web
const firebaseConfig = {
  apiKey:             "__apiKey__",            // Clave API de Firebase
  authDomain:         "__authDomain__",        // Dominio de autenticación
  projectId:          "__projectId__",         // ID del proyecto en Firebas
  storageBucket:      "__storageBucket__",     // Bucket de almacenamiento
  messagingSenderId:  "__messagingSenderId__", // ID del remitente de mensajes
  appId:              "__appId__"              // ID de la aplicación
};
