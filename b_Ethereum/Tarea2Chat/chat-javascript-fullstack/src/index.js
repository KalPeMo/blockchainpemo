//primero creamos un servidor para que invoque la aplicación
//los usuarios no se envian mensajes entre si
//los usuarios envian un mensaje a un servidor y el servidor manda el mensaje al otro usuario

//npm init da los valores iniciales del proyecto, aqui se inicia un proyecto de nodejs
//package.json contiene la configuracion del proyecto, informacion relacionada al proyecto

//1. instalamos dependencias, trabajaremos con el framework express
//1. por consola: npm install express
//2- asignamos el objeto a una constante app
//2.1 nuestra app tiene que escuchar por tanto asignamos un puerto i.e 3000 y creamos la escucha del servidor
//2.2 podemos probar en consola: node index.js luego vamos al navegador localhost:3000
//3. creamos una carpeta public en el paquete donde trabajamos, nombre public
//4. creamos un archivo html y index.html
//5. testeamos con la creacion de un header
//6. volvemos a editar el archivo .js y llamamos a la carpeta; app.use(express.static('public'));
//6.1 podemos probar en consola: node index.js luego vamos al navegador localhost:3000
//7. creamos dentro de public las carpetas css y js, se pueden crear carpetas de imagenes y fuentes
//8. podemos hacer pruebas con nuestro archivo de estilos css
//9. enlazamos la hoja de estilos css en index.html
//9.1 uigradients.com es una pagina que tiene hojas css con estilo
//10. creamos main.js y lo enlazamos en el html debajo de h1
//11. empezamos a utilizar websockets para que sea funcional, asi  se comunican los usuarios entre si, para que no sean stateless. el servidor per se siempre es stateless, recibe mensaje y responde...
//12. llamamos a socket.io y la almacenamos en una constante, recomendable ponerle el mismo nombre del modulo
//13. por consola: npm install socket.io
//14. el modulo funciona encima de un servidor, para que funcione encima de un servidor debe existir un servidor
//15. app=express() utilizaba express para crear un servidor
//16. se invoca el modulo "http" asi: const http=require('http');
//17. cambiamos app.listen por server.listen
//18. almacenamos el servidor en una constante const server=http.createServer(app);
//19. ahora se le pide al servidor que escuche desde el servidor const io = socketio.listen(server)
//20. devuelve una conexion de websockets esas conexiones la llamamos io
//21. en este punto hice varios intentos hasta que pude 
//22. creé una nueva carpeta src y reubiqué public e index.js ahi
//23. esto me lleva a invocar el modulo path
//24. instalé nodemon: npm install nodemon -D
//25. una vez instalda eliminamos la linea test en package y agregamos la linea dev
//27. "dev": "nodemon src/index.js"   
//26. esta dependencia agrega agilidad en el momento de escribir el codigo
//28. ahora ya no se ejectua en consola "node src/index.js" sino que se puede utilizar npm "npm run dev"
//29. cuando se haga cambios en el servidor y se guarde ahora se actualiza en tiempo real cuando se grabe.
//30. ahora procuramos configurar el puerto
//31. en este chat de ejemplo utilizaré bootstrap para importar los estilos
//32. esto lo escribimos en index.html

//la información del chat javascript ha sido aprendida de https://www.youtube.com/watch?v=vGikkrp-HPM
//la información ha sido verificada y reescrita teniendo en cuenta posibles errores y las versiones mas recientes de node
//Hasta el momento se ha creado el servidor
//la idea es crear el chat completo en javascript y posteriormente conectarlo con ethereum
//de ethereum solo necesitaremos el usuario, con esta app al usuario solo se le cobrará una vez por ingreso de usuario, podrá utilizar esta dAPP
//otra idea para cobrar  el servicio, es que se le puede solicitar guardar la información de chat, al final la dAPP escribirá información si asi lo decide el usuario.
//revisando en junio de 20022
//min40

//var n=0;
const http=require('http');//checked
console.log('Invocando a modulo http'); 

const path=require('path');//checked
console.log('Invocando a modulo path'); 

const express=require ('express'); //checked
console.log('Invocando a modulo express');

/*//aqui se devuelve un objeto de js con todas las funcionalidades para hacer el servidor
const socketio=require('socket.io');
console.log('Conectado a socket.io');*/

//static files
const app=express();//checked
console.log('Creada instancia en express');
//app contiene los metodos y funciones de express almacenadas en app

const server=http.createServer(app); //checked
console.log('Creada instancia en http');

/*const io = socketio.listener=server;
console.log('Creada instancia en socket.io el servidor ha sido creado');*/
//const io = socketio.listen(server); no la recibió como función segun la pagina que la programa 010822 toca actualizar algunos metodos
//const io = socketio.listen(server) no fue admitido como función
//en lugar de ello se reemplaza por  la nueva expressión según manual



const {Server} =require("socket.io");
const io=new Server(server);
app.get('/', (req, res)=>{
    res.sendFile(__dirname+'/public/index.html');

});
app.get('/socket.io/socket.io.js',(req,res)=>{
    res.sendFile(__dirname+'/node_modules/socket.io/client-dist/socket.io.js');
})

//configuracion del puerto porque heroku amazon etc suelen tener sus propios puertos
puertomio=3000;
app.set('port', process.env.PORT||puertomio);

require('./sockets')(io);




//voy a escuchar en el servidor que cree
/*io.on('connection',function (socket) {
        n=n+1;
        console.log('Listener: se conectó un nuevo usuario, entrada #'+n);
    })*/



//console.log(path.join(__dirname,'public'));
app.use(express.static(path.join(__dirname,'public')));
//se llama con esta linea a la carpeta public

//necesitamos escuchar por eso necesitamos una funcionalidad que utilice puertos
server.listen(app.get('port'),()=>{
    
    console.log('El servidor esta en el puerto :'+app.get('port'));
});//checked

