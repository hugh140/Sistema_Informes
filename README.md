# Sistema de Archivado de Informes Técnicos (SAIT)
SAIT es un proyecto realizado para agilizar la búsqueda y recopilación de informes técnicos dentro de la SENESCYT.

## Guía de Instalación
Es necesario tener [NodeJS](https://nodejs.org/en) instalado en el sistema para poder utilizar NPM y sus comandos.

Tiene dos formas de instalar el proyecto, mediante los archivos originales (que llevé por una Flash USB a la institución), o descargando o clonando este repositorio utilizando [Git](https://git-scm.com/).

Si tiene los archivos originales, puede saltarse estos pasos.

Todos los comandos que se mostrarán a continuación, pueden ser ejecutados con CMD o con Powershell (es preferible utilizar la última).

* Realizar el git clone correspondiente dentro del directorio deseado.
```bash
git clone https://github.com/hugh140/Sistema_Informes.git
```
* Dentro de la carpeta **./client**, instalar las dependencias utilizando NPM.
```bash
npm install
```
* De igual manera se aplica el mismo código pero dentro de la carpeta **./server/**.
* Dentro de la carpeta **./server/**, crear una carpeta llamada **./informes_tecnicos/**, esta es la carpeta donde se almacenarán todos los informes técnicos requeridos.
Con todo este procedimiento, ya debería de tener instalado el proyecto. A continuación se detallarán las dependencias utilizadas en este proyecto.

## Dependencias
Las dependencias son todas las herramientas que se utilizaron para la base de este proyecto, se pueden dividir en dos:

### Dependencias del cliente
* #### React
Como principal framework de desarrollo front-end utilizado en este proyecto es [React](https://es.reactjs.org/), que recomiendo estudiarlo antes de expandir elproyecto, ya que el 90% de la aplicación utiliza su lógica.

* #### Vite
El empaquetador que estoy utilizando es [Vite](https://vitejs.dev/) para armar la aplicación con React, ya que es relativamente nuevo y fácil de utilizar.

* #### React Router
El sistema de links y routeo de la aplicación fue hecha usando [React Router](https://reactrouter.com/en/main), la cuál permitió facilitar la navegación de la aplicación.

* #### Universal Cookie
La única función de [Universal Cookie](https://github.com/reactivestack/cookies/tree/master/packages/universal-cookie) es el de manejar las cookies del navegador del cliente para reconocer el inicio y cierre de sesión del usuario.

### Dependencias del servidor
* #### Express
El principal framework de desarrollo back-end utilizado en este proyecto es [Express](https://expressjs.com/es/), desde aquí se realizaron todas las rutas para consumir varias API REST usando Json del proyecto.

* #### Express File Upload
[Express File Upload](https://www.npmjs.com/package/express-fileupload) es un middleware que funciona con Express que permite, mediante una API REST, obtener archivos que envía un usuario.

* #### Cors
[CORS](https://expressjs.com/en/resources/middleware/cors.html) es un paquete que proporciona un middleware Connect/Express que se puede usar para habilitar CORS con varias opciones.

* #### Dotenv
Para la utilización de variables de entorno, utilizo [Dotenv](https://www.npmjs.com/package/dotenv), que facilita la lectura de las variables que utiliza el proyecto.

* #### Cookie Parser
[Cookie Parser](https://www.npmjs.com/package/cookie-parser) sirve para enviar y recibir cookies del cliente, para posteriormente leer la información que proporciona tal cookie, y posteriormente, tomar decisiones.

* #### Json Web Token
Para verificar y enviar tokens de sesión a los clientes, [Json Web Token](https://jwt.io/) funciona muy bien para verificar estas sesiones al momento de realizar un Login.

## Inicio del servidor local
### Cliente
Para iniciar el servidor local que manejará el cliente y poder cargar la página en desarrollo, se utiliza el siguiente comando:
```bash
npm run dev
```
De esta manera, el servicio Vite desplegará el servidor local con la ip de la máquina que se está utilizando para el desarrollo, y un puerto predeterminado en 4000.
Ejemplo: **http://192.168.100.9:4000**

#### ¿Cómo cambiar el puerto del cliente?
Para esto, Vite proporciona un archivo de configuración ubicada en ./client/viteconfig.js, desde aquí podemos agregar o quitar algunos ajustes, pero para cambiar el puerto se deberá de cambiar esta parte del código:
```js
export default defineConfig({
  plugins: [react()],
  server: {
    port: 4000, // <-- Cambiar el puerto.
    host: true // <-- Cambiar la exposición del servidor.
  },
})
```


