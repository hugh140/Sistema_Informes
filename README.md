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
* También, en **./server**, crear un archivo **.env** que es donde se especificarán las variables del entorno. la estructura recomendable es la siguiente:
```shell
SECRET='agregar algún contenido, de preferencia una clave hash'
PORT='agregar el puerto donde se alojará el servidor, por ejemplo 3000'
USER='agregar el usuario para el inicio de sesión, ejemplo: msti'
PASSWORD='agregar la contraseña que va a requerir el administrador para iniciar sesión.'
```
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

### Servidor
Para iniciar el servidor local que utilizará el servidor, existen dos alternativas:
* Ejecutar el comando predeterminado de Nodejs para ejecutar scripts, node:
```bash
node ./server/app.js
```
* Ejecutar el script por medio de un paquete llamado [Nodemon](https://www.npmjs.com/package/nodemon):
```bash
nodemon ./server/app.js
```
Las ventajas del último comando comparado del primero, es que puede ejecutar el script después de haberse realizado cambios, sin necesidad de reiniciar el servidor nuevamente.

Para instalarlo, se utiliza el siguiente comando:
```bash
npm i nodemon
```
Así, se ejecutará el script ./app.js (que es la base de toda la funcionalidad back-end de la aplicación) en el puerto 3000 de forma predeterminada.

### ¿Cómo cambiar el puerto del servidor?
El puerto se lo puede cambiar dentro de app.listen, que está ubicado en ./app.js, pero no es recomendable cambiarlo directamente desde ahí, sino que se puede utilizar la constante PORT que se ubica dentro del mismo script, o cambiarlo desde las variables del entorno, ejemplo:
```shell
PORT=1234
```

## Estructura de las carpetas:
### Cliente
```shell
client/
├── src/
├── index.html
```
Dentro de la carpeta **./cliente** se puede encontrar un solo archivo importante, el cual es **./index.html**, el cuál se encarga de generar el estado primitivo de la aplicación web.

Aquí se encuentran algunos links para utilizar [Bootstrap](https://getbootstrap.com/docs/5.3/getting-started/introduction/) el cual es un framework front-end con clases y herramientas escritas en CSS y JS para realizar algunos componentes de una manera más rápida.

También está adjunto un kit de [Font Awesome](https://fontawesome.com/icons) para los íconos utilizados dentro de la aplicación.

```shell
client/
├── src/
│   ├── components/
│   ├── constants/
│   ├── pages/
│   ├── scripts/
│   ├── App.jsx
│   ├── main.jsx
│   ├── styles.css
├── index.html
```
Dentro de la carpeta **./src** es donde se ubica todo el funcionamiento de la página, donde **./main.jsx** contiene el script principal para que la aplicación pueda funcionar.

Dentro de **./App.jsx se encuentra el routeo de las páginas usando React Router, si se desea agregar un nuevo link, solo se debe de agregar un nuevo componente <Route> dentro de <Routes> con el respectivo nuevo componente. Es recomendable leer la documentación de [React Router](https://reactrouter.com/en/main)
```jsx
<BrowserRouter forceRefresh={true}>
  <Routes>
    <Route path='/consultar/:ing/:id' element={<TablaInformes />} />
    <Route path='/' element={<ElegirIng />} />
    <Route path='/subir/:ing' element={<SubirInformes />} />

    //Login
    <Route path='/login' element={<Login />} />
    <Route path='/admin' element={<AdminPage />} />
  </Routes>
</BrowserRouter>
```
Todos los componentes de las páginas están guardados dentro de la carpeta **./pages**. Y para importar la página dentro de **./App.jsx**, usar la siguiente línea ejemplo:
```js
import TablaInformes from "./pages/TablaInformes"
```

Dentro de la carpeta **./components** se encuentran componentes de React que pueden ser reutilizados, pero normalmente son componentes muy específicos. Si se desea agregar nuevos componentes, es la carpeta correspondiente.

Dentro de la carpeta **./constants** se ubican algunas constantes que utiliza la aplicación, el archivo que importa más es **./endpoints** porque aquí está la configuración de todos los endpoints del servidor que se utilizan en el cliente. Por lo que es una carpeta importante para configurar la ip de estos endpoints.

Para configurarlos, solo se debe de cambiar la ip de las contastes dir y redir, y dentro de ENDPOINT, solo agregar si se ha creado algún nuevo endpoint.
```js
const dir = 'http://172.19.0.19:3000' // <- Cambiar solo la ip, y el puerto (que es del servidor) si es necesario
export const redir = 'http://172.19.0.19:4000' // <- Cambiar solo la ip, y el puerto (que es del cliente) si es necesario

export const ENDPOINT = {
    CONSULTAR : dir +'/consultar/',
    SUBIR: dir + '/subir/',
    DESCARGAR: dir + '/descargar/',
    ADMIN: dir + '/admin',
    LOGIN: dir + '/login',
    CREAR_CARPETA: dir + '/carpeta/',
    ELIMINAR_CARPETA: dir + '/carpeta/eliminar',
    ELIMINAR_INFORME: dir + '/informe/eliminar',
    LOGOUT: dir + '/admin/logout'
}
```
Por último, dentro de la carpeta **./scripts**, se encuentran algunos scripts para reducir el código de algunos componentes, y convertir sus acciones en funciones.
