# MINIMAL ESTORE
Proyecto de ecommerce básico desarrollado en el curso de React para CoderHouse. 
Este permite:
- Visualizar una lista de productos de equipamiento de interiores para viviendas de una marca ficticia traidos desde una base de datos.
- Agregar productos a la lista de compra con sus cantidades.
- Eliminar productos de la lista de compra.
- Finalizar la compra llenando una formulario y devolviendo una orden de seguimiento de la compra.

###### Tecnologías utilizadas
- React
- Vite
- React-Bootstrap
- React Router
- Firebase

###### Instalación
_Sigue los siguientes pasos de instalación_
- Clona el repositorio en tu máquina local.
- Abre una terminal en el directorio del proyecto.
- Ejecuta los siguientes comandos:
```sh
npm install
npm run dev
```
- Abre tu navegador y entra al localhost:
```sh
http://localhost:5173/
```
###### Instalación de Firebase
- Crea una cuenta en Firebase y crea un nuevo proyecto.
- En la sección "Authentication" de Firebase, habilita el proveedor de 3. autenticación de correo electrónico y contraseña.
- En la sección "Firestore" de Firebase, crea una nueva base de datos y configura las reglas de seguridad para permitir lectura/escritura solamente a usuarios autenticados.
- En la sección "Project settings" de Firebase, haz clic en "Add app" y sigue las instrucciones para agregar una nueva aplicación web.
- Copia las credenciales de Firebase y configura las variables de entorno en el archivo .env de tu proyecto.

###### Licencia
MIT